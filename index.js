const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const {connectToMongoDB} = require('./connect')
const {restrictToLoggedinUserOnly, checkAuth} = require('./middleware/auth')

const URL = require('./models/url')

const urlRoute = require("./routes/url");
const staticRouter = require('./routes/staticRouter')
const userRoute = require('./routes/user');

const app = express();

connectToMongoDB('mongodb://localhost:27017/short-url').then(()=> console.log("MongoDb Connected")
);

app.set("view engine", 'ejs');
app.set("views", path.resolve("./views"));



app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());

app.use("/url", restrictToLoggedinUserOnly, urlRoute)
app.use("/user",  userRoute)
app.use("/", checkAuth, staticRouter)

app.get('/url/:shortId', async (req,res) => {
    const shortId = req.params.shortId;

const entry = await URL.findOneAndUpdate(
    { shortId },
    {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    },
    { new: true } // to return the updated document
);

    res.redirect(entry.redirectURL);
})

app.listen(8001, ()=> console.log("Server started at PORT 8001")
)
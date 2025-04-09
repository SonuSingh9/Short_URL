const express = require('express');
const router = express.Router();
const URL = require('../models/url');

// Home route (show all URLs)
router.get('/', async (req, res) => {
    try {
        const allurls = await URL.find({});
        res.render('home', { urls: allurls });
    } catch (err) {
        console.error("Error fetching all URLs:", err);
        res.status(500).send("Server error");
    }
});

// Signup route (shows user-specific URLs after sign-up)
router.get("/signup", async (req, res) => {
    try {
        if (!req.user) return res.redirect("/login");

        const allurls = await URL.find({ createdBy: req.user._id });
        return res.render("home", { urls: allurls });
    } catch (err) {
        console.error("Error fetching user-specific URLs:", err);
        res.status(500).send("Server error");
    }
});

// Login page
router.get("/login", (req, res) => {
    return res.render("login");
});

module.exports = router;

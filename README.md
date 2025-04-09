# 🔗 URL Shortener Web App

A full-stack URL shortener web application built with **Node.js**, **Express**, **MongoDB**, and **EJS**. Users can register, log in, shorten long URLs, and track the number of clicks with visit timestamps. The app includes authentication using JWT and a developer-friendly responsive UI.

---

## 🚀 Features

- Shorten and share custom URLs instantly
- View total clicks and visit timestamps per URL
- Full login/signup system with JWT-based secure access
- Personalized dashboard showing user-specific URLs
- Mobile-friendly, modern, and clean UI with EJS templates

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript (EJS for templating)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT, Cookies
- **Others:** shortid, UUID, cookie-parser, Postman

---

## 📂 Project Structure

/models → Mongoose schemas (User, URL) |-- user.js |-- url.js

/controllers → Logic for signup, login, short URL generation, analytics |-- user.js |-- url.js

/routes → Express route handlers |-- user.js |-- url.js |-- staticRouter.js

/middleware → Auth check using JWT |-- auth.js

/views → EJS templates for UI |-- login.ejs |-- signup.ejs |-- home.ejs

connect.js → MongoDB connection setup app.js / index.js → Main server file


---

## 🔧 How to Run Locally

1. **Clone this repository**
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   
---

## Install dependencies

bash
Copy
Edit
npm install

---

## Start MongoDB locally (default port: 27017)

---

## Run the application

bash
Copy
Edit
npm start

--

## Visit in browser

arduino
Copy
Edit
http://localhost:8001

--

✨ Sample Flow
User signs up or logs in

Enters a long URL to shorten

Gets a short URL like: http://localhost:8001/url/abc123

Dashboard shows click count and visit timestamps

📈 Future Enhancements
Add custom alias support for short URLs

Add password hashing for better security

Deploy on Render/Vercel with MongoDB Atlas

Include QR code generation for each short URL

👨‍💻 Author
Sonu Singh
📧 mr.sonukumar470@gmail.com
🔗 LinkedIn
🐙 GitHub







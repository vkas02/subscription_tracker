# Subscription Tracker API 🔐💸

A production-ready backend system for managing user subscriptions and payments with secure authentication and modern best practices.

[![Node.js](https://img.shields.io/badge/Node.js-18-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-blue)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

## Features 🚀

✅ **JWT & OAuth Authentication**  
✅ **Stripe/PayPal Payment Integration**  
✅ **Role-Based Access Control**  
✅ **Subscription Lifecycle Management**  
✅ **Rate Limiting & Security Headers**  
✅ **Winston Logging & Error Handling**  
✅ **Email Notifications**  
✅ **REST API Best Practices**

## Tech Stack 🛠️

**Backend**  
⌨️ Node.js | Express.js  
🛢️ MongoDB (Mongoose) | Redis

**Security**  
🔑 JWT | OAuth 2.0 | Helmet | CORS  
⏱️ Rate Limiting | CSRF Protection

**Payment**  
💳 Stripe API | PayPal REST API

**Infrastructure**  
📨 Nodemailer | Winston | Jest  
🐳 Docker | AWS EC2 | Heroku

## Getting Started 🏁

### Prerequisites
- Node.js 18+
- MongoDB Atlas/Compass
- Stripe/PayPal Developer Account
- SMTP Email Service (Mailgun/SendGrid)

### Installation
```bash
# Clone repository
git clone https://github.com/your-repo/subscription-api.git
cd subscription-api

# Install dependencies
npm install

# Set environment variables
cp .env.example .env

# Start development server
npm run dev
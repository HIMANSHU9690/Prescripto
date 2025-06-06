# 💊 Prescripto – Online Medical Appointment & Prescription Platform

Prescripto is a full-stack web application designed to simplify **medical appointment booking**, **online prescription management**, and **secure transactions** for patients and doctors. Built with the **MERN Stack**, it provides user-friendly dashboards for both patients and administrators.

---

## 🚀 Features

- 🩺 **Book Appointments** with available doctors
- 🧾 **Digital Prescription Management**
- 🧑‍⚕️ **Doctor/Admin Dashboard** for managing bookings
- 🔐 **JWT-Based Authentication & Authorization**
- 💳 **Secure Payment Integration** via **Razorpay**
- 📱 Fully **responsive UI** using **Tailwind CSS**
- 🧩 RESTful APIs for scalable backend communication

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Axios
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- Razorpay Payment Gateway
- JWT for Auth
- Dotenv for config

**Deployment:**
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

 (login page, dashboard, payment flow, etc.)

---

## ⚙️ Installation & Setup (For Local Development)

```bash
# 1. Clone the repo
git clone https://github.com/HIMANSHU9690/prescripto.git
cd prescripto

# 2. Install dependencies

# For frontend
cd client
npm install

# For backend
cd ../server
npm install



# 4. Run both servers

# Backend
cd server
npm run dev

# Frontend
cd ../client
npm run dev

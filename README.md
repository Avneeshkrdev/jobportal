# 🖥️ Job Portal Website

A platform connecting recruiters and job-seeking students. Recruiters can list their companies and job openings, while students can explore opportunities, apply for jobs, and track their application statuses.

---

## ✨ Features

### 🚀 For Recruiters:
- 🏢 Create and manage company profiles.
- 📋 Post job openings with detailed descriptions.
- 📨 Manage job applications seamlessly.

### 🎓 For Students:
- 📝 Register and create profiles.
- 🔍 Browse job listings and apply for positions.
- 📊 Track application statuses in real-time.

---

## 🛠️ Tech Stack

### 🌐 Frontend:
- **Framework:** React ⚛️
- **Styling:** TailwindCSS 🎨

### ⚙️ Backend:
- **Framework:** Node.js with Express.js 🛠️
- **Database:** MongoDB 🗂️
- **File Storage:** Cloudinary ☁️

---

## 🛠️ Setup Instructions

### 📋 Prerequisites:
- Node.js installed on your machine 🖥️.
- MongoDB connection string 🗄️.
- Cloudinary account for file storage 📂.

### 🏗️ Steps:
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd job-portal

2. 🛠️ Backend Setup:

1. Navigate to the `backend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in a `.env` file:
   ```env
   MONGO_URI=<Your MongoDB URI>
   CLOUDINARY_NAME=<Your Cloudinary Cloud Name>
   CLOUDINARY_API_KEY=<Your Cloudinary API Key>
   CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>
   JWT_SECRET=<Your JWT Secret>
   ```
4. Start the server:
   ```bash
   npm start
   ```

---

## 🌐 Frontend Setup:

1. Navigate to the `frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📂 Folder Structure

```plaintext
job-portal/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🚀 Future Enhancements
- 🔎 Add filters for job search (e.g., location, experience).
- 📩 Implement notifications for job updates.
- 📊 Provide analytics for recruiters.

---

## 📜 License
This project is licensed under the MIT License.

---

Developed with ❤️ by **Avneesh Kumar** 🚀
```

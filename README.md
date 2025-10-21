# 💧 Hydrogrid Smart Water Management System

A full-stack MERN application for smart cities, designed to monitor, diagnose, and optimize urban water usage across zones. Built for sponsor-facing deployment, field diagnostics, and executive reporting.

---

## 🚀 Key Features

- 📍 Zone-based sensor monitoring
- 📊 Real-time usage charts and alerts
- 🧠 Diagnostic engine with recommendations
- 📅 Daily scheduling and reporting
- 📤 Excel export for sponsor visibility
- 📱 Mobile-responsive for field technicians

---

## 🧱 Tech Stack

Layer

Technology

Frontend

React.js, Recharts

Backend

Node.js, Express

Database

MongoDB, Mongoose

Deployment

Vercel + Render

🗂️ Folder Structure

hydrogrid-smart-water/
├── client/              # React frontend
└── server/              # Express backend
    ├── models/          # MongoDB schemas
    ├── routes/          # API endpoints
    ├── controllers/     # Business logic
    ├── utils/           # Diagnostic helpers

📦 Installation

git clone https://github.com/hydrogrid/hydrogrid-smart-water.git
cd hydrogrid-smart-water
npm install
cd client && npm install

Create a .env file in /server with:

MONGO_URI=your_mongodb_connection_string

🧪 Sample Diagnostic Logic

if (reading.value > threshold) {
  createDiagnostic({
    zone: zoneId,
    issue: 'High usage',
    recommendation: 'Inspect for leaks or overuse',
    timestamp: new Date()
  });
}

📊 Dashboard Preview

✅ Zone overview with sensor health

📈 Line charts for water usage

⚠️ Diagnostic panel with timestamps

🗓️ Schedule manager for daily checks

📤 Excel Export

import * as XLSX from 'xlsx';
const worksheet = XLSX.utils.json_to_sheet(diagnostics);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'Diagnostics');
XLSX.writeFile(workbook, 'hydrogrid_report.xlsx');

🛡️ Branding & Sponsor Polish

Hydrogrid logo and color palette

Modular cards and clean layout

Mission statement and impact metrics

📍 Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

🤝 Contributors

HASSAN MOHAMMED SAID – Lead Developer & Strategist

Hydrogrid – Sponsor & Deployment Partner

📬 Contact

For sponsor inquiries or deployment partnerships:📧 hassan@hydrogrid.africa🌍 hydrogrid.africa


---



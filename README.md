# 💧 Hydrogrid Smart Water Management System

A full-stack MERN application for smart cities, designed to monitor, diagnose, and optimize urban water usage across zones. Built for sponsor-facing deployment, field diagnostics, and executive reporting.

---

## 🚀 Features

- 📍 Zone-based sensor monitoring
- 📊 Real-time usage charts and alerts
- 🧠 AI-powered diagnostic engine with recommendations
- 📅 Daily scheduling and technician checklists
- 📤 Excel and PDF export for sponsor visibility
- 🔐 Role-based dashboards (admin vs technician)
- 📱 Mobile-responsive layout for field access

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

Vercel (Frontend), Render (Backend), MongoDB Atlas

DevOps

Docker, GitHub Actions (optional)

🗂️ Folder Structure

hydrogrid-smart-water/
├── client/        # React frontend
│   ├── components/
│   │   ├── dashboard/
│   │   ├── admin/
│   │   ├── technician/
│   │   └── common/
│   └── ...
└── server/        # Express backend
    ├── models/        # MongoDB schemas
    ├── routes/        # API endpoints
    ├── controllers/   # Business logic
    ├── utils/         # Diagnostic engine, helpers
    └── ...

📦 Installation

git clone https://github.com/hydrogrid/hydrogrid-smart-water.git
cd hydrogrid-smart-water
npm install
cd client && npm install

Create a .env file in /server with:

MONGO_URI=your_mongodb_connection_string

🧪 Diagnostic Logic Example

if (reading.value > threshold) {
  createDiagnostic({
    zone: zoneId,
    issue: 'High usage',
    recommendation: 'Inspect for leaks or overuse',
    timestamp: new Date()
  });
}

📊 Dashboard Modules

✅ Zone overview with sensor health

📈 Usage charts (Recharts)

⚠️ Diagnostic panel with timestamps

🗓️ Schedule manager and technician checklists

📤 Excel + PDF export for sponsors

📬 Impact metrics and KPI summaries

📤 Excel Export

import * as XLSX from 'xlsx';
const worksheet = XLSX.utils.json_to_sheet(diagnostics);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'Diagnostics');
XLSX.writeFile(workbook, 'hydrogrid_report.xlsx');

📬 PDF Export

const PDFDocument = require('pdfkit');
const doc = new PDFDocument();
doc.text('Hydrogrid Sponsor Report');
diagnostics.forEach(d => {
  doc.text(`${d.zone} – ${d.issue} – ${d.recommendation}`);
});
doc.end();

🔐 Role-Based Access

Admin: Manage zones, thresholds, analytics

Technician: View assigned zone, complete checklist, submit diagnostics

🧪 Onboarding Guide

Login with credentials

View assigned zone and checklist

Submit diagnostics and export reports

Use mobile layout for field access

🛡️ Branding & Sponsor Polish

Hydrogrid logo and color palette

Modular cards and clean layout

Mission statement and impact metrics

PDF-ready summaries and export tools

📍 Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

🤝 Contributors

HASSAN MOHAMMED SAID – Lead Developer & Strategist

Hydrogrid – Sponsor & Deployment Partner

📬 Contact

📧 hassan@hydrogrid.africa

🌍 hydrogrid.africa


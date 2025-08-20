<<<<<<< HEAD
# Sadak-Sathi-Jules

**Sadak-Sathi-Jules** is a bilingual, real-time highway and bridge status dashboard for Nepal. It displays live updates on road closures, one-way/two-way traffic, and damaged bridges, using public government data.

## Features

- Interactive **Road** and **Bridge** status tables.
- Live **Leaflet map** with markers for roads and bridges.
- Responsive design using **Tailwind CSS**.
- Fetches data from **Google Sheets via Apps Script**.
- Super Admin can control **publish/hide rows** and **order** from the sheet.

## Data Sources

- **Road table** – contains road closures, obstacles, status, and contact info.
- **Bridge table** – contains bridge details, damage, restoration cost, and contact info.
- All data is sourced from **Nepal government published data**.
- Sensitive tables (emails, passwords, OTPs) are **not included** in the public endpoint.

## Public Endpoint

- Google Apps Script URL:  
  `https://script.google.com/macros/s/AKfycbw3GJ9Hy4SqeKymvHWe72MnHomIVMBK6Udgwcyxb5vJ0XGn0wKBcQAdh4j1wtG0f-n-5g/exec`
- Returns **only Road and Bridge tables** in JSON format.
- Safe for public use (`Anyone` can access).

## Local Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
=======
# Sadak-Sathi-Jules 🚦  
_AI-powered Route & Road Status Finder for Nepal_

Sadak-Sathi-Jules is a bilingual (Nepali-English) experimental web and mobile application designed to provide **real-time road and highway updates in Nepal**.  
It integrates **live traffic data, maps, weather, and AI-powered travel advice** to support safer and smarter journeys for all road users.

---

## 🌟 Key Features

### 🛣️ Road Status Updates
- Live updates (blocked, one-lane, resumed, under-construction, etc.)  
- Data sourced from **Google Sheets (DoR data)**  
- Filter by **province, district, highway, status**

### 🔎 Smart Search
- **Voice search** (Nepali & English)  
- **Text-based search** with instant results  

### 📑 Reports & Printing
- Printable tables for field officers and travelers  
- Auto-generated **road closure summaries**  

### 🗺️ Maps
- **Leaflet / Google Maps integration**  
- Supports DoR shapefiles (for Nepal-only maps)  
- Shows **closures, diversions, and alternate routes**  
- Nearby services: hotels, fuel stations, restaurants  

### 🤖 AI Integration
- **Gemini API** used for:  
  - Travel suggestions  
  - AI-based trip summaries  
  - Risk alerts (e.g., landslides, weather conditions)  

### 🌗 Modern UI
- Google Material Design inspired  
- **Dark/Light mode toggle**  
- Responsive **mobile-first layout**  
- **Tab-based dashboard** for quick navigation  

### 🔐 Role-Based Access
- **Users**: view road status, maps, AI advice  
- **Field Officers**: update road closure info  
- **Super Admin**: manage users, settings, full access  

### 📡 Offline & PWA (Planned)
- Works offline with cached data  
- Installable as a mobile app (Progressive Web App)  

---

## 🛠️ Tech Stack
- **Frontend**: HTML, Tailwind CSS, JavaScript  
- **Backend/Data**: Google Sheets + Apps Script endpoint  
- **APIs**: Google Maps / Leaflet, Gemini AI  
- **Design**: Material Design + custom styling  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/banjais/Sadak-Sathi-Jules.git
>>>>>>> feat/nepal-route-mvp
cd Sadak-Sathi-Jules

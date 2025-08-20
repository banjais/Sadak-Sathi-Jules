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
cd Sadak-Sathi-Jules

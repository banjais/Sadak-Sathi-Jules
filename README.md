# Sadak-Sathi 🚦
_A real-time road and highway status finder for Nepal_

Sadak-Sathi is a bilingual (Nepali-English) web application designed to provide **real-time road and highway updates in Nepal**.
It integrates **live traffic data from Waze and road status information from Google Sheets** to support safer and smarter journeys for all road users.

---

## 🌟 Key Features

### 🗺️ Interactive Map
- **Live Leaflet map** with markers for road status.
- Fetches and displays real-time incident data from **Waze**.
- Fetches and displays road status data from a **Google Sheet**.
- Color-coded markers for different road statuses (e.g., Blocked, One-Lane).

### パネル (Panels)
- **Display Panel:** Shows a list of road issues from the Google Sheet, with buttons to pan the map to the location.
- **Road Status Menu:** Buttons to filter or show different types of roads (though this is not yet implemented).
- **Driver Mode:** A panel with a compass, speedometer, and weather display (placeholders, not yet functional).
- **Onboard Panel:** A panel with placeholders for speed, fuel, and distance.

### 🌗 Modern UI
- **Dark/Light mode toggle**.
- Responsive layout using **Tailwind CSS**.
- Language toggle with options for English, Nepali, and Hindi (UI text is not yet internationalized).

---

## 🛠️ Tech Stack
- **Frontend**: HTML, Tailwind CSS, JavaScript
- **Mapping**: Leaflet.js
- **Data Sources**:
    - Google Sheets (via Google Apps Script)
    - Waze (via public partner feed)

---

## 🚀 Getting Started

To run this project, you can simply open the `index.html` file in a web browser.

### To set up locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/banjais/Sadak-Sathi-Jules.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Sadak-Sathi-Jules
   ```
3. Open `index.html` in your browser.

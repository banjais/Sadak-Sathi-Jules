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
cd Sadak-Sathi-Jules

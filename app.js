const map = L.map("map").setView([28.3949, 84.124], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

const roads = [
  { sn: 1, highway: "Prithvi Highway", section: "Kathmandu - Mugling", status: "Blocked" },
  { sn: 2, highway: "Mahendra Highway", section: "Butwal - Narayanghat", status: "One-lane" },
  { sn: 3, highway: "BP Highway", section: "Dhulikhel - Sindhuli", status: "Open" },
];

const tableBody = document.getElementById("road-table");
roads.forEach((r) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td class="border px-2 py-1">${r.sn}</td>
    <td class="border px-2 py-1">${r.highway}</td>
    <td class="border px-2 py-1">${r.section}</td>
    <td class="border px-2 py-1">${r.status}</td>
  `;
  tableBody.appendChild(row);

  const marker = L.marker([28 + Math.random(), 84 + Math.random()]).addTo(map);
  marker.bindPopup(`<b>${r.highway}</b><br>${r.section}<br>Status: ${r.status}`);
});

document.addEventListener('DOMContentLoaded', function () {
    const mapa = L.map('mapa-mx').setView([19.4330052269806, -99.16561329762217], 16);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapa);
  
    L.marker([19.4330052269806, -99.16561329762217])
      .addTo(mapa)
      .bindPopup('Ana Chula<br>Rio Rhin 22 Col. Renacimiento, Cuauhtémoc, 06500, CDMX, Piso 8')
      .openPopup();
  });
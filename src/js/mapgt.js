document.addEventListener('DOMContentLoaded', function () {
    const mapa = L.map('mapa-gt').setView([14.586966508347354, -90.4892790894681], 16);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapa);
  
    L.marker([14.586966508347354, -90.4892790894681])
      .addTo(mapa)
      .bindPopup('Ana Chula<br>Vista Hermosa II Edificio Plaza 21 Zona 15')
      .openPopup();
  });
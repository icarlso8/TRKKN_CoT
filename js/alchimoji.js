// js/alchimoji.js

// Este archivo controla la lógica de combinación, render y descarga

const assetsPath = 'assets';

const iconList = [
  'icon_promo_megaphone_01.png',
  'icon_promo_megaphone_02.png',
  'icon_telco_01.png',
  'icon_telco_02.png',
  'icon_telco_03.png',
  'icon_tv_01.png',
  'icon_tv_02.png',
  'icon_tv_03.png',
];

window.addEventListener('DOMContentLoaded', () => {
  // Poblar selects de íconos automáticamente
  ['iconSelect1', 'iconSelect2', 'iconSelect3'].forEach(selectId => {
    const select = document.querySelector(`select[name="${selectId}"]`);
    iconList.forEach(icon => {
      const option = document.createElement('option');
      option.value = `${assetsPath}/icons/${icon}`;
      option.textContent = icon;
      select.appendChild(option);
    });
  });
});

function generarCreatividades() {
  const audiencias = getCheckedValues('🎯 Audiencias:');
  const momentos = getCheckedValues('🕒 Momento del día:');
  const tamanos = getCheckedValues('📐 Tamaños:');

  const copies = [];
  for (let i = 1; i <= 3; i++) {
    const enabled = document.querySelector(`input[name="copy${i}"]`).checked;
    const text = document.querySelector(`input[name="copyText${i}"]`).value.trim();
    const color = document.querySelector(`input[name="copyColor${i}"]`).value;
    if (enabled && text) {
      copies.push({ text, color });
    }
  }

  const icons = [];
  for (let i = 1; i <= 3; i++) {
    const enabled = document.querySelector(`input[name="icon${i}"]`).checked;
    const iconPath = document.querySelector(`select[name="iconSelect${i}"]`).value;
    if (enabled && iconPath) {
      icons.push(iconPath);
    }
  }

  // Comenzar generación
  const preview = document.getElementById('preview');
  preview.innerHTML = '';

  audiencias.forEach(audiencia => {
    momentos.forEach(momento => {
      tamanos.forEach(tamano => {
        const fondoPath = `${assetsPath}/${audiencia}/${momento}/${audiencia}_${momento}_01.png`;

        // Simulación de renderizado por ahora
        const canvas = document.createElement('canvas');
        const [w, h] = tamano.split('x').map(n => parseInt(n));
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');

        // Cargar fondo
        const fondo = new Image();
        fondo.onload = () => {
          ctx.drawImage(fondo, 0, 0, w, h);
          // Mostrar copies
          copies.forEach((copy, i) => {
            ctx.fillStyle = copy.color;
            ctx.font = '20px Mulish';
            ctx.fillText(copy.text, 10, 30 + i * 30);
          });
          // Cargar íconos
          icons.forEach((iconSrc, idx) => {
            const icon = new Image();
            icon.src = iconSrc;
            icon.onload = () => {
              ctx.drawImage(icon, w - 40, 10 + idx * 40, 30, 30);
            };
          });
        };
        fondo.src = fondoPath;

        preview.appendChild(canvas);
      });
    });
  });
}

function descargarTodas() {
  const canvases = document.querySelectorAll('#preview canvas');
  canvases.forEach((canvas, i) => {
    const link = document.createElement('a');
    link.download = `creatividad_${i + 1}.png`;
    link.href = canvas.toDataURL();
    link.click();
  });
}

function getCheckedValues(labelText) {
  const labelGroup = Array.from(document.querySelectorAll('form .form-section')).find(
    section => section.innerText.includes(labelText)
  );
  return Array.from(labelGroup.querySelectorAll('input[type="checkbox"]:checked'))
    .map(input => input.value);
}

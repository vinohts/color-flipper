function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${hex.padStart(6, '0')}`;
  }
  
  function changeColor() {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById('color').textContent = newColor;
  }
  
  function copyColor() {
    const colorText = document.getElementById('color').textContent;
    navigator.clipboard.writeText(colorText).then(() => {
      alert(`Copied: ${colorText}`);
    });
  }
  let autoInterval = null;

function toggleAutoMode() {
  if (autoInterval) {
    clearInterval(autoInterval);
    autoInterval = null;
    alert("Auto mode stopped.");
  } else {
    autoInterval = setInterval(changeColor, 3000);
    alert("Auto mode started: changing every 3s");
  }
}

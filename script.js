function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${hex.padStart(6, '0')}`;
  }
  
  function changeColor() {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById('color').textContent = newColor;
  }
  
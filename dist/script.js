const dragElement = document.getElementById("draggable");

let offsetX = 0,
  offsetY = 0,
  isDown = false;

dragElement.addEventListener("mousedown", (e) => {
  isDown = true;
  offsetX = e.clientX - dragElement.offsetLeft;
  offsetY = e.clientY - dragElement.offsetTop;
});

document.addEventListener("mouseup", () => {
  isDown = false;
});

document.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  dragElement.style.left = `${e.clientX - offsetX}px`;
  dragElement.style.top = `${e.clientY - offsetY}px`;
});
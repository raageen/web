const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.margin = "20px auto";
container.style.padding = "20px";
container.style.border = "2px solid #333";
container.style.borderRadius = "10px";
container.style.backgroundColor = "#f0f0f0";
container.style.width = "300px";
container.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
document.body.appendChild(container);

const display = document.createElement("input");
display.type = "text";
display.readOnly = true;
display.style.width = "100%";
display.style.fontSize = "24px";
display.style.padding = "10px";
display.style.marginBottom = "10px";
display.style.textAlign = "right";
display.style.border = "1px solid #ccc";
display.style.borderRadius = "5px";
container.appendChild(display);

const buttons = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", "C", "=", "+"
];

const buttonsContainer = document.createElement("div");
buttonsContainer.style.display = "grid";
buttonsContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
buttonsContainer.style.gap = "10px";
container.appendChild(buttonsContainer);

buttons.forEach(text => {
  const button = document.createElement("button");
  button.textContent = text;
  button.style.padding = "15px";
  button.style.fontSize = "20px";
  button.style.borderRadius = "5px";
  button.style.border = "1px solid #888";
  button.style.cursor = "pointer";
  button.style.backgroundColor = "#fff";
  button.addEventListener("mouseover", () => button.style.backgroundColor = "#ddd");
  button.addEventListener("mouseout", () => button.style.backgroundColor = "#fff");

  button.addEventListener("click", () => handleButtonClick(text));
  buttonsContainer.appendChild(button);
});

function handleButtonClick(value) {
  if (value === "C") {
    display.value = "";
  } else if (value === "=") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else {
    display.value += value;
  }
}

function updateLayout() {
  const width = window.innerWidth;
  if (width < 480) {
    container.style.width = "90%";
    display.style.fontSize = "20px";
    buttonsContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
  } else if (width < 768) {
    container.style.width = "70%";
    display.style.fontSize = "22px";
  } else {
    container.style.width = "300px";
    display.style.fontSize = "24px";
  }
}

updateLayout();
window.addEventListener("resize", updateLayout);

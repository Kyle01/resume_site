const CustomStyle = {
  Classic: 1,
  Synthwave: 2,
};
Object.freeze(CustomStyle);

const styleSheet = document.getElementById("display-stylesheet");
const firstButton = document.getElementById("first-button");
const secondButton = document.getElementById("second-button");
const cachedStyle = localStorage.getItem("setStyle");

let currentStyle = localStorage.getItem("setStyle");

const changeStyle = (style) => {
  if (style == CustomStyle.Synthwave) {
    styleSheet.href = "./stylesheets/synthwave.css";
    firstButton.className = "button-one-not-selected";
    secondButton.className = "button-two-selected";
  } else if (style == CustomStyle.Classic) {
    styleSheet.href = "./stylesheets/classic.css";
    firstButton.className = "button-one-selected";
    secondButton.className = "button-two-not-selected";
  }
};

changeStyle(currentStyle);

firstButton.addEventListener("click", function () {
  const value = CustomStyle.Classic;
  localStorage.setItem("setStyle", value);
  changeStyle(value);
});
secondButton.addEventListener("click", function () {
  const value = CustomStyle.Synthwave;
  localStorage.setItem("setStyle", value);
  changeStyle(value);
});

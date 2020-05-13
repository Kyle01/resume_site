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
    styleSheet.href = "";
    secondButton.style.backgroundColor = "black";
    firstButton.style.backgroundColor = "white";
  } else if (style == CustomStyle.Classic) {
    firstButton.style.backgroundColor = "black";
    secondButton.style.backgroundColor = "white";
    styleSheet.href = "./stylesheets/classic.css";
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

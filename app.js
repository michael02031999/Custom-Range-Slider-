let slider = document.getElementById("myRange");
let score = document.getElementById("score");

slider.oninput = function () {
  console.log(this.value);
  let newValue = parseInt(this.value) * 2.8 + 10;
  score.innerHTML = this.value;

  console.log(newValue);
  score.style.left = newValue + "px";
};

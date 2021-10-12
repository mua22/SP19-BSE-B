console.log("JS Code Starting...");

function changeColor() {
  console.log("inside change color function");
  let para = document.getElementById("para");
  console.log(para.classList.contains("red"));
  if (para.classList.contains("red")) {
    para.classList.remove("red");
    para.classList.add("orange");
  } else if (para.classList.contains("orange")) {
    para.classList.remove("orange");
    para.classList.add("red");
  }
}

window.onload = function () {
  let btn = document.getElementById("myBtn");
  console.log(btn);
  btn.onclick = changeColor;
};

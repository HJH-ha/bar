// alert("test");

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
//1,2,3,4 단계 표시
let currentActive = 1;
//다음 버튼 클릭시
next.addEventListener("click", () => {
  currentActive++;

  update();
});

// 이전 버튼 누르면 ? 다음 버튼의 반대로 코드 작성
prev.addEventListener("click", () => {
  currentActive--;

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

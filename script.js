const boxContainer = document.querySelector(".box-container");

for (let i = 0; i <= 80; i++ ) {
  const boxes = document.createElement('div');
  boxes.classList.add('box');
  boxContainer.appendChild(boxes);
}

gsap.from(".box", {
  duration: 3, //終了までの時間
  scale: 0.1, //跳ねの大きさ
  opacity: 0, 
  delay: 0.3, //開始までの遅延
  stagger: 0.1, //スピード
  ease: "elastic", 
  force3D: true
});

document.querySelectorAll(".box").forEach(function(box) {
  box.addEventListener("click", function() {
    gsap.to(".box", {
      duration: 0.5, 
      opacity: 0, 
      y: -100, 
      stagger: 0.1,
      ease: "back.in"
    });
  });
});

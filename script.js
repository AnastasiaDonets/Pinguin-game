const pinguin = document.getElementById("pinguin");
const ice = document.getElementById("ice");

document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (pinguin.classList != "jump") {
    pinguin.classList.add("jump");
  }

  setTimeout(function () {
    pinguin.classList.remove("jump");
  }, 300);
}

let isAlive = setInterval(function () {
  let pinguinTop = parseInt(
    window.getComputedStyle(pinguin).getPropertyValue("top")
  );

  let iceLeft = parseInt(window.getComputedStyle(ice).getPropertyValue("left"));

  if (iceLeft < 30 && iceLeft > 0 && pinguinTop >= 140) {
    alert("GAME OVER!!");
  }
}, 10);

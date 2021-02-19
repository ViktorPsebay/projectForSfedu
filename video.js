const video = document.querySelector(".video__image");
console.log(video);
video.addEventListener("click", function (event) {
  if (video.getAttribute("src") == "images/video.png") {
    video.setAttribute("src", "images/fast_press.gif");
  } else {
    video.setAttribute("src", "images/video.png");
  }
});

const cv = document.querySelector(".info");
const timeline = document.querySelector(".timeline");
const end =document.querySelector(".circinfo.end")
let cvheight = cv.scrollHeight - end.scrollHeight;
// let cvheight = cv.scrollHeight;

window.addEventListener("load", sidenVises);

function sidenVises() {
  timeline.style.height = cvheight + "px";
}


const skiftdesc = document.querySelector("#aboutme");
const skiftbtns = skiftdesc.querySelectorAll("span.skiftdesc");
skiftbtns.forEach((skiftbtn) => {
  skiftbtn.addEventListener("click", page1);
  function page1(){
    skiftbtn.removeEventListener("click", page1);
    skiftbtn.addEventListener("click", page2);
    skiftdesc.classList.add("active")
  }
  function page2(){
    skiftbtn.removeEventListener("click", page2);
    skiftbtn.addEventListener("click", page1);
    skiftdesc.classList.remove("active")
  }
  
});

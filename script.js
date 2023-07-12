const btn = document.querySelector(".btn");
const nav = document.querySelector("#nav");
const darkMode = document.querySelector("#dark");
const para = document.querySelectorAll("p");
const icon = document.querySelector("#btn-icon");

let display = 0;

btn.addEventListener("click", () => {
  if (display === 0) {
    nav.classList.remove("sq-box");
    nav.classList.add("long-box");
    para.forEach((para , index) => {
      para.style.display = "block";
    });
    display = 1;
  } else {          
    nav.classList.remove("long-box");
    nav.classList.add("sq-box");
    para.forEach((para, index) => {
      para.style.display = "none";
    });
    display = 0;

  }
    
    if(icon.classList.contains('fa-bars')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
        

    }else{
        icon.classList.remove('fa-xmark')
        icon.classList.add('fa-bars')


    }
});

let darkColor = true;

darkMode.addEventListener("click", () => {
  const element = document.body;
  if (darkColor === true) {
    element.classList.add("dark-mode");
    para.forEach((para, index) => {
      para.style.color = "grey";
    });
    darkColor = false;
  } else {
    element.classList.remove("dark-mode");
    darkColor = true;
  }
});

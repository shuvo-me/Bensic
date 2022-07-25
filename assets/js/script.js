import { CountUp } from "./countup.mjs";
let hamBtn = document.getElementById("nav-hamburger");
let menuDrawer = document.querySelector("#nav-drawer");
let hideBtn = document.querySelector("#hide-drawer");
let preloader = document.querySelector(".preloader");
const header = document.querySelector("header");
const scrollUp = document.querySelector("#scroll-up");
const sections = document.querySelectorAll("section[id]");

AOS.init();
// document.getElementById("wrapper-main").style.display = "none";
hamBtn.addEventListener("click", function () {
  menuDrawer.classList.toggle("show-me");
});

hideBtn.addEventListener("click", hideDrawer);
function hideDrawer() {
  menuDrawer.classList.remove("show-me");
}

window.addEventListener("load", function (e) {
  let promise = new Promise((res) => {
    setTimeout(() => {
      preloader.style.display = "none";
      res();
    }, 3000);
  });

  promise.then(() => {
    document.getElementById("wrapper-main").classList.add("show");
  });

  //
});

// add sticky class when scroll down

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  if (this.window.scrollY > 500) {
    scrollUp.classList.add("show");
  } else {
    scrollUp.classList.remove("show");
  }
});

function scrollActive() {
  const scrollY = window.pageYOffset;
  // console.log(scrollY);
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 300,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-links ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-links ul li  a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

//slider
let back = document.querySelector("#prev");
let go = document.querySelector("#next");
let items = document.querySelectorAll(".slides");

let i = 0;
items[i].classList.add("active");

go.addEventListener("click", () => {
  i++;
  if (items.length == i) {
    i = 0;
  }
  items.forEach((item) => {
    item.classList.remove("active");
  });
  items[i].classList.add("active");
});

back.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = items.length - 1;
  }
  items.forEach((item) => {
    item.classList.remove("active");
  });
  items[i].classList.add("active");
});

// count up
const options1 = {
  separator: "",
  enableScrollSpy: true,
  suffix: "+",
};
const options2 = {
  separator: "",
  enableScrollSpy: true,
  suffix: "+",
};
const options3 = {
  separator: "",
  enableScrollSpy: true,
  suffix: "M",
};
new CountUp(document.getElementById("countup-1"), 400, options1);
new CountUp(document.getElementById("countup-2"), 800, options2);
new CountUp(document.getElementById("countup-3"), 900, options3);

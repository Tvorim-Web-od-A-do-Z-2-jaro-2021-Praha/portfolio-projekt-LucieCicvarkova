const scrolledElement = document.querySelector(".about-me");
const animatedElement = document.querySelector(".my-work");
const scrolledElementHeight = scrolledElement.offsetHeight;

let scrollPos = window.scrollY;

const addClassOnScrollNoDelay = () =>
animatedElement.classList.add("animate-lang-icon");


const addClassOnScrollDelayOne = () => {
    setTimeout(function(){
      animatedElement.classList.add("animate-html-icon"); 
    }, 1300);
}

const addClassOnScrollDelayTwo = () => {
    setTimeout(function(){
      animatedElement.classList.add("animate-js-icon"); 
    }, 2300);
}

const addClassOnScrollDelayThree = () => {
    setTimeout(function(){
      animatedElement.classList.add("animate-react-icon"); 
    }, 3300);
}

const removeClassesOnScroll = () =>
animatedElement.classList.remove("animate-lang-icon","animate-html-icon", "animate-js-icon", "animate-react-icon");

const removeClassesAfterAnimation = () => {
  setTimeout(function(){
    animatedElement.classList.remove("animate-lang-icon","animate-html-icon", "animate-js-icon", "animate-react-icon"); 
  }, 6000);
}


window.addEventListener("scroll", function () {
  scrollPos = window.scrollY;
  if (scrollPos >= scrolledElementHeight) {
    addClassOnScrollNoDelay();
    addClassOnScrollDelayOne();
    addClassOnScrollDelayTwo();
    addClassOnScrollDelayThree();
    removeClassesAfterAnimation();
  } else {
    removeClassesOnScroll();
  } 
});

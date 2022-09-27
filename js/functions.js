const coverStatic = document.querySelector("[coverStatic]");
const openingBook = document.querySelector("[openingBook]");
const pageStatic = document.querySelector("[pageStatic]");
const reverseBook = document.querySelector("[reverseBook]");
const pageBook = document.querySelector('[pageBook="pageBook"]')
const audio = document.querySelector('audio')

const openBook = () => {
  const firstEvent = () => {
    coverStatic.style.display = "none";
    openingBook.style.display = "block";
  };

  const secondEvent = () => {
    openingBook.style.display = "none";
    pageStatic.style.display = "block";
    pageBook.style.top = "0vh"
    pageBook.style.transition = "1s"
    audio.play()
    setInterval(() => {
      pageBook.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
    }, 700)
  };

  firstEvent();

  setTimeout(() => {
    secondEvent();
  }, 1870);
};

const closeBook = () => {
  const thirdEvent = () => {
    pageStatic.style.display = "none";
    reverseBook.style.display = "block";
    pageBook.style.transition = "1s"
    pageBook.style.top = "100vh"
    pageBook.style.backgroundColor = "rgba(0, 0, 0, 0.0)"
    audio.play()
  };

  const fourthEvent = () => {
    reverseBook.style.display = "none";
    coverStatic.style.display = "block";
  };

  thirdEvent();

  setTimeout(() => {
    fourthEvent();
  }, 1870);
};

const menuMobile = () => {
  let menuIcon = document.querySelector("[menu_icon]");
  let closeIcon = document.querySelector("[closeButtonMenu]");
  menuIcon.addEventListener("click", () => {
    let menuMobile = document.querySelector("[menu_mobile]");
    menuMobile.classList.remove("desactive_menu");
    menuMobile.classList.add("active_menu");
  });
  closeIcon.addEventListener("click", () => {
    let menuMobile = document.querySelector("[menu_mobile]");
    menuMobile.classList.remove("active_menu");
    menuMobile.classList.add("desactive_menu");
  });
};

const elementAnimate = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

const scrollAnimation = () => {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  elementAnimate.forEach(element => {
    if(windowTop > element.offsetTop){
      element.classList.add(animationClass)
    }else{
      element.classList.remove(animationClass)
    }
  })
};

window.addEventListener('scroll', () => {
  scrollAnimation();
})

menuMobile();

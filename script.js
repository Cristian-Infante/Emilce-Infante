window.onload = () => {
  const runAllScripts = () => {
    initializeAllSliders();
  };

  const listenForUrlChanges = () => {
    let url = location.href;
    document.body.addEventListener(
      "click",
      () => {
        requestAnimationFrame(() => {
          if (url !== location.href) {
            runAllScripts();
            url = location.href;
          }
        });
      },
      true
    );
  };

  const initializeAllSliders = () => {
    const allSliders = document.querySelectorAll('[data-type="slider"]');
    allSliders.forEach((slider) => {
      initializeSlider(slider);
    });
  };

  const initializeSlider = (slider) => {
    const slides = slider.querySelectorAll('[data-type="slide"]');
    const middle = Math.ceil(slides.length / 2);
    let currentSlide = middle;

    const nextSlideBtns = document.querySelectorAll(
      '[data-action="nextSlide"]'
    );
    const previousSlideBtns = document.querySelectorAll(
      '[data-action="previousSlide"]'
    );

    const changeSlide = (slideIndex, action) => {
      currentSlide = slideIndex;

      switch (action) {
        case "next":
          slideIndex === slides.length ?
            (currentSlide = 1) :
            currentSlide++;
          break;
        case "previous":
          slideIndex === 1 ?
            (currentSlide = slides.length) :
            currentSlide--;
      }

      const slide = slides[0];
      if (!slide) {
        console.error("No slides present");
        return;
      }
      const style = window.getComputedStyle(slide);
      slideWidth =
        parseInt(style.width) +
        parseInt(style.marginLeft) +
        parseInt(style.marginRight);
      const transformValue = -slideWidth * (currentSlide - middle);

      slider.style.transform = `translateX(${transformValue}px)`;
    };

    previousSlideBtns.forEach((btn) => {
      btn.addEventListener("click", () =>
        changeSlide(currentSlide, "previous")
      );
    });

    nextSlideBtns.forEach((btn) => {
      btn.addEventListener("click", () =>
        changeSlide(currentSlide, "next")
      );
    });
  };

  runAllScripts();
};


let IPF = IPS = IEN = 0;
document.getElementById("entradas").onclick = function () {
  entradas()
};
function entradas() {
  if (IEN == 0) {
    var a =[];
    var a = document.getElementsByClassName("entradas");
    for(i=0; i<a.length; i++){
      if(!a[i]){
        return true;
      }
      a[i].style.display='block';
    }
    var b =[];
    var b = document.getElementsByClassName("pfuertes");
    for(i=0; i<b.length; i++){
      if(!b[i]){
        return true;
      }
      b[i].style.display='none';
    }
    var c =[];
    var c = document.getElementsByClassName("pasabocas");
    for(i=0; i<c.length; i++){
      if(!c[i]){
        return true;
      }
      c[i].style.display='none';
    }
    IEN = 1;
    IPF = IPS = 0;
  } else {
    var a =[];
    var a = document.getElementsByClassName("entradas");
    for(i=0; i<a.length; i++){
      if(!a[i]){
        return true;
      }
      a[i].style.display='block';
    }
    var b =[];
    var b = document.getElementsByClassName("pfuertes");
    for(i=0; i<b.length; i++){
      if(!b[i]){
        return true;
      }
      b[i].style.display='block';
    }
    var c =[];
    var c = document.getElementsByClassName("pasabocas");
    for(i=0; i<c.length; i++){
      if(!c[i]){
        return true;
      }
      c[i].style.display='block';
    }
    IEN = 0;
  }
}

document.getElementById("pfuertes").onclick = function () {
  pfuertes()
};
function pfuertes() {
  if (IPF == 0) {
    var a =[];
    var a = document.getElementsByClassName("entradas");
    for(i=0; i<a.length; i++){
      if(!a[i]){
        return true;
      }
      a[i].style.display='none';
    }
    var b =[];
    var b = document.getElementsByClassName("pfuertes");
    for(i=0; i<b.length; i++){
      if(!b[i]){
        return true;
      }
      b[i].style.display='block';
    }
    var c =[];
    var c = document.getElementsByClassName("pasabocas");
    for(i=0; i<c.length; i++){
      if(!c[i]){
        return true;
      }
      c[i].style.display='none';
    }
    IPF = 1;
    IEN = IPS = 0;
  } else {
    var a =[];
    var a = document.getElementsByClassName("entradas");
    for(i=0; i<a.length; i++){
      if(!a[i]){
        return true;
      }
      a[i].style.display='block';
    }
    var b =[];
    var b = document.getElementsByClassName("pfuertes");
    for(i=0; i<b.length; i++){
      if(!b[i]){
        return true;
      }
      b[i].style.display='block';
    }
    var c =[];
    var c = document.getElementsByClassName("pasabocas");
    for(i=0; i<c.length; i++){
      if(!c[i]){
        return true;
      }
      c[i].style.display='block';
    }
    IPF = 0;
  }
}

document.getElementById("pasabocas").onclick = function () {
  pasabocas()
};
function pasabocas() {
  if (IPS == 0) {
    var a =[];
    var a = document.getElementsByClassName("entradas");
    for(i=0; i<a.length; i++){
      if(!a[i]){
        return true;
      }
      a[i].style.display='none';
    }
    var b =[];
    var b = document.getElementsByClassName("pfuertes");
    for(i=0; i<b.length; i++){
      if(!b[i]){
        return true;
      }
      b[i].style.display='none';
    }
    var c =[];
    var c = document.getElementsByClassName("pasabocas");
    for(i=0; i<c.length; i++){
      if(!c[i]){
        return true;
      }
      c[i].style.display='block';
    }
    IPS = 1;
    IPF = IEN = 0;
  } else {
    var a =[];
    var a = document.getElementsByClassName("entradas");
    for(i=0; i<a.length; i++){
      if(!a[i]){
        return true;
      }
      a[i].style.display='block';
    }
    var b =[];
    var b = document.getElementsByClassName("pfuertes");
    for(i=0; i<b.length; i++){
      if(!b[i]){
        return true;
      }
      b[i].style.display='block';
    }
    var c =[];
    var c = document.getElementsByClassName("pasabocas");
    for(i=0; i<c.length; i++){
      if(!c[i]){
        return true;
      }
      c[i].style.display='block';
    }
    IPS = 0;
  }
}


(function () {
  class Menu {
    init = () => {
      this.getMenuElementsAndAddEvents();
      this.getMenuElementsAndAddEventsByDataAttrs();
      this.getNavbarElementsAndAddEventsByDataThqAttrs();
      return this;
    };

    getMenuElementsAndAddEventsByDataAttrs = () => {
      const allHeaders = teleport.getAllElementsByDataAttribute(
        "role",
        "Header"
      );

      if (allHeaders.length === 0) {
        teleport.log("No Headers found in your project");
      }

      allHeaders.forEach((header) => {
        const burgerBtn = teleport.getElByDataAttribute(
          "type",
          "BurgerMenu",
          header
        );
        const mobileMenu = teleport.getElByDataAttribute(
          "type",
          "MobileMenu",
          header
        );
        const closeBtn = teleport.getElByDataAttribute(
          "type",
          "CloseMobileMenu",
          header
        );

        if (!burgerBtn || !mobileMenu || !closeBtn) {
          teleport.error(
            "The header elements (burger button, mobile menu, close button) could not be found.",
            header
          );
          return;
        }

        burgerBtn.addEventListener("click", () => {
          mobileMenu.classList.add("teleport-show");
        });

        closeBtn.addEventListener("click", () => {
          mobileMenu.classList.remove("teleport-show");
        });
      });
    };

    getNavbarElementsAndAddEventsByDataThqAttrs = () => {
      const allNavbars = teleport.getAllElementsByDataAttribute(
        "thq",
        "thq-navbar"
      );

      if (allNavbars.length === 0) {
        teleport.log("No Navbars found in your project");
      }

      allNavbars.forEach((navbar) => {
        const burgerBtn = teleport.getElByDataAttribute(
          "thq",
          "thq-burger-menu",
          navbar
        );
        const mobileMenu = teleport.getElByDataAttribute(
          "thq",
          "thq-mobile-menu",
          navbar
        );
        const closeBtn = teleport.getElByDataAttribute(
          "thq",
          "thq-close-menu",
          navbar
        );

        if (!burgerBtn || !mobileMenu || !closeBtn) {
          teleport.error(
            "The navbar elements (burger button, mobile menu, close button) could not be found.",
            navbar
          );
          return;
        }

        burgerBtn.addEventListener("click", () => {
          mobileMenu.classList.add("thq-show");
          mobileMenu.classList.add("thq-translate-to-default");
        });

        closeBtn.addEventListener("click", () => {
          mobileMenu.classList.remove("thq-show");
          mobileMenu.classList.remove("thq-translate-to-default");
        });
      });
    };

    getMenuElementsAndAddEvents = () => {
      const menuElements = teleport.getAllElByClass("teleport-menu-burger");

      if (menuElements.length === 0) {
        teleport.log("No teleport-menu-burger items found");
        return;
      }

      menuElements.forEach((burgerMenuElement) => {
        const mobileMenuElement =
          burgerMenuElement.nextElementSibling?.className.includes(
            "teleport-menu-mobile"
          ) ?
          burgerMenuElement.nextElementSibling :
          null;
        if (!mobileMenuElement) {
          teleport.error(
            `${burgerMenuElement} has no corresponding element with class 'teleport-menu-mobile' as the next sibling.`
          );
          return;
        }

        const closeMenuElement = mobileMenuElement.querySelector(
          '*[class*="teleport-menu-close"]'
        );
        if (!closeMenuElement) {
          teleport.error(
            `${mobileMenuElement} has no child element with class 'teleport-menu-close'`
          );
          return;
        }

        burgerMenuElement.addEventListener("click", () => {
          mobileMenuElement.classList.add("teleport-show");
        });
        closeMenuElement.addEventListener("click", () => {
          mobileMenuElement.classList.remove("teleport-show");
        });
      });
    };
  }

  class Accordion {
    init = () => {
      this.getAccordionElementsAndAddEvents();
    };

    getAccordionElementsAndAddEvents = () => {
      const allAccordions = teleport.getAllElementsByDataAttribute(
        "role",
        "Accordion"
      );

      if (!allAccordions.length) {
        teleport.log("No Accordions found in project");
      }

      allAccordions.forEach((accordion) => {
        const accordionHeader = teleport.getElByDataAttribute(
          "type",
          "AccordionHeader",
          accordion
        );
        const accordionContent = teleport.getElByDataAttribute(
          "type",
          "AccordionContent",
          accordion
        );

        accordionHeader.addEventListener("click", () => {
          accordionContent.style.maxHeight ?
            (accordionContent.style.maxHeight = "") :
            (accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`);
        });
      });
    };
  }

  const listenForUrlChanges = () => {
    let url = location.href;
    document.body.addEventListener(
      "click",
      () => {
        requestAnimationFrame(() => {
          if (url !== location.href) {
            new Menu().init();
            new Accordion().init();
            url = location.href;
          }
        });
      },
      true
    );
  };

  const teleport = {
    debug: false,
    log: (msg, obj) => {
      if (teleport.debug) {
        console.log("teleport: " + msg, obj || "");
      }
    },
    error: (msg, object) => {
      console.error("teleport-error: " + msg, object);
    },
    getElByClass: (className) => {
      const el = document.querySelector(`*[class*="${className}"]`);
      if (!el) {
        teleport.log(`did not find element with "${className}" class`);
      }
      return el;
    },
    getElByDataAttribute: (attribute, value, scope = document) => {
      const el = scope.querySelector(`[data-${attribute}="${value}"]`);
      if (!el) {
        teleport.log(`did not find element with "data-${attribute}=${value}"`);
      }
      return el;
    },
    getAllElByClass: (className) => {
      const elements = document.querySelectorAll(`*[class*="${className}"]`);
      if (!elements) {
        teleport.log(`did not find any elements with "${className}" class`);
      }
      return elements;
    },
    getAllElementsByDataAttribute: (attribute, value, scope = document) => {
      const elements = scope.querySelectorAll(`[data-${attribute}="${value}"]`);
      if (!elements) {
        teleport.log(
          `did not find any elements with "data-${attribute}=${value}"`
        );
      }
      return elements;
    },
    Menu,
    Accordion,
  };

  listenForUrlChanges();

  new Menu().init();
  new Accordion().init();
})();
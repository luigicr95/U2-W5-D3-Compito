let sliderContainer = document.querySelector(".slider-container");
let sliderButtonControls = document.querySelector(".slider-controls");
let sliderControls = ["previous", "next"];
let galleryItems = document.querySelectorAll(".slider-image");

class slideShow {
  constructor(container, images, controls) {
    this.slideshowContainer = container;
    this.slideshowImages = [...images];
    this.slideshowControls = controls;
  }

  moveSlideshow() {
    this.slideshowImages.forEach((el) => {
      el.classList.remove("slider-image-1");
      el.classList.remove("slider-image-2");
      el.classList.remove("slider-image-3");
      el.classList.remove("slider-image-4");
      el.classList.remove("slider-image-5");
    });

    this.slideshowImages.slice(0, 5).forEach((el, i) => {
      el.classList.add(`slider-image-${i + 1}`);
    });
  }

  setCurrentState(direction) {
    if (direction.className == "previous") {
      this.slideshowImages.unshift(this.slideshowImages.pop());
    } else {
      this.slideshowImages.push(this.slideshowImages.shift());
    }
    this.moveSlideshow();
  }

  setControls() {
    this.sliderControls.forEach((control) => {
      sliderButtonControls.appendChild(
        document.createElement("button")
      ).className = `slider-controls-${control}`;
      document.querySelector(`.slider-controls-${control}`).innerText = control;
    });
  }

  useControls() {
    let triggers = [...sliderButtonControls.childNodes];
    triggers.forEach((control) => {
      control.addEventListener("click", (e) => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

let exampleSlideshow = new slideShow(
  sliderContainer,
  galleryItems,
  sliderControls
);

exampleSlideshow.setControls();
exampleSlideshow.useControls();

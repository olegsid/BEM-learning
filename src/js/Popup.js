const ANIMATED_LOADER = "./assets/images/loader.svg";

export default class PopUp {
  constructor(modalSelector, closeButtonSelector) {
    this.$modal = document.querySelector(modalSelector);
    this.$closeButton = this.$modal.querySelector(closeButtonSelector);
    this.$image = this.$modal.querySelector("img");

    this.init();
  }

  init() {
    this.$closeButton.addEventListener("click", e => this.closePopUp());
    this.closePopUp();
  }

  closePopUp() {
    this.$modal.style = "display:none";
  }

  showPopup() {
    this.$modal.style = "display:flex";
  }

  loadImage(imageSrc) {
    this.$image.setAttribute("src", ANIMATED_LOADER);
    const imageLoader = new Image();
    imageLoader.src = imageSrc;
    imageLoader.onload = () => this.$image.setAttribute("src", imageLoader.src);
  }
}

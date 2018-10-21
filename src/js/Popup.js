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

    showPopup(imageSrc) {
        this.$modal.style = "display:flex";
        this.$image.setAttribute("src", imageSrc);
    }
}

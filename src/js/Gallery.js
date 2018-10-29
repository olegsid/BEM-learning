import galleryItems from "../galleryItems";
import { getRootElement } from "./utils";
import PopUp from "./Popup";

export class Gallery {
  constructor(galleryClassName) {
    this.items = [];
    this.$gallery = document.getElementsByClassName(galleryClassName)[0];
    this.$itemTemplate = document.getElementById("galleryItemTemplate");

    this.popUp = new PopUp(".modal", ".popup__close-button");
  }

  loadImages() {
    this.items = galleryItems.images;
    return this;
  }

  renderImages() {
    let $galleryItems = document.createDocumentFragment();

    this.items.forEach((item, index) => {
      let $item = this.$itemTemplate.cloneNode(true);
      let $thumb = $item.content.querySelector("img");
      let $li = $item.content.querySelector("li");

      $thumb.setAttribute("src", item.thumb);
      $li.dataset.imageId = index;
      $li.classList.add("js");

      $galleryItems.appendChild($item.content);
    });

    this.$gallery.appendChild($galleryItems);
    return this;
  }

  initEventListeners() {
    this.$gallery.addEventListener("click", event => {
      const image = getRootElement(event.target, "js");
      if (image) {
        const imageId = image.dataset.imageId;
        const imageSrc = this.items[imageId].src;

        this.popUp.loadImage(imageSrc);
        this.popUp.showPopup();
      }
    }); 
  }
}
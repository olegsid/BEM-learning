import "../scss/index.scss";
import * as tabs  from "./tabs"
import { Gallery } from "./Gallery";

const imageGallery = new Gallery("gallery-list");

imageGallery
  .loadImages()
  .renderImages()
  .initEventListeners();

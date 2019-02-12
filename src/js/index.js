import "../scss/index.scss";
import { Tabs } from "./Tabs"
import { Gallery } from "./Gallery";

const tabs = new Tabs();  
const imageGallery = new Gallery("gallery-list");

imageGallery
  .loadImages()
  .renderImages()
  .initEventListeners();



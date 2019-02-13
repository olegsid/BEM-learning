import "../scss/index.scss";
import { Tabs } from "./Tabs";
import { Gallery } from "./Gallery";
import { fetchImages } from "./api";

const tabs = new Tabs();
const gallery = new Gallery("gallery-list");

fetchImages("./galleryItems.json").then(data => gallery.init(data.images));

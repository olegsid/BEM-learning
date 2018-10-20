import "../scss/index.scss";
import { getRootElement } from "./utils";

import { Gallery } from "./Gallery";

const linkSelector = "nav-list__item";
const tabContentSelector = "tab";
const links = [...document.getElementsByClassName(linkSelector)];
const tabContent = [...document.getElementsByClassName(tabContentSelector)];

links.forEach(link =>
  link.addEventListener("click", function(event) {
    const rootElement = getRootElement(event.target, linkSelector);
    const tabName = rootElement.dataset.tab;

    links.forEach(item =>
      setActiveClass(
        item,
        `${linkSelector}--${tabName}`,
        `${linkSelector}--active`
      )
    );
    tabContent.forEach(item =>
      setActiveClass(item, tabName, `${tabContentSelector}--active`)
    );
  })
);

function setActiveClass(item, searchClassName, activeClassName) {
  item.classList.contains(searchClassName)
    ? item.classList.add(activeClassName)
    : item.classList.remove(activeClassName);
}

const imageGallery = new Gallery("gallery-list");

imageGallery
  .loadImages()
  .renderImages()
  .initEventListeners();

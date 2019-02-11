import { getRootElement, toggleActiveClass } from "./utils";

const tabLinkSelector = "nav-list__item";
const tabContentSelector = "tab";
const links = [...document.getElementsByClassName(tabLinkSelector)];
const tabContent = [...document.getElementsByClassName(tabContentSelector)];

links.forEach(link =>
  link.addEventListener("click", function(event) {
    const tabLinkRootElement = getRootElement(event.target, tabLinkSelector);
    const tabClassName = tabLinkRootElement.dataset.tab;
    const tabLinkActiveClassName = `${tabLinkSelector}--active`;
    const tabLinkNamedSelector = `${tabLinkSelector}--${tabClassName}`;

    links.forEach(tabLink =>
      toggleActiveClass(tabLink, tabLinkNamedSelector, tabLinkActiveClassName)
    );

    const tabContentActiveClassName = `${tabContentSelector}--active`;
    tabContent.forEach(tab =>
      toggleActiveClass(tab, tabClassName, tabContentActiveClassName)
    );
  })
);

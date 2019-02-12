const defaults = () => ({
  headingSelector: "nav-list__item",
  contentSelector: "tab",
  activeClassName: 'nav-list__item--active'
})


export class Tabs {
  constructor({ headingSelector, contentSelector, activeClassName} = defaults()) {
    const { tabHeading, tabContent } = this.getElements(headingSelector, contentSelector);
    this.setDataAttributes(tabHeading);
    this.attachListeners({ tabHeading, tabContent, activeClassName});
  }

  getElements(headingSelector, contentSelector) {
    const tabHeading = document.querySelector(headingSelector);
    const tabContent = document.querySelector(contentSelector);
    return { tabHeading, tabContent };
  }

  setDataAttributes(listOfElements) {
    listOfElements.map((element, index) => element.dataset.tab = index);
  }

  attachListeners({tabContent, tabHeading, activeClassName }) {
    tabHeading.map(element => element.addEventListener('click', ({currentTarget}) => {
      const selectedTabIndex = currentTarget.dataset.tab

      tabHeading.map(heading => this.makeInactive(heading, activeClassName));
      this.makeActive(tabHeading[selectedTabIndex], activeClassName);

      tabContent.map(tab => this.hide(tab));
      show(options.tabContent[selectedTabIndex]);
    }))
  }

  hide(element) {
    element.style.display = "none";
  }

  show(element) {
    element.style.display = "";
  }

  makeActive(element,className){
    element.classList.add('className');
  }

  makeInactive(element, className){
    element.classList.remove('className');
  }
}
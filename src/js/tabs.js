const defaults = () => ({
  headingSelector: ".nav-list__item",
  contentSelector: ".tab",
  activeClassName: "nav-list__item--active"
})


export class Tabs {
  constructor({ headingSelector, contentSelector, activeClassName} = defaults()) {
    const { tabHeadElements, tabContentElements } = this.getElements(headingSelector, contentSelector);
    
    this.addTabIndex(tabHeadElements);
    this.attachListeners({ tabHeadElements, tabContentElements, activeClassName});
    this.toggleTabs({ tabHeadElements, tabContentElements, activeClassName}, 0)
  }

  getElements(headingSelector, contentSelector) {
    const tabHeadElements = [...document.querySelectorAll(headingSelector)];
    const tabContentElements = [...document.querySelectorAll(contentSelector)];
    return { tabHeadElements, tabContentElements };
  }

  addTabIndex(listOfElements) {
    listOfElements.map((element, index) => element.dataset.tab = index);
  }

  attachListeners(options) {
    const { tabHeadElements } = options;
    tabHeadElements.map(element => element.addEventListener('click', ({currentTarget}) => {
      const selectedTabIndex = currentTarget.dataset.tab
      this.toggleTabs(options, selectedTabIndex)
    }))
  }

  toggleTabs({ tabHeadElements, tabContentElements, activeClassName }, selectedTabIndex ){
    tabHeadElements.map(heading => this.makeInactive(heading, activeClassName));
    this.makeActive(tabHeadElements[selectedTabIndex], activeClassName);

    tabContentElements.map(tab => this.hide(tab));
    this.show(tabContentElements[selectedTabIndex]);
  }

  hide(element) {
    element.style.display = "none";
  }

  show(element) {
    element.style.display = "";
  }

  makeActive(element,className){
    element.classList.add(className);
  }

  makeInactive(element, className){
    element.classList.remove(className);
  }
}
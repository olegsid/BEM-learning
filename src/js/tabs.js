const defaults = () => ({
  headingSelector: ".nav-list__item",
  contentSelector: ".tab",
  activeClassName: "nav-list__item--active"
})


export class Tabs {
  constructor({ headingSelector, contentSelector, activeClassName} = defaults()) {
    const { headElements, contentElements } = this.getElements(headingSelector, contentSelector);
    
    this.addIndexToTab(headElements);
    this.attachListeners({ headElements, contentElements, activeClassName});
    this.switchTabs({ headElements, contentElements, activeClassName}, 0)
    
  }

  getElements(headingSelector, contentSelector) {
    const headElements = [...document.querySelectorAll(headingSelector)];
    const contentElements = [...document.querySelectorAll(contentSelector)];
    return { headElements, contentElements };
  }

  addIndexToTab(listOfElements) {
    listOfElements.map((element, index) => element.dataset.tab = index);
  }

  attachListeners(options) {
    const { headElements } = options;
    headElements.map(element => element.addEventListener('click', ({currentTarget}) => {
      const selectedTabIndex = currentTarget.dataset.tab
      this.switchTabs(options, selectedTabIndex)
    }))
  }

  switchTabs({ headElements, contentElements, activeClassName }, tabIndex ){
    this.preserveElementHeight(contentElements,tabIndex);

    headElements.map(heading => this.makeInactive(heading, activeClassName));
    this.makeActive(headElements[tabIndex], activeClassName);
    contentElements.map(tab => this.hide(tab));
    this.show(contentElements[tabIndex]);
    
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
  preserveElementHeight(contentElements,index){
    const minHeight = this.geActiveContentHeight(contentElements);
    const newActiveContentElement = contentElements[index];
    newActiveContentElement.style.minHeight = minHeight +"px";
  }

  geActiveContentHeight(contentElements){
    const tab = contentElements.find(el => el.style.display !== "none")
    const tabHeight = tab.getBoundingClientRect().height;
    return tabHeight
  }
}
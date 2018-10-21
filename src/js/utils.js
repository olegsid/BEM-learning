function getRootElement(elem, className) {
  if (elem == null) return null;
  else
    return elem.classList.contains(className)
      ? elem
      : getRootElement(elem.parentElement, className);
}

function toggleActiveClass(item, searchClassName, activeClassName) {
  item.classList.contains(searchClassName)
    ? item.classList.add(activeClassName)
    : item.classList.remove(activeClassName);
}

export { getRootElement, toggleActiveClass };

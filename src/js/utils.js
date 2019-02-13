function getClosestByClassName(elem, className) {
  if (elem == null) return null;
  else
    return elem.classList.contains(className)
      ? elem
      : getClosestByClassName(elem.parentElement, className);
}

function toggleActiveClass(item, searchClassName, activeClassName) {
  item.classList.contains(searchClassName)
    ? item.classList.add(activeClassName)
    : item.classList.remove(activeClassName);
}

export { getClosestByClassName, toggleActiveClass };

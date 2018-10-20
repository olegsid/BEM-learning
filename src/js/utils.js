function getRootElement(elem, className) {
  if (elem == document) return null;
  else
    return elem.classList.contains(className)
      ? elem
      : getRootElement(elem.parentElement, className);
}

export { getRootElement };

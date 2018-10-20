function getRootElement(elem, className) {
  if (elem == null) return null;
  else
    return elem.classList.contains(className)
      ? elem
      : getRootElement(elem.parentElement, className);
}

export { getRootElement };

const createDOMElements = (tag, ...children) => {
  const element = document.createElement(tag);
  children.forEach((child) => {
    if (typeof child === "string") {
      const textNode = document.createTextNode(child);
      element.append(textNode);
    } else if (child instanceof HTMLElement) {
      element.append(child);
    } else if (child instanceof Object) {
      Object.entries(child).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }
  });
  return element;
};

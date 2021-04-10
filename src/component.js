export default (text = "Hell") => {
  const element = document.createElement("div");
  element.innerHTML = text;
  return element;
};

export default (text = "Helloooos") => {
  const element = document.createElement("div");
  element.innerHTML = text;
  return element;
};

const changingActiveElement = (element, nameOfActive) => {
  const ACTIVE_ELEMENT = document.querySelector(`.${nameOfActive}`);
  element.classList.add(nameOfActive);
  if (ACTIVE_ELEMENT) ACTIVE_ELEMENT.classList.remove(nameOfActive);
};

export default changingActiveElement;
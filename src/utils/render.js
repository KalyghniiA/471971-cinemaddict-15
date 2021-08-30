import Abstract from '../view/abstract';

export const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};

export const render = (container, child, place) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }

  if (child instanceof Abstract) {
    child = child.getElement();
  }
  switch(place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
  }
};

export const remove = (element) => {
  if (element instanceof Abstract) {
    element = element.getElement();
  }

  element.remove();
};

export const createElement = (template) => {
  const newElement = document.createElement('div');

  newElement.innerHTML = template;

  return newElement.firstChild;
};

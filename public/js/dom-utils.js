const setAttributes = function(el, attributesObj) {
  if (!attributesObj) return;
  Object.entries(attributesObj).forEach((attr) => {
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    el.setAttribute(...attr);
  });
};

const setTextOrValue = function(el, textOrValue) {
  if (typeof textOrValue === 'undefined') return;
  if (el.hasAttribute('value')) {
    el.value = textOrValue;
  } else {
    el.innerText = textOrValue;
  }
};

const createElement = function(tagName) {
  return function(content = '', attributesObj = {}) {
    const el = document.createElement(tagName);
    setTextOrValue(el, content);
    setAttributes(el, attributesObj);
    return el;
  };
};

const clearChildren = function(element) {
  element.innerHTML = '';
  return element;
};

const createIcon = createElement('I');
const createTableRow = createElement('TR');
const createTableData = createElement('TD');

export {
  createIcon,
  createTableRow,
  createTableData,
  clearChildren,
};

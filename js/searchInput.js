const createFixElem = () => {
  const elem = document.createElement('div');
  const searchString = document.createElement('input');
  const wrapper = document.createElement('div');
  const circle = document.createElement('div');
  const pageListener = document.createElement('div');

  elem.classList.add('search');
  searchString.classList.add('search-string');
  wrapper.classList.add('search-wrapper');
  wrapper.innerHTML = '<i class="fas fa-search"></i>';
  wrapper.appendChild(searchString);
  elem.appendChild(wrapper);
  circle.classList.add('circle');
  pageListener.classList.add('page');
  pageListener.textContent = '1';
  circle.appendChild(pageListener);
  document.body.appendChild(elem);
  document.body.appendChild(circle);

  return wrapper;
};

export { createFixElem as default };

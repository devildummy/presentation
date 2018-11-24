const arrows = () => {
  const left = document.createElement('div');
  const right = document.createElement('div');

  left.innerHTML = '<i class="fas fa-arrow-left"></i>';
  right.innerHTML = '<i class="fas fa-arrow-right"></i>';

  left.classList.add('controls');
  left.classList.add('left');
  right.classList.add('controls');
  right.classList.add('right');

  document.body.appendChild(left);
  document.body.appendChild(right);

  return [left, right];
};

export { arrows as default };

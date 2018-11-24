const toggleTooltip = (elem, ...rest) => {
  if (elem) {
    const tooltip = document.createElement('div');
    const coordinates = elem.getBoundingClientRect();
    const border = rest[0].getBoundingClientRect();
    tooltip.textContent = `This is ${elem.textContent} page, trust me`;
    let left = coordinates.left + coordinates.width / 2 - 100;
    let top = coordinates.top - 30;
    if (left < border.left) {
      ({ left } = coordinates);
    } else if ((left + 200) > border.left + border.width) {
      left = coordinates.left + coordinates.width - 200;
    }

    if (coordinates.top - border.top < 60) {
      top = coordinates.top + coordinates.height;
    }
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  } else if (document.body.lastChild.classList[0] === 'tooltip') {
    document.body.removeChild(document.body.lastChild);
  }
};

export { toggleTooltip as default };

const blurClickSelectors = ['a[href]', 'button'];

const initBlur = () => {
  document.addEventListener('click', (evt) => {
    blurClickSelectors.forEach((selector) => {
      const clickedElement = evt.target.closest(selector);

      if (clickedElement && clickedElement === document.activeElement) {
        clickedElement.blur();
      }
    });
  });
};

export {initBlur};

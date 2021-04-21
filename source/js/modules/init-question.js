const initQuestion = () => {
  const questionBlock = document.querySelector('.quiz__question');
  const nextButton = questionBlock.querySelector('.quiz__next-button');
  const answerRadios = questionBlock.querySelectorAll('.quiz__answer-item input[type="radio"]');

  if (nextButton) {
    nextButton.addEventListener('click', (evt) => {
      evt.preventDefault();
    });
  }

  if (answerRadios.length) {
    answerRadios.forEach((item) => {
      if (item.checked) {
        nextButton.classList.remove('button--disabled');
      }

      item.addEventListener('change', () => {
        nextButton.classList.remove('button--disabled');
        nextButton.href = `/${item.value}/`;
      });
    });
  }
};

export {initQuestion};

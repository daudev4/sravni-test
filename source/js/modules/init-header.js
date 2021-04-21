const initHeader = () => {
  const header = document.querySelector('.quiz__figure-header');

  if (header) {
    let lastScroll = 0;
    const headerHeight = header.offsetHeight;

    const onWindowScroll = () => {
      const currentScroll = Math.round(window.pageYOffset);

      if (currentScroll < lastScroll) {
        if (!((window.innerHeight + currentScroll) >= document.body.offsetHeight)) {
          header.classList.add('hide');
        }

        if (currentScroll < headerHeight) {
          header.classList.remove('quiz__figure-header--fixed');
          header.classList.remove('hide');
        }
      } else {
        if (currentScroll > headerHeight) {
          header.classList.add('quiz__figure-header--fixed');
          header.classList.remove('hide');
        }
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', onWindowScroll);
  }
};

export {initHeader};


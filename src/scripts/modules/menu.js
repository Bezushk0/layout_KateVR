export const setupMenu = () => {
  const langButton = document.querySelector('.menu__btn--lang');
  const helpButton = document.querySelector('.menu__btn--help');
  const faqButton = document.querySelector('.menu__btn--faq');
  const langMenu = document.querySelector('.menu__lang');
  const helpMenu = document.querySelector('.menu__help');
  const faqMenu = document.querySelector('.menu__faq');
  const backButton = document.querySelector('.menu__back');
  const navMenu = document.querySelector('.menu__nav');
  const closeIcon = document.querySelector('.menu__link-close');

  const resetMenu = () => {
    langMenu.style.display = 'none';
    helpMenu.style.display = 'none';
    faqMenu.style.display = 'none';
    navMenu.style.display = 'flex';
    backButton.style.display = 'none';
    closeIcon.style.display = 'flex';
    closeIcon.style.order = '1';
  };

  window.addEventListener('DOMContentLoaded', resetMenu);

  langButton.addEventListener('click', function () {
    langMenu.style.display = 'block';
    navMenu.style.display = 'none';
    closeIcon.style.display = 'none';
    backButton.style.display = 'block';
    closeIcon.style.order = '2';
  });

  helpButton.addEventListener('click', function () {
    helpMenu.style.display = 'grid';
    navMenu.style.display = 'none';
    backButton.style.display = 'block';
    closeIcon.style.order = '2';
  });

  faqButton.addEventListener('click', function () {
    faqMenu.style.display = 'grid';
    navMenu.style.display = 'none';
    backButton.style.display = 'block';
    closeIcon.style.order = '2';
  });

  helpMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      resetMenu();
    }
  });

  faqMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      resetMenu();
    }
  });

  const languageButtons = langMenu.querySelectorAll('.nav__link.menu__link');
  languageButtons.forEach(button => {
    button.addEventListener('click', function () {
      resetMenu();
    });
  });

  backButton.addEventListener('click', function () {
    resetMenu();
  });

  closeIcon.addEventListener('click', function () {
    resetMenu();
  });
};

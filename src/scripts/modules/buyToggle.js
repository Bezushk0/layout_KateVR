export const setupBuyToggle = () => {
  const buy = document.querySelector('.buy-module');
  const firstHelpList = buy.querySelector('.buy-module__support');
  const helpServiceBtn = buy.querySelectorAll('.buy-module__service-btn');
  const closeHelpBtn = document.querySelector('.buy-module__close');
  const openBuyBtns = document.querySelectorAll('.buy-btn');
  const orders = document.querySelectorAll('.buy-module__order');
  const steps = document.querySelectorAll('.buy-module__step');
  const nextBtn = document.querySelector('.buy-module__btn');
  const frm = document.forms['contact__form-buy'];

  let currentStep = 0;

  const updateUI = () => {
    orders.forEach((order, index) => {
      order.classList.toggle('buy-module__order--active', index === currentStep);
    });

    steps.forEach((step, index) => {
      step.classList.toggle('active', index === currentStep);
    });

    nextBtn.textContent = currentStep === steps.length - 1 ? 'Back to homepage' : 'Purchase';
  };

  const validateForm = () => {
    const firstname = frm['firstname'];
    const lastname = frm['lastname'];
    const emailBuy = frm['email-buy'];
    const phoneBuy = frm['phone-buy'];
    const shippingAdress = frm['shipping-adress'];
    const shippingAdress2 = frm['shipping-adress-2'];

    let err = false;

    if (!firstname.value.trim()) {
      firstnameField.setError(firstnameField.msg);
      err = true;
    }

    if (!lastname.value.trim()) {
      lastnameField.setError(lastnameField.msg);
      err = true;
    }

    if (!emailBuy.value.trim()) {
      emailBuyField.setError(emailBuyField.msg);
      err = true;
    }

    if (!phoneBuy.value.trim()) {
      phoneBuyField.setError(phoneBuyField.msg);
      err = true;
    }

    if (!shippingAdress.value.trim()) {
      shippingAdressField.setError(shippingAdressField.msg);
      err = true;
    }

    if (!shippingAdress2.value.trim()) {
      shippingAdress2Field.setError(shippingAdress2Field.msg);
      err = true;
    }

    return !err;
  };

  const handleNextStep = () => {
    if (currentStep === 0 && !validateForm()) {
      return;
    }

    if (currentStep < steps.length - 1) {
      currentStep++;
      updateUI();
    } else {
      window.location.href = './index.html';
    }
  };

  nextBtn.addEventListener('click', handleNextStep);
  updateUI();

  //top-bar
  const closeHelp = () => buy?.classList.remove('page__aside--active');
  const openHelp = () => buy?.classList.add('page__aside--active');

  openBuyBtns.forEach(btn => btn.addEventListener('click', openHelp));

  closeHelpBtn.addEventListener('click', closeHelp);

  helpServiceBtn.forEach(btn => btn.addEventListener('click', closeHelp));
};



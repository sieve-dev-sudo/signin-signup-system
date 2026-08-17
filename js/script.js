const container = document.getElementById('container');

document.querySelectorAll('[data-switch="signup"]').forEach((btn) => {
  btn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });
});

document.querySelectorAll('[data-switch="signin"]').forEach((btn) => {
  btn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });
});

// ---------- Forgot password modal ----------
const forgotModal = document.getElementById('forgotModal');
const forgotLink = document.getElementById('forgotPasswordLink');
const forgotClose = document.getElementById('forgotModalClose');
const forgotStepForm = document.getElementById('forgotStepForm');
const forgotStepSuccess = document.getElementById('forgotStepSuccess');
const forgotForm = document.getElementById('forgotForm');
const forgotEmail = document.getElementById('forgotEmail');
const forgotEmailError = document.getElementById('forgotEmailError');

function openForgotModal() {
  if (!forgotModal) return;
  // reset to the email-entry step every time it's opened
  forgotStepForm.hidden = false;
  forgotStepSuccess.hidden = true;
  if (forgotForm) forgotForm.reset();
  if (forgotEmail && forgotEmailError) clearError(forgotEmail, forgotEmailError);

  forgotModal.classList.add('show');
  forgotModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => forgotEmail && forgotEmail.focus(), 100);
}

function closeForgotModal() {
  if (!forgotModal) return;
  forgotModal.classList.remove('show');
  forgotModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (forgotLink) {
  forgotLink.addEventListener('click', (e) => {
    e.preventDefault();
    openForgotModal();
  });
}

if (forgotClose) {
  forgotClose.addEventListener('click', closeForgotModal);
}

if (forgotModal) {
  // click on the dark backdrop (not the card itself) closes the modal
  forgotModal.addEventListener('click', (e) => {
    if (e.target === forgotModal) closeForgotModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && forgotModal && forgotModal.classList.contains('show')) {
    closeForgotModal();
  }
});

const forgotBackBtn = document.getElementById('forgotBackToSignIn');
if (forgotBackBtn) {
  forgotBackBtn.addEventListener('click', closeForgotModal);
}

// ---------- Helpers ----------
function showError(input, errorEl, message) {
  input.classList.add('input-error');
  errorEl.textContent = message;
}

function clearError(input, errorEl) {
  input.classList.remove('input-error');
  errorEl.textContent = '';
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// ---------- Sign In validation ----------
const signInForm = document.getElementById('signInForm');

if (signInForm) {
  const siEmail = document.getElementById('siEmail');
  const siEmailError = document.getElementById('siEmailError');
  const siPassword = document.getElementById('siPassword');
  const siPasswordError = document.getElementById('siPasswordError');

  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    clearError(siEmail, siEmailError);
    clearError(siPassword, siPasswordError);

    if (siEmail.value.trim() === '') {
      showError(siEmail, siEmailError, 'Email is required');
      valid = false;
    } else if (!isValidEmail(siEmail.value.trim())) {
      showError(siEmail, siEmailError, 'Please enter a valid email');
      valid = false;
    }

    if (siPassword.value === '') {
      showError(siPassword, siPasswordError, 'Password is required');
      valid = false;
    }

    if (valid) {
      const btn = document.getElementById('signInSubmit');
      setLoading(btn, true);

      // simulate a network request - replace with your real API call
      setTimeout(() => {
        setLoading(btn, false);
        showToast('Signed in successfully', 'success');
        signInForm.reset();
      }, 1200);
    }
  });

  // clear error as the user types
  [siEmail, siPassword].forEach((input) => {
    input.addEventListener('input', () => {
      const errorEl = input === siEmail ? siEmailError : siPasswordError;
      clearError(input, errorEl);
    });
  });
}

// ---------- Sign Up validation ----------
const signUpForm = document.getElementById('signUpForm');

if (signUpForm) {
  const suName = document.getElementById('suName');
  const suNameError = document.getElementById('suNameError');
  const suEmail = document.getElementById('suEmail');
  const suEmailError = document.getElementById('suEmailError');
  const suPassword = document.getElementById('suPassword');
  const suPasswordError = document.getElementById('suPasswordError');

  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    clearError(suName, suNameError);
    clearError(suEmail, suEmailError);
    clearError(suPassword, suPasswordError);

    if (suName.value.trim() === '') {
      showError(suName, suNameError, 'Name is required');
      valid = false;
    }

    if (suEmail.value.trim() === '') {
      showError(suEmail, suEmailError, 'Email is required');
      valid = false;
    } else if (!isValidEmail(suEmail.value.trim())) {
      showError(suEmail, suEmailError, 'Please enter a valid email');
      valid = false;
    }

    if (suPassword.value === '') {
      showError(suPassword, suPasswordError, 'Password is required');
      valid = false;
    } else if (suPassword.value.length < 8) {
      showError(suPassword, suPasswordError, 'Password must be at least 8 characters');
      valid = false;
    }

    if (valid) {
      const btn = document.getElementById('signUpSubmit');
      setLoading(btn, true);

      // simulate a network request - replace with your real API call
      setTimeout(() => {
        setLoading(btn, false);
        showToast('Account created successfully', 'success');
        signUpForm.reset();
      }, 1200);
    }
  });

  [suName, suEmail, suPassword].forEach((input) => {
    input.addEventListener('input', () => {
      const errorEl =
        input === suName ? suNameError :
        input === suEmail ? suEmailError : suPasswordError;
      clearError(input, errorEl);
    });
  });
}

// ---------- Forgot password validation ----------
const forgotFormEl = document.getElementById('forgotForm');

if (forgotFormEl) {
  const forgotEmail = document.getElementById('forgotEmail');
  const forgotEmailError = document.getElementById('forgotEmailError');

  forgotFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    clearError(forgotEmail, forgotEmailError);

    if (forgotEmail.value.trim() === '') {
      showError(forgotEmail, forgotEmailError, 'Email is required');
      return;
    }
    if (!isValidEmail(forgotEmail.value.trim())) {
      showError(forgotEmail, forgotEmailError, 'Please enter a valid email');
      return;
    }

    const btn = document.getElementById('forgotSubmit');
    setLoading(btn, true);

    // simulate a network request - replace with your real API call
    setTimeout(() => {
      setLoading(btn, false);

      const sentTo = document.getElementById('forgotSentTo');
      if (sentTo) sentTo.textContent = forgotEmail.value.trim();

      document.getElementById('forgotStepForm').hidden = true;
      document.getElementById('forgotStepSuccess').hidden = false;
    }, 1200);
  });

  forgotEmail.addEventListener('input', () => {
    clearError(forgotEmail, forgotEmailError);
  });
}

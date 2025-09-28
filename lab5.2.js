// console.log("Hello");
// DOM elements
const registrationForm = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const messageContainer = document.getElementById("messageContainer");
// Error spans
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Check for username in local storage
document.addEventListener("DOMContentLoaded", function () {
  const usernameFromLocalStorage = localStorage.getItem("username");

  if (usernameFromLocalStorage) {
    usernameInput.value = usernameFromLocalStorage;
  }
});

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Check password match first (prevents submit if mismatch)
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity("Passwords do not match.");
    confirmPasswordError.textContent = "Passwords do not match.";
    alert("Passwords do not match! Please try again.");
    return;
  } else {
    confirmPasswordInput.setCustomValidity("");
  }

  // Full form validity check
  if (registrationForm.checkValidity()) {
    localStorage.setItem("username", usernameInput.value);

    // Success message
    const successMessage = document.createElement("div");
    successMessage.textContent =
      "Registered successfully! Welcome, " + usernameInput.value + "!";
    successMessage.classList.add("success-message");
    messageContainer.appendChild(successMessage);
    setTimeout(() => {
      successMessage.remove();
    }, 5000);

    registrationForm.reset();
  } else {
    registrationForm.reportValidity();
  }
});

// Real-time validation
// Username
usernameInput.addEventListener("input", function () {
  if (usernameInput.validity.tooShort) {
    usernameInput.setCustomValidity(
      "Please enter a username with at least 3 characters."
    );
  } else {
    usernameInput.setCustomValidity("");
  }
  usernameError.textContent = usernameInput.validationMessage;
});

// Email
emailInput.addEventListener("input", function () {
  if (emailInput.validity.valueMissing) {
    emailInput.setCustomValidity("Email required.");
  } else if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity(
      "Please enter a valid email address (e.g., user@example.com)."
    );
  } else {
    emailInput.setCustomValidity("");
  }
  emailError.textContent = emailInput.validationMessage;
});

// Password
passwordInput.addEventListener("input", function () {
  const value = passwordInput.value;
  if (passwordInput.validity.tooShort) {
    passwordInput.setCustomValidity(
      "Password must be at least 8 characters long."
    );
  } else if (
    !/[A-Z]/.test(value) ||
    !/[a-z]/.test(value) ||
    !/[0-9]/.test(value)
  ) {
    passwordInput.setCustomValidity(
      "Password must include an uppercase letter, lowercase letter, and number."
    );
  } else {
    passwordInput.setCustomValidity("");
  }
  passwordError.textContent = passwordInput.validationMessage;
});

// Confirm Password
confirmPasswordInput.addEventListener("input", function () {
  if (confirmPasswordInput.validity.tooShort) {
    confirmPasswordInput.setCustomValidity(
      "Confirm password must be at least 8 characters long."
    );
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.setCustomValidity("Passwords do not match.");
  } else {
    confirmPasswordInput.setCustomValidity("");
  }
  confirmPasswordError.textContent = confirmPasswordInput.validationMessage;
});

const userIcon = document.getElementById("user-icon");
const authModal = document.getElementById("authModal");
const authClose = document.getElementById("authClose");
const toRegister = document.getElementById("toRegister");
const toLogin = document.getElementById("toLogin");

// Dùng class BEM mới
const loginForm = document.querySelector(".auth-form--login");
const registerForm = document.querySelector(".auth-form--register");

userIcon?.addEventListener("click", () => {
  authModal.classList.add("auth-modal--show");
  loginForm.classList.add("auth-form--active");
  registerForm.classList.remove("auth-form--active");
});

authClose?.addEventListener("click", () => {
  authModal.classList.remove("auth-modal--show");
  loginForm.classList.remove("auth-form--active");
  registerForm.classList.remove("auth-form--active");
});

toRegister?.addEventListener("click", () => {
  loginForm.classList.remove("auth-form--active");
  registerForm.classList.add("auth-form--active");
});

toLogin?.addEventListener("click", () => {
  registerForm.classList.remove("auth-form--active");
  loginForm.classList.add("auth-form--active");
});

authModal?.addEventListener("click", (e) => {
  if (e.target === authModal) {
    authModal.classList.remove("auth-modal--show");
    loginForm.classList.remove("auth-form--active");
    registerForm.classList.remove("auth-form--active");
  }
});

document.querySelectorAll('.nav__link[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // 60 là chiều cao header cố định (nếu có)
        behavior: "smooth",
      });
    }
  });
});

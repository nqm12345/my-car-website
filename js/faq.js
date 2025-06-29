document.querySelectorAll('.qa-reviews__faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const answer = btn.nextElementSibling;
    });
  });
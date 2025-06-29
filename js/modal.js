const modal = document.getElementById("carDetailModal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalSpeed = document.getElementById("modalSpeed");
const modalAcceleration = document.getElementById("modalAcceleration");
const modalEngine = document.getElementById("modalEngine");
const modalHorsepower = document.getElementById("modalHorsepower");
const modalYear = document.getElementById("modalYear");
const modalTech = document.getElementById("modalTech");
const closeBtn = document.querySelector(".modal__close");

// Khi click "Xem chi tiết"
document.querySelectorAll(".deals__card a").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const card = btn.closest(".deals__card");

    modalImg.src = card.querySelector("img").src;
    modalName.textContent = card.querySelector("h4").textContent;
    modalPrice.textContent = card.querySelector("h3").textContent;
    modalSpeed.textContent = card.querySelector(".bx-tachometer")?.parentElement.textContent.trim() || "N/A";
    modalHorsepower.textContent = card.querySelector(".bx-bolt-circle")?.parentElement.textContent.trim() || "N/A";
    modalAcceleration.textContent = card.querySelector(".bx-timer")?.parentElement.textContent.trim() || "N/A";
    modalEngine.textContent = card.querySelector(".bx-car")?.parentElement.textContent.trim() || "N/A";

    modalYear.textContent = "2023";
    modalTech.textContent = "Hybrid, Launch Control, Carbon Ceramic Brake";

    modal.style.display = "flex";
    document.body.classList.add("modal-open"); // Ngăn cuộn body
  });
});

// Nút đóng modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.remove("modal-open"); // Cho phép cuộn lại
});

// Đóng khi click bên ngoài modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});

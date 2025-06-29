// Chờ DOM tải xong
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".deals__tabs .btn");
  const tabContents = document.querySelectorAll(".tab__content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-id");

      // Bỏ class 'active' khỏi tất cả buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      // Thêm class 'active' cho button được click
      button.classList.add("active");

      // Ẩn tất cả tab content
      tabContents.forEach((tab) => tab.classList.remove("active"));

      // Hiện tab tương ứng
      const activeTab = document.getElementById(tabId);
      if (activeTab) {
        activeTab.classList.add("active");
      }
    });
  });
});

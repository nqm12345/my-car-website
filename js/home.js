// Ẩn scrollbar bằng JavaScript cho mọi trình duyệt
document.body.style.overflow = "hidden"; // Ẩn scroll tổng thể
document.body.style.scrollbarWidth = "none"; // Firefox
document.body.style.msOverflowStyle = "none"; // IE 10+

// Thêm style ẩn scrollbar cho Chrome, Safari (Webkit)
const style = document.createElement("style");
style.innerHTML = `
  ::-webkit-scrollbar {
    display: none;
  }
`;
document.head.appendChild(style);

// Dữ liệu slide
const slides = [
  {
    img: "images/home1.png",
    color: "#c50b19",
    filterShadow: "drop-shadow(0 0 10px #c50b19)",
    name: "Ferrari sf90  ",
    acceleration: "3.7",
    topSpeed: {
      value: "325",
      unit: "km/h",
      label: "Top Speed",
    },
    power: {
      value: "8.000",
      unit: "r.p.m",
      label: "Power",
    },
    description:
      "Ferrari là siêu xe đậm chất thể thao với thiết kế góc cạnh và động cơ mạnh mẽ. Nó tượng trưng cho tốc độ, đẳng cấp và sự khác biệt trên mọi cung đường.",
  },
  {
    img: "images/home2.png",
    color: "#f6ca08",
    filterShadow: "drop-shadow(0 0 10px #f6ca08)",
    name: "Bugatti Chiron",
    acceleration: "3.5",
    topSpeed: {
      value: "308",
      unit: "km/h",
      label: "Top Speed",
    },
    power: {
      value: "7.000",
      unit: "r.p.m",
      label: "Power",
    },
    description:
      "Bugatti Chiron là siêu xe đỉnh cao với thiết kế tinh xảo và hiệu suất vượt trội. Nó sở hữu động cơ W16 mạnh mẽ, đạt tốc độ trên 400 km/h, thể hiện đẳng cấp và sự hoàn hảo tuyệt đối.",
  },
  {
    img: "images/home3.png",
    color: "#b6b8b7",
    filterShadow: "drop-shadow(0 0 10px #b3b5b4)",
    name: "Porsche 911",
    acceleration: "4.1",
    topSpeed: {
      value: "292",
      unit: "km/h",
      label: "Top Speed",
    },
    power: {
      value: "6.800",
      unit: "r.p.m",
      label: "Power",
    },
    description:
      "Porsche là biểu tượng của sự tinh tế và hiệu năng trong thế giới xe thể thao. Với thiết kế sang trọng cùng khả năng vận hành mạnh mẽ, Porsche mang lại trải nghiệm lái đầy cảm xúc và đẳng cấp.",
  },
];

// Hàm chuyển slide
function selectSlide(index) {
  const slide = slides[index];
  const wrapper = document.querySelector(".home__img-wrapper");
  const oldImg = wrapper.querySelector(".home__img.active");

  const newImg = document.createElement("img");
  newImg.src = slide.img;
  newImg.alt = "Ảnh xe";
  newImg.className = "home__img";

  wrapper.insertBefore(newImg, wrapper.firstChild);

  requestAnimationFrame(() => {
    newImg.classList.add("active");
    if (oldImg) oldImg.classList.add("out");
    oldImg?.classList.remove("active");
  });

  setTimeout(() => {
    if (oldImg && wrapper.contains(oldImg)) {
      wrapper.removeChild(oldImg);
    }
  }, 600);

  // Cập nhật thông tin xe
  document.querySelector(".home__car-name").style.color = slide.color;
  document.querySelector(".home__img").style.filter = slide.filterShadow;
  document.querySelector(".home__car-name").textContent = slide.name;
  document.querySelector(".home__car-label").textContent = slide.name;
  document.querySelector(".home__info-description").textContent =
    slide.description;
  document.querySelector(".home__info-h3").textContent = slide.acceleration;

  // Cập nhật thông số kỹ thuật
  const specsList = document.querySelector(".home__specs-list");
  specsList.innerHTML = "";

  const topSpeedBox = document.createElement("div");
  topSpeedBox.className = "home__info-box-small";
  topSpeedBox.innerHTML = `
    <div class="info-top">
      <ion-icon name="trending-up-outline" class="icon-box"></ion-icon>
      <h3>${slide.topSpeed.value}</h3>
    </div>
    <span>${slide.topSpeed.unit}</span>
    <span>${slide.topSpeed.label}</span>
  `;

  const powerBox = document.createElement("div");
  powerBox.className = "home__info-box-small";
  powerBox.innerHTML = `
    <div class="info-top">
      <ion-icon name="car-sport-outline" class="icon-box icon-box--small"></ion-icon>
      <h3>${slide.power.value}</h3>
    </div>
    <span>${slide.power.unit}</span>
    <span>${slide.power.label}</span>
  `;

  specsList.appendChild(topSpeedBox);
  specsList.appendChild(powerBox);

  // Đổi trạng thái nút số
  document.querySelectorAll(".home__number").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });
}

// ฟังก์ชันโหลด section
async function loadSection(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

// function ของ content-thinking.html
function updateSwiper1Text(swiper) {
  const activeSlide = swiper.slides[swiper.realIndex];
  if (activeSlide) {
    const title = activeSlide.dataset.title || "";
    // const description = activeSlide.dataset.description || '';
    const slideTitleElement = document.getElementById("swiper1-title");
    // const slideDescriptionElement = document.getElementById("slide-description");
    if (slideTitleElement) {
      slideTitleElement.textContent = title;
    }
    // if (slideDescriptionElement) {
    //     slideDescriptionElement.textContent = description;
    // }
  } else {
    console.warn("Active slide not found for realIndex:", swiper.realIndex);
  }
}

// function updateSwiper2Text(swiper) {
//   const activeSlide = swiper.slides[swiper.realIndex];
// }
// โหลด section แต่ละ html มาที่หน้า page
async function initializePage() {
  await loadSection("header", "../html/header.html");
  await loadSection("about", "../html/about.html");
  await loadSection("portfolio", "../html/portfolio-main.html");
  await loadSection("thinking", "../html/content-thinking.html");
  await loadSection("creative", "../html/creative-product.html");

  // ตรวจสอบว่า Swiper element อยู่ใน DOM แล้ว
  const swiperElement1 = document.querySelector(".mySwiper1");
  if (swiperElement1) {
    if (swiperElement1.swiper) {
      // ถ้า swiperElement1.swiper มีค่า แสดงว่าถูก initialize แล้ว
      swiperElement1.swiper.destroy(true, true); // ทำลาย instance เก่าก่อน
    }
    var swiper = new Swiper(swiperElement1, {
      effect: "cards",
      grabCursor: true,
      loop: false,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      cardsEffect: {
        rotate: true,
        slideShadows: true,
      },
      on: {
        init: function () {
          this.slideToLoop(0, 0);
          updateSwiper1Text(this);
        },
        slideChange: function () {
          updateSwiper1Text(this);
        },
      },
    });
  }
  // --- Initialize Swiper #2-1 (แถวที่ 1) ---
  const swiperElement2_1 = document.querySelector(".mySwiper2-1");
  if (swiperElement2_1) {
    // ทำลาย instance เก่าก่อน (เผื่อมีการเรียกซ้ำ)
    if (swiperElement2_1.swiper) swiperElement2_1.swiper.destroy(true, true);
    var swiper2_1 = new Swiper(swiperElement2_1, {
      slidesPerView: "auto",
      spaceBetween: 15,
      loop: true,
      freeMode: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false, // ไปข้างหน้า
      },
      speed: 2000, // ความเร็ว
    });
  }
  const swiperElement2_2 = document.querySelector(".mySwiper2-2");
  if (swiperElement2_2) {
    // ทำลาย instance เก่าก่อน (เผื่อมีการเรียกซ้ำ)
    if (swiperElement2_2.swiper) swiperElement2_2.swiper.destroy(true, true);
    var swiper2_1 = new Swiper(swiperElement2_2, {
      slidesPerView: "auto",
      spaceBetween: 15,
      loop: true,
      freeMode: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true, // ไปข้างหน้า
      },
      speed: 2000, // ความเร็ว
    });
  }
  const swiperElement2_3 = document.querySelector(".mySwiper2-3");
  if (swiperElement2_3) {
    // ทำลาย instance เก่าก่อน (เผื่อมีการเรียกซ้ำ)
    if (swiperElement2_3.swiper) swiperElement2_3.swiper.destroy(true, true);
    var swiper2_1 = new Swiper(swiperElement2_3, {
      slidesPerView: "auto",
      spaceBetween: 15,
      loop: true,
      freeMode: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false, // ไปข้างหน้า
      },
      speed: 2000, // ความเร็ว
    });
  }
  const swiperElement2_4 = document.querySelector(".mySwiper2-4");
  if (swiperElement2_4) {
    // ทำลาย instance เก่าก่อน (เผื่อมีการเรียกซ้ำ)
    if (swiperElement2_4.swiper) swiperElement2_4.swiper.destroy(true, true);
    var swiper2_1 = new Swiper(swiperElement2_4, {
      slidesPerView: "auto",
      spaceBetween: 15,
      loop: true,
      freeMode: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true, // ไปข้างหน้า
      },
      speed: 2000, // ความเร็ว
    });
  } else {
    console.error(
      "Swiper element (.mySwiper) not found after loading content-thinking.html."
    );
  }
}

// เรียกฟังก์ชันหลักเพื่อเริ่มต้นการโหลดและ initialization เมื่อ DOM พร้อม
document.addEventListener("DOMContentLoaded", initializePage);

// function ของ content-thinking.html

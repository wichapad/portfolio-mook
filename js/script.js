// import carouselGroup from "./data-carousel";

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

// โหลด section แต่ละ html มาที่หน้า page
async function initializePage() {
  await loadSection("header", "../html/header.html");
  await loadSection("about", "../html/about.html");
  await loadSection("portfolio", "../html/portfolio-main.html");
  await loadSection("thinking", "../html/content-thinking.html");
  await loadSection("creative", "../html/creative-product.html");

  const images = [
    "../assets/background/blond-woman-pointing-laptop-screen.jpg",
    "../assets/background/blond-woman-pointing-laptop-screen.jpg",
    "../assets/background/blond-woman-pointing-laptop-screen.jpg",
    "../assets/background/blond-woman-pointing-laptop-screen.jpg",
    "../assets/background/blond-woman-pointing-laptop-screen.jpg",
    "../assets/background/blond-woman-pointing-laptop-screen.jpg",
    "../assets/background/blond-woman-pointing-laptop-screen.jpg",
    "../assets/background/blond-woman-pointing-laptop-screen.jpg",
    "../assets/background/blond-woman-pointing-laptop-screen.jpg",
  ];

  const wrapper = document.querySelector(".carousel-wrapper");
  images.forEach((src) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide carousel-slide";
    slide.innerHTML = `<img src="${src}" />`;
    wrapper.appendChild(slide);
  });

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
    const swiperElement2 = document.getElementById("2-1");
    if (swiperElement2) {
      if (swiperElement2.swiper) swiperElement2.swiper.destroy(true, true);
      var swiper2 = new Swiper(swiperElement2, {
        slidesPerView: 5,
        centeredSlides: true,
        spaceBetween: 16,
        loop: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false, // ไปข้างหน้า
        },
        breakpoints: {
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        },

        speed: 3000, // ความเร็ว
      });
    }
  } else {
    console.error(
      "Swiper element (.mySwiper) not found after loading content-thinking.html."
    );
  }

  
}

// เรียกฟังก์ชันหลักเพื่อเริ่มต้นการโหลดและ initialization เมื่อ DOM พร้อม
document.addEventListener("DOMContentLoaded", initializePage);

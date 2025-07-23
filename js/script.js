// ฟังก์ชันโหลด section
async function loadSection(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}



  // function ของ content-thinking.html
  function updateExternalText(swiper) {
   // ใช้ realIndex เพื่อให้ได้ index ของสไลด์จริงเสมอ ไม่ว่าจะอยู่ในโหมด loop หรือไม่
    const activeSlide = swiper.slides[swiper.realIndex];

    // เพิ่มการตรวจสอบ null/undefined ก่อนเข้าถึง dataset เพื่อความปลอดภัย
    if (activeSlide) {
        const title = activeSlide.dataset.title || '';
        // const description = activeSlide.dataset.description || '';

        const slideTitleElement = document.getElementById("slide-title");
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

  // --- ตรงนี้คือจุดสำคัญ: INITIALIZE SWIPER หลังจากทุก Section โหลดเสร็จแล้ว ---
  // ตรวจสอบว่า Swiper element อยู่ใน DOM แล้ว
  const swiperElement = document.querySelector(".mySwiper");
  if (swiperElement) {
    if (swiperElement.swiper) {
      // ถ้า swiperElement.swiper มีค่า แสดงว่าถูก initialize แล้ว
      swiperElement.swiper.destroy(true, true); // ทำลาย instance เก่าก่อน
    }
    var swiper = new Swiper(swiperElement, {
      effect: "cards",
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 4000,
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
          updateExternalText(this);
        },
        slideChange: function () {
          updateExternalText(this);
        },
      },
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

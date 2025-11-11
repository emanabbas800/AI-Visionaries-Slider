var swiper;

function initSwiper() {
  // Destroy old swiper instance if it exists
  if (swiper && swiper.destroy) swiper.destroy(true, true);

  const isMobile = window.innerWidth <= 768;
  const swiperContainer = document.querySelector(".swiper");
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  if (isMobile) {
    // 🧨 Remove swiper-specific classes and inline styles
    swiperContainer.classList.remove("swiper-initialized", "swiper-horizontal", "swiper-android");
    swiperContainer.classList.add("mobile-static"); // 👈 custom class for mobile layout
    swiperWrapper.removeAttribute("style");

    // 🧹 Ensure slides are clean
    document.querySelectorAll(".swiper-slide").forEach(slide => {
      slide.removeAttribute("style");
    });

    return; // 🛑 stop swiper init on mobile
  }

  // ✅ Desktop Swiper initialization
  swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// ✅ Run when DOM is loaded
document.addEventListener("DOMContentLoaded", initSwiper);

// ✅ Re-init when resizing
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(initSwiper, 400);
});

// ✅ Popup controls
function openPopup(id) {
  document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

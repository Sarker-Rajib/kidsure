$('.center').slick({
  centerMode: false,
  slidesToShow: 5,

  prevArrow: `<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>`,
  nextArrow: `<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>`,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          // centerPadding: '40px',
          slidesToShow: 3
        }
      },

      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
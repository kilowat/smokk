$(document).ready(function () {

  $('#bx-slider').bxSlider({
    pagerCustom: '#bx-pager',
    controls: true,
  });

  $("#news-slick-slider").slick({
    "slidesToShow": 1,
    "slidesToScroll": 1,
    dots: true,
  });
  $('#link-slider').slick({
    "slidesToShow": 4,
    "slidesToScroll": 4,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  
  
});
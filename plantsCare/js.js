$(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 2,
      
      slidesToScroll: 0.5,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

  
$('.hi').slick({
  centerMode: true,
  centerPadding: '365px',
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 1
      }
    }
  ]
});
		

$('.center').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});
		
  
  
  
  
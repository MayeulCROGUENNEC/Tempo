new fullpage('#fullpage', {
  sectionsColor: ['#000', '#fff',  '#BAD1CD','#8332AC', '#B0DB43', '#CEC2FF', '#F7E3AF', '#F7AF9D'],
});


var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 350,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination"
  }
});

$('.killme').click(function(){
  $(this).parent().remove();
});
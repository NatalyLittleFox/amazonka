$('.review-cards').slick({
    slidesToShow: 4,
    slidesToScroll: 1,  
responsive: [
{
  breakpoint: 990,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplaySpeed: 5000,
    autoplay:true
  }
},
{
  breakpoint: 768,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplaySpeed: 5000,
    autoplay:true
  }
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});
$(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        
    });
    $('.about').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        
      });
      $('.photos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        
      });


      $('.main-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.main-img'
      });
      $('.main-img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main-text',
        dots: false,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        focusOnSelect: true,
        centerpadding: false,
      });
              
              
});
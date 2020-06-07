var $guestSlider = $(".footer-partners");
 
$(window).resize(function() {
  showPartnerSlider();
});
 
function showPartnerSlider() {
  if ($guestSlider.data("owlCarousel") !== "undefined") {
    if (window.matchMedia("(max-width: 1120px)").matches) {
      initialGuestSlider();
    } else {
      destroyGuestSlider();
    }
  }
}
showPartnerSlider();
 
function initialGuestSlider() {
  $guestSlider.addClass("owl-carousel").owlCarousel({
    responsive:{
        
        450:{
            items:2,
        },
        670:{
            items:3,
        },
        900:{
            items:4,
        },
        1120:{
            items:6,
        }
    },
    loop:true,
    autoWidth: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1000
  });
}
 
function destroyGuestSlider() {
  $guestSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}
const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}

function clock() {
    var d = new Date();
    var month = d.getMonth()
    var day = d.getDate();
    var hours = d.getHours();
    var minutes = d.getMinutes();  
    var seconds = d.getSeconds();
    
    if (month <= 9) month = "0" + month;
    if (day <= 9) day = "0" + day;
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;
     
    date_time = "KASE " + day + "/" + month + "/" + d.getFullYear() + " " + hours + ":" + minutes + ":" + seconds;
    if (document.layers) {
     document.layers.doc_time.document.write(date_time);
     document.layers.doc_time.document.close();
    }
    else document.getElementById("doc_time").innerHTML = date_time;
     setTimeout("clock()", 1000);
    }
    clock();


    // --------OWL Carousel start------- //
        var $homeSlider = $(".Publications-list");
 
$(window).resize(function() {
  showPublicSlider();
});
 
function showPublicSlider() {
  if ($homeSlider.data("owlCarousel") !== "undefined") {
    if (window.matchMedia("(min-width: 485px)").matches) {
      initialHomeSlider();
    } else {
      destroyHomeSlider();
    }
  }
}
showPublicSlider();
 
function initialHomeSlider() {
  $homeSlider.addClass("owl-carousel").owlCarousel({
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
        1100:{
            items:5,
        }
    },
    nav:true,
    // navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
    dots: false,
    margin: 20,
    autoplay: false,
    autoplayTimeout: 2000,
    smartSpeed: 1000
  });
}
 
function destroyHomeSlider() {
  $homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}

window.onload = function(){
  changePartner();
  AOS.init();
}
  $(".textShowMore").hide();

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500);
    return false;
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Header scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
       var target = $(this.hash);
       if (target.length) {
         var top_space = 0;

         if ($('#header').length) {
           top_space = $('#header').outerHeight();

           if (! $('#header').hasClass('header-scrolled')) {
             top_space = top_space - 20;
           }
         }

         $('html, body').animate({
           scrollTop: target.offset().top - top_space
         }, 1500);

         if ($(this).parents('.nav-menu').length) {
           $('.nav-menu .menu-active').removeClass('menu-active');
           $(this).closest('li').addClass('menu-active');
         }

         if ($('body').hasClass('mobile-nav-active')) {
           $('body').removeClass('mobile-nav-active');
           $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
           $('#mobile-body-overly').fadeOut();
         }
         return false;
       }
     }
   });

  // slajder
  var myIndex = 0;
  function slajderPrvi() {
   var i;
   var x = document.getElementsByClassName("mySlides");
   for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";
   }
   myIndex++;
   if (myIndex > x.length) {myIndex = 1}
   x[myIndex-1].style.display = "block";
   setTimeout(slajderPrvi, 5000);
  }
  slajderPrvi();

  // About
   $("#contentsDLC").on(
      "click",".toggle",function(){
          if($(this).prev().is(':visible')) {
              $(this).prev().slideUp("slow");
              $(this).text("Read More");
         } else {
              $(this).prev().slideDown("slow");
               $(this).text("Read Less");
              }
      });
  // Classes filter, koriscen isotope
var classesIsotope = $('.classes-container').isotope({
  itemSelector: '.classes-item',
  layoutMode: 'fitRows'
});

$('#classes-flters li').on( 'click', function() {
  $("#classes-flters li").removeClass('filter-active');
  $(this).addClass('filter-active');

  classesIsotope.isotope({ filter: $(this).data('filter') });
});

  // fancybox plugin
  $('[data-fancybox="class"]').fancybox({
    buttons: [
  "zoom",
  "slideShow",
  "download",
  "close"
],
   animationEffect: "zoom-in-out",
   animationDuration: 1000,
   transitionEffect: "zoom-in-out"
});

  // partners slide

  var partners =["img/clients/client-1.png", "img/clients/client-2.png", "img/clients/client-3.png",
"img/clients/client-4.png"]

  function changePartner(){
    var check = true;
    var partnerIndex = 0;
    var partnersImg = document.getElementById("partnersImg");
    setInterval(function(){
    if(check){
      partnersImg.style.opacity = 1;
      partnersImg.style.transition="opacity 2s ease-in-out";
      partnersImg.src=partners[partnerIndex];
      partnerIndex++;
        if(partnerIndex == partners.length){
          partnerIndex = 0;
        }
          check=false;
       } else{
          partnersImg.style.opacity = 0;
          partnersImg.style.transition="opacity 2s ease-in-out";
          check = true;
        }
    },2000);
  };
  // Forma
  // Promena boje i local storage

  // menjanje boje
  function changeColor(){
  var izabranaBoja = document.getElementById("izabranaBoja");
  var textColor = document.getElementById("planets");
  var pColor = textColor.getElementsByTagName("p");
  var tColor = textColor.getElementsByClassName('description')
  for(let i = 0; i < pColor.length; i++){
    for(let i = 0; i < tColor.length; i++){
        let color = document.getElementById('colorInputText').value;
        pColor[i].style.color = color;
        tColor[i].style.color = color;
                                                                 // storage ------------------------------
        localStorage.setItem('izabranaBoja', 1);

        if (localStorage.getItem('izabranaBoja') === '1'){
            izabranaBoja.style.opacity = 1;
            console.log(localStorage);
        }
    }
    // poruka
   }
     if(color = document.getElementById('colorInputText').value){
        document.getElementById("izabranaBoja").innerHTML =
        "<p title='Click to hide'>The color chosen is <b>" + color + "</b>!</p>";
        izabranaBoja.style.opacity = 1;
        izabranaBoja.style.transition="opacity 2s ease-in-out";
        izabranaBoja.addEventListener("click", hideColorMsg);
      }else{
          alert("Please choose your color!");
        }
  }
 // uklanjanje poruke
  function hideColorMsg(){
    if(izabranaBoja){
      izabranaBoja.style.opacity = 0;
      izabranaBoja.style.transition="opacity 2s ease-in-out";
      console.log(izabranaBoja);
    } else{
      izabranaBoja.style.opacity = 1;
      izabranaBoja.style.transition="opacity 2s ease-in-out";
    }
  }

  // local storage za boju

  // Store
  // Retrieve


/*
function changeColor(){
var textColor = document.getElementById("planets");
var pColor = textColor.getElementsByTagName("p");
var tColor = textColor.getElementsByClassName('description')
for(let i = 0; i < pColor.length; i++){
  for(let i = 0; i < tColor.length; i++){
      let color = document.getElementById('colorInputText').value;
      pColor[i].style.color = color;
      tColor[i].style.color = color;
  }
 }
}
*/

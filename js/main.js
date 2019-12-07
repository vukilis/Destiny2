window.onload = function(){
  AOS.init();
  changePartner();
  $(".textShowMore").hide();
  document.getElementById("formSubmit").addEventListener("click", proveri);
  subscribeBtn.addEventListener('click', newsletterValidatation);
}
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

  // scroll
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
          document.getElementById("izabranaBoja").innerHTML =
          "<p title='Click to hide'>The color is back to the <b>default</b>!</p>";
          izabranaBoja.style.opacity = 1;
          izabranaBoja.style.transition="opacity 2s ease-in-out";
          izabranaBoja.addEventListener("click", hideColorMsg);
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

 // FORMA
  // submit prevent
 $('#formSubmit').click(function(e){
  e.preventDefault();
});

  // dinamicka lista
 var nizSati = ["Choose...", "1-2", "2-4", "4-8", "8-16"];
 var ispisSati = "";

 for(let i in nizSati){
   ispisSati += `
     <option value="${i}">${nizSati[i]}</option>
   `;
 }
 document.getElementById("listaPitanje").innerHTML = ispisSati;

 // provera forme
 function proveri(){
   // datum
   var date = document.getElementById("date").value;
   var dateTime = new Date();
   var dateYear = dateTime.getFullYear();
   var dateMonths = dateTime.getMonth() + parseInt("1");
   var dateDay = dateTime.getDate();
   var nizDate = date.split("-");
   if(Number(nizDate[0]) < dateYear || Number(nizDate[1]) < dateMonths || Number(nizDate[2]) < dateDay){
     document.getElementById("date").classList.remove("dobar");
     document.getElementById("date").classList.add("greska");
     document.getElementById("dateAlert").innerHTML = "Please choose a date!";
   }
   else{
     document.getElementById("date").classList.remove("greska");
     document.getElementById("date").classList.add("dobar");
     document.getElementById("dateAlert").innerHTML = "";
   }

   // forma
   var ispravno = true;
   var firstName = document.getElementById("firstName").value;
   var lastName = document.getElementById("lastName").value;
   var poruka = document.getElementById("message").value;
   var email = document.getElementById("email").value;

   var regexFirstName = /^[A-Z][a-z]+$/;
   if(!regexFirstName.test(firstName)){
     document.getElementById("firstName").classList.remove("dobar");
     document.getElementById("firstName").classList.add("greska");
     document.getElementById("nameAlert").innerHTML = "Please write a correct name!";
     ispravno = false;
   }
   else{
     document.getElementById("firstName").classList.remove("greska");
     document.getElementById("firstName").classList.add("dobar");
     document.getElementById("nameAlert").innerHTML = "";
   }

   var regexLastName = /^[A-Z][a-z]+$/;
   if(!regexLastName.test(lastName)){
     document.getElementById("lastName").classList.remove("dobar");
     document.getElementById("lastName").classList.add("greska");
     document.getElementById("lnameAlert").innerHTML = "Please write a correct Last Name!";
     ispravno = false;
   }
   else{
     document.getElementById("lastName").classList.remove("greska");
     document.getElementById("lastName").classList.add("dobar");
     document.getElementById("lnameAlert").innerHTML = "";
   }

   var regexMessage = /^[A-ZČĆŽŠĐ][a-zčćžšđ]([\d \w]{5,100})$/;
   if(!regexMessage.test(poruka)){
     document.getElementById("message").classList.remove("dobar");
     document.getElementById("message").classList.add("greska");
     document.getElementById("msgAlert").innerHTML = "Please write a message!";
   }
   else{
     document.getElementById("message").classList.remove("greska");
     document.getElementById("message").classList.add("dobar");
     document.getElementById("msgAlert").innerHTML = "";
   }
   var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
   if(!regexEmail.test(email)){
     document.getElementById("email").classList.remove("dobar");
     document.getElementById("email").classList.add("greska");
     document.getElementById("emailAlert").innerHTML = "Please write a correct email!";
     ispravno = false;
   }
   else{
     document.getElementById("email").classList.remove("greska");
     document.getElementById("email").classList.add("dobar");
     document.getElementById("emailAlert").innerHTML = "";
   }

   if(document.getElementById("listaPitanje").value == 0){
     document.getElementById("listaPitanje").classList.remove("dobar");
     document.getElementById("listaPitanje").classList.add("greska");
     document.getElementById("pitanjeAlert").innerHTML = "Please choose one of the ansfers!";
   }
   else{
     document.getElementById("listaPitanje").classList.remove("greska");
     document.getElementById("listaPitanje").classList.add("dobar");
     document.getElementById("pitanjeAlert").innerHTML = "";
   }

// local storage za formu - set
   if(ispravno){
   if(localStorage){
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      console.log(localStorage);
   }
   else{
      console.log("localStorage not supported");
   }
 }
}
 // local storage za formu

 // Local storage - get
 if(localStorage){
   document.querySelector("#firstName").value=localStorage.getItem("firstName");
   document.querySelector("#lastName").value=localStorage.getItem("lastName");
   document.querySelector("#email").value=localStorage.getItem("email");
 }


// newsletter
let newsletter = document.querySelector('.newsletter'),
    subscribeBtn = document.querySelector('#subscribeBtn');
    $('#subscribeBtn').click(function(e){
        e.preventDefault();
    });
    newsletterValidatation = () => {
      let a = newsletter.value,
          b = /^[a-zšđžćč]{4,}(\.)?[a-zšđžćč]{4,}([0-9]{0,5})?\@((gmail)|(yahoo)|\w)\.com$/,
          c = document.querySelector('#msgNewsletter');
          b.test(a) ? c.innerHTML = "Thanks!" : c.innerHTML="Please write your email!";
          b.test(a) ? c.style.color = "green" : c.style.color = "red";
       };

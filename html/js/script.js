jQuery(document).ready(function ($) {

  /*menu-open*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();

    $.fancybox.open( $('#menu-responsive'), {
      touch:false,
      autoFocus:false,
      beforeClose: function(e){
        $('body').removeClass('is-active');
        $('header').removeClass('is-active');
        $('html').removeClass('is-menu');
      }
    });
    setTimeout(function() {
      $('body').addClass('is-active');
      $('html').addClass('is-menu');
      $('header').addClass('is-active');
    }, 100);

  });

  /*close-menu*/
  $(document).on('click', '.close-menu a', function (e){
    e.preventDefault();
    $('body').removeClass('is-active');
    $.fancybox.close();
    $('header').removeClass('is-active');
    $('html').removeClass('is-menu');
  });

  /*accordion*/
  $(function() {
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
    $(document).on('click', '.accordion > .accordion-item .accordion-thumb', function (e){
      $(this).parent('.accordion-item').siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
      $(this).parent('.accordion-item').toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    })
  });

  /*accordion 2*/
  $(document).on('click', '.title-show-1 h6', function (e){
    e.preventDefault();
    let item = $(this).parent('.title-show');
    item.toggleClass('is-open');

    if(item.hasClass('is-open')){
      item.siblings('.wrap').slideDown()
    }else{
      item.siblings('.wrap').slideUp()
    }
  });

  /*accordion 3*/
  $(document).on('click', '.title-show-2 h6', function (e){
    e.preventDefault();
    let item = $(this).parent('.title-show');
    item.toggleClass('is-open');

    if(item.hasClass('is-open')){
      item.find('.content-wrap').slideDown()
      console.log(1)
    }else{
      item.find('.content-wrap').slideUp()
      console.log(2)
    }
  });


  /*slider*/
  var swiperMatrix = new Swiper(".matrix-slider", {
    loop:true,
    navigation: {
      nextEl: ".matrix-next",
      prevEl: ".matrix-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }
  });

  /*mob sub menu*/
  $(document).on('click', '.sub-menu-mob>a ', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
    if($(this).hasClass('is-open')){
      $(this).siblings('ul').slideDown()
    }else{
      $(this).siblings('ul').slideUp()
    }
  });

  /*open all faq*/
  $(document).on('click', '.open-all>a ', function (e) {
    e.preventDefault();

    $(this).closest('section').find('.accordion-item').addClass('is-active');
    $(this).closest('section').find('.accordion-panel').slideDown();
  });

  /*fix sidebar*/
  if(window.innerWidth > 991){

    $('.article-block .sidebar').fixTo('.article-block .content', {
      top: 50,
      zIndex: 10,
    });
  };

  /*auto content*/
  if( $('.main').length > 0){
    $('.main').createTOC({
      title: "Content menu ",
      insert: ".sidebar"
    });
  };


  $('.sidebar').wrapInner('<div class="wrap flex flex-col-reverse" />');


/*  https://www.w3schools.com/js/tryit.asp?filename=tryai_chartjs_bars_colors_more*/
  var xValues = ["Elektriciteit", "Aardgas", "Propaan", "Hout, ovengedroogd", "Hout, los gestort", "Pellets"];
  var yValues = [0.4, 0.2, 0.41, 0.23, 0.15, 0.16];
  var barColors = ["red", "green","blue","orange","brown"];

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Uw prijs per kWh"
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Є'
            },
          }
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: ''
            },
          }
        ],
      }
    }
  });

});
// buisness time hide
  $(document).ready(function(){
    $(".store-detail .time-switch").click(function(){
      $(".store-detail .bussiness-time.hide").removeClass('hide');
      $('.store-detail .time-switch').addClass('hide');
    });
  });
// tab toggle menu
$( document ).ready( function() {
    var jbOffset = $( ".tab-toggle" ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > jbOffset.top ) {
        $( ".tab-toggle" ).addClass( 'fixed' );
      }
      else {
        $( ".tab-toggle" ).removeClass( 'fixed' );
      }
    });
  } );


//   menu slide
var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },
  });


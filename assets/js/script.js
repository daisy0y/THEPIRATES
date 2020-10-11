// Json URL
const bannerDataUrl = './assets/js/bannerData.json'
// const demo_dataUrl = './assets/js/demo_data.json'
const itemDataUrl = './assets/js/itemData.json'
const storeDataUrl = './assets/js/storeData.json'
const zoneDataUrl = './assets/js/zoneData.json'

// tab toggle menu
$( document ).ready( function() {
    var navoffset = $( "#header-nav" ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > navoffset.top ) {
        $( "#header-nav" ).addClass( 'fixed' );
      }
      else {
        $( "#header-nav" ).removeClass( 'fixed' );
      }
    });
  } );
  $( document ).ready( function() {
    var filteroffset = $( ".search-filter" ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > filteroffset.top ) {
        $( ".search-filter" ).addClass( 'fixed' );
      }
      else {
        $( ".search-filter" ).removeClass( 'fixed' );
      }
    });
  } );
  $( document ).ready( function() {
    var searchoffset = $( ".search" ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > searchoffset.top ) {
        $( ".search" ).addClass( 'fixed' );
      }
      else {
        $( ".search" ).removeClass( 'fixed' );
      }
    });
  } );
  $( document ).ready( function() {
    var rollingoffset = $( "#widget" ).offset();

    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > rollingoffset.top ) {
        $( "#widget" ).addClass( 'fixed' );
    
        $( "#widget" ).addClass( 'rolling' );
      }
      else {
        $( "#widget" ).removeClass( 'fixed' );
     
      }
    });
  } );
  $( document ).ready( function() {
    var searchoffset = $( "#location-body" ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > searchoffset.top ) {
        $( "#location-body" ).addClass( 'fixed' );
      }
      else {
        $( "#location-body" ).removeClass( 'fixed' );
      }
    });
  } );
  $( document ).ready( function() {
    var searchoffset = $( "#product-body" ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > searchoffset.top ) {
        $( "#product-body" ).addClass( 'fixed' );
      }
      else {
        $( "#product-body" ).removeClass( 'fixed' );
      }
    });
  } );
// header-nav toggle
let header = $("#header-nav > ul > li > a");

header.click(function(e){
    e.preventDefault();
    let target = $(this);
    header.removeClass("active");
    target.addClass("active");

});
// banner

$.getJSON(bannerDataUrl, function(bannerData) {
    for(let i = 0 ; i < bannerData.length ; i ++){
        $(".container .content .head .rolling-banner ul").append(`<li class="banner-items"><a href="https://www.tpirates.com/${bannerData[i].permalink}">${bannerData[i].label} <span class="price-color">${bannerData[i].price}</span> (${bannerData[i].comment})</a></li>`);
    }
});


// btn Arrow
const btnArrow = document.querySelector(".btn-arrow");
const ul = document.getElementById("list-hide");

function arrowToggle(){
btnArrow.addEventListener('click',btnClick)

}
arrowToggle();


function btnClick(){
    if(btnArrow.className === 'btn-arrow btn-down'){
        btnArrow.classList.remove('btn-down')
        btnArrow.classList.add('btn-up')
        ul.classList.add('full')
        ul.classList.remove('rolling')
    }else{
        btnArrow.classList.remove('btn-up')
        btnArrow.classList.add('btn-down')
        ul.classList.remove('full')
        ul.classList.add('rolling')
    }
}

// store
$.getJSON(storeDataUrl, function(storeData) {
    if($(document).height() ==  $(window).scrollTop() + $(window).height()){
    for(let i = 0 ; i < 10 ; i ++){
        $("#wrap .container #main-content .main-title").append(`
        <section class="card-wrap">
        <a href="https://www.tpirates.com${storeData[i].uri}">
            <div class="card-top">
                <div class="top-left">
                    <h2>${storeData[i].label}<span>${storeData[i].market}</span></h2>
                    <p>${storeData[i].description}</p>
                </div>
                <div class="top-right">
                    <strong>★ ${storeData[i].summary.rating}</strong>
                    <span>영업 중</span>
                </div>
            </div>
            <div class="card-bottom">
                <span class="thumbnail">
                    <img src="${storeData[i].thumbnail}" alt="thumbnail">
                </span>
            </div>
        </a>
    </section>
        `)}
      }
    
$(window).scroll(function() {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        for(let i = 0 ; i < storeData.length ; i ++){
            if(i < storeData.length){
            $("#wrap .container #main-content .main-title").append(`
            <section class="card-wrap">
            <a href="https://www.tpirates.com${storeData[i].uri}">
                <div class="card-top">
                    <div class="top-left">
                        <h2>${storeData[i].label}<span>${storeData[i].market}</span></h2>
                        <p>${storeData[i].description}</p>
                    </div>
                    <div class="top-right">
                        <strong>★ ${storeData[i].summary.rating}</strong>
                        <span>영업 중</span>
                    </div>
                </div>
                <div class="card-bottom">
                    <span class="thumbnail">
                        <img src="${storeData[i].thumbnail}" alt="thumbnail">
                    </span>
                </div>
            </a>
        </section>
            `);}
          }
        
    }
}); 
});
// zone-data
$.getJSON(zoneDataUrl, function(zoneData) {
  
  for(let i = 0 ; i < zoneData.length ; i++){
    console.log(zoneData[i].locations[i])
    let board = $('#location-body');
    board.append(`<div class="index${i+3}"> <span>${zoneData[i].label}</span> </div>`);
  }
  let board = $('#location-body');
  board.append(`<div class="index26"> <span></span> </div>
               <div class="index27"> <span></span> </div>      
  `);
})

// allLocation click

const allLoca = document.getElementById("all-loca");
const locationBody = document.getElementById("location-body");

function locationToggle(){
  allLoca.addEventListener('click',locClick)

}
locationToggle();

function locClick(){
    if(locationBody.className === 'location-body'){
      locationBody.classList.add('active')
      productBody.classList.remove('active')
    }else{
      locationBody.classList.remove('active')
       
    }
}
// 


// item-data
$.getJSON(itemDataUrl, function(itemData) {
  
  for(let i = 0 ; i < itemData.length ; i++){
  
    let board = $('#product-body');
    board.append(`<div class="index${i+1}"> <span>${itemData[i].label}</span> </div>`);
  }
  let board = $('#product-body');
  board.append(`<div class="index14"> <span></span> </div>
               <div class="index15"> <span></span> </div>      
  `);
})
// product click

const allProd = document.getElementById("all-prod");
const productBody = document.getElementById("product-body");

function productToggle(){
  allProd.addEventListener('click',prodClick)

}
productToggle();

function prodClick(){
    if(productBody.className === 'product-body'){
      productBody.classList.add('active')
      locationBody.classList.remove('active')
    }else{
      productBody.classList.remove('active')
       
    }
}


// Json URL
const bannerDataUrl = './assets/js/bannerData.json'
// const demo_dataUrl = './assets/js/demo_data.json'
// const itemDataUrl = './assets/js/itemData.json'
const storeDataUrl = './assets/js/storeData.json'
// const zoneDataUrl = './assets/js/zoneData.json'


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
const widget = document.getElementById("widget");

function arrowToggle(){
btnArrow.addEventListener('click',btnClick)

}
arrowToggle();


function btnClick(){
    if(btnArrow.className === 'btn-arrow btn-down'){
        btnArrow.classList.remove('btn-down')
        btnArrow.classList.add('btn-up')
        widget.classList.add('full')
        widget.classList.remove('rolling')
    }else{
        btnArrow.classList.remove('btn-up')
        btnArrow.classList.add('btn-down')
        widget.classList.remove('full')
        widget.classList.add('rolling')
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
// store scroll

const test = document.querySelectorAll(".main-title");
console.log(test);
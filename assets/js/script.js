// Json URL
// const bannerDataUrl = './assets/js/bannerData.json'
// const demo_dataUrl = './assets/js/demo_data.json'
// const itemDataUrl = './assets/js/itemData.json'
// const storeDataUrl = '/.assets/js/storeData.json'
// const zoneDataUrl = './assets/js/zoneData.json'


// fetch(bannerDataUrl)
//     .then(response => response.json())
//     .then(function(bannerData){
//         const banner = bannerData;
      
//     })
// console.log(banner)
// `<a href="https://www.tpirates.com/${permalink}">${label} <span class="price-color">${price}</span> ${comment}</a>`



// header-nav toggle
let header = $("#header-nav > ul > li > a");

header.click(function(e){
    e.preventDefault();
    let target = $(this);
    header.removeClass("active");
    target.addClass("active");

});
// banner
// const data = require('./assets/js/bannerData.json');
// console.log(data);
$.getJSON("./assets/js/bannerData.json", function(bannerData) {
    
    // $(".container .content .head .rolling-banner ul").append(`<li><a href="https://www.tpirates.com/${bannerData[0].permalink}">${bannerData[0].label}<span class="price-color">${bannerData[0].price}</span>${bannerData[0].comment}</a></li>`);
 

//     const li = document.createElement("li");
//    const test = document.getElementById("banner-items");
//    test.appendChild(li.innerHTML='hello');
   
    for(let i = 0 ; i < bannerData.length ; i ++){
        $(".container .content .head .rolling-banner ul").append(`<li><a href="https://www.tpirates.com/${bannerData[i].permalink}">${bannerData[i].label} <span class="price-color">${bannerData[i].price}</span> (${bannerData[i].comment})</a></li>`);
  }

    console.log(bannerData); // this will show the info it in firebug console

});


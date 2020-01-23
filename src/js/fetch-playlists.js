import {fetcher} from `fetch.js`;
let params = new URLSearchParams(document.location.search);
const idParams = params.get("id");
fetch("https://api.spotify.com/v1/browse/categories/" + idParams + "/playlists", { 
    // fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M", { 
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization": "Bearer " + sessionStorage.getItem(`access_token`)
    }
})
.then(response => response.json())
.then(function(result) {
    console.log(result);
    result.playlists.items.forEach(item => {
        console.log(item.tracks);
    });
    document.querySelector(".swiper-wrapper").innerHTML=`
        <a href="/playlists.html?id=${result.playlists.items[0].id}" class="swiper-slide"><img src="${result.playlists.items[0].images[0].url}" alt="" class="gallery-img img1"></a>
        <a href="/playlists.html?id=${result.playlists.items[1].id}" class="swiper-slide"><img src="${result.playlists.items[1].images[0].url}" alt="" class="gallery-img img2"></a>
        <a href="/playlists.html?id=${result.playlists.items[2].id}" class="swiper-slide"><img src="${result.playlists.items[2].images[0].url}" alt="" class="gallery-img img3"></a>`;
    
    // document.querySelector(".top-50").innerHTML = `${result.playlists.name}`;
})
.catch(error => {
    console.error(error);
    if(error){
        fetcher();
    }else if(sessionStorage.getItem('access_token') == "null"){
        fetcher();
    }
});
// https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M
// click function??   showArray??
//make a click function on the images so that it calls a function whith the other fetch in it

/*
        <a href="/playlists.html?id=${result.playlists.items[0].id}" class="swiper-slide"><img src="assets/images/placeholder.jpg" data-src="${result.playlists.items[0].images[0].url}" alt="" class="gallery-img img1"></a>
        <a href="/playlists.html?id=${result.playlists.items[1].id}" class="swiper-slide"><img src="assets/images/placeholder.jpg" data-src="${result.playlists.items[1].images[0].url}" alt="" class="gallery-img img2"></a>
        <a href="/playlists.html?id=${result.playlists.items[2].id}" class="swiper-slide"><img src="assets/images/placeholder.jpg" data-src="${result.playlists.items[2].images[0].url}" alt="" class="gallery-img img3"></a>`;
    
        */

import {fetcher} from "./fetch.js";
let params = new URLSearchParams(document.location.search);
const categoryId = params.get("categoryId");
if(categoryId === null){
    //----------------------------playlists
    fetch("https://api.spotify.com/v1/browse/categories/toplists/playlists", {
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + sessionStorage.getItem(`access_token`)
        } 
    })
    .then(response => response.json())
    .then(function(result) {
        document.querySelector(".top-50").innerHTML= result.playlists.items[1].name;//`tester 4 now [1]`;
        result.playlists.items.forEach(item => {
            document.querySelector(".swiper-wrapper").innerHTML +=`
                <a href="playlists.html" class="swiper-slide"><img src="${item.images[0].url}" alt="${item.name}" class="gallery-img img1"></a>
            `;
        });
    })
    .catch(error => {
        console.error(error);
        if(error){
            fetcher();
        }else if(sessionStorage.getItem('access_token') == null){
            fetcher();
        }
    });
    //-----------------------------------------tracks
// man kan ikke hente en category playlists tracks eller den rigtige id for at åbne de rigtige tracks så det er det bedste jeg kan gøre
    fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks", {
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + sessionStorage.getItem(`access_token`)
        } 
    })
    .then(response => response.json())
    .then(function(result) {
        document.querySelector(".button").innerHTML = `<a href="player.html?albumHref=${result.href}"><button id="listen-all">LISTEN ALL</button></a>`;
        result.items.forEach(item => {            
            var calResult = item.track.duration_ms/60000;
            var time = 0 + calResult.toFixed(2);
            
            document.querySelector(".songs").innerHTML +=`
                <div class="song">
                    <a href="player.html?songId=${item.track.id}">
                        <div class="circle">
                            <img src="assets/images/play.png" alt="play">
                        </div>
                        <h4>${item.track.name}</h4>
                        <p>${item.track.artists[0].name}</p>
                        <p class="time">${time}</p>
                    </a>
                </div>
            `;
        });
    })
    .catch(error => {
        console.error(error);
        if(error){
            fetcher();
        }else if(sessionStorage.getItem('access_token') == null){
            fetcher();
        }
    });
}else{
    //----------------------------playlists
    fetch("https://api.spotify.com/v1/browse/categories/" + categoryId + "/playlists", {
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + sessionStorage.getItem(`access_token`)
        } 
    })
    .then(response => response.json())
    .then(function(result) {
        document.querySelector(".top-50").innerHTML= result.playlists.items[1].name;//`tester 4 now [1]`;
        result.playlists.items.forEach(item => {
            console.log(item);
            document.querySelector(".swiper-wrapper").innerHTML +=`
                <a href="playlists.html" class="swiper-slide"><img src="${item.images[0].url}" alt="${item.name}" class="gallery-img img1"></a>
            `;
            
        });
    })
    .catch(error => {
        console.error(error);
        if(error){
            fetcher();
        }else if(sessionStorage.getItem('access_token') == null){
            fetcher();
        }
    });
    //-----------------------------------------tracks
// man kan ikke hente en category playlists tracks eller den rigtige id for at åbne de rigtige tracks så det er det bedste jeg kan gøre
    fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks", {
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + sessionStorage.getItem(`access_token`)
        } 
    })
    .then(response => response.json())
    .then(function(result) {
        document.querySelector(".button").innerHTML = `<a href="player.html?albumHref=${result.href}"><button id="listen-all">LISTEN ALL</button></a>`;

        result.items.forEach(item => {            
            var calResult = item.track.duration_ms/60000;
            var time = 0 + calResult.toFixed(2);
            
            document.querySelector(".songs").innerHTML +=`
                <div class="song">
                    <a href="player.html?songId=${item.track.id}">
                        <div class="circle">
                            <img src="assets/images/play.png" alt="play">
                        </div>
                        <h4>${item.track.name}</h4>
                        <p>${item.track.artists[0].name}</p>
                        <p class="time">${time}</p>
                    </a>
                </div>
            `;
        });
    })
    .catch(error => {
        console.error(error);
        if(error){
            fetcher();
        }else if(sessionStorage.getItem('access_token') == null){
            fetcher();
        }
    });
}
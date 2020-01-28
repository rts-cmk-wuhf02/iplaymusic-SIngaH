import {fetcher} from "./fetch.js";
fetch("https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc", {
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization": "Bearer " + sessionStorage.getItem(`access_token`)
    }
})
.then(response => response.json())
.then(function(result) {
    console.log(result);
    result.albums.forEach(album => {
        console.log(album);
        document.querySelector(".swiper-wrapper").innerHTML += `
            <a href="./album-details.html?id=${album.id}" class="swiper-slide"><img src="${album.images[0].url}" alt="placeholder" class="gallery-img img1"></a>
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

//-----------------------------------new releases
fetch("https://api.spotify.com/v1/browse/new-releases", {
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization": "Bearer " + sessionStorage.getItem(`access_token`)
    }
})
.then(response => response.json())
.then(function(result) {
    console.log(result);
    result.albums.items.forEach(album => {
        document.querySelector(".songs").innerHTML += `
                <div class="song">
                    <a href="album-details.html?id=${album.id}">
                        <img src="${album.images[0].url}" alt="${album.name}" class="song-img">
                        <h4>${album.name}</h4>
                        <p>${album.artists[0].name}</p>
                        <p class="amount-of-songs">${album.total_tracks} songs</p>
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
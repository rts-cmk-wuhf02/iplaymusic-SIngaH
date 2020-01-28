import {fetcher} from "./fetch.js";
let params = new URLSearchParams(document.location.search);
const idParams = params.get("Pid");
const songId = params.get("songId");
if(idParams != null){
    fetch("https://api.spotify.com/v1/tracks/" + idParams, { 
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + sessionStorage.getItem(`access_token`)
        }
    })
    .then(response => response.json())
    .then(function(result) {
        console.log(result.duration_ms);
        document.querySelector("main").innerHTML=`
            <img src="assets/images/player-circles.svg" alt="woman in circle" class="player-circle-img">
            <h6 class="song-playing name">${result.name}</h6>
            <p class="song-playing musician">${result.artists[0].name}</p>
            <div class="song-line"></div>
        `;
    })
    .catch(error => {
        console.error(error);
        if(error){
            fetcher();
        }else if(sessionStorage.getItem('access_token') == "null"){
            fetcher();
        }
    });
}else if(songId != null){
// igen kan man ikke få tracks fra playlists så det bliver den her hvis det kommer fra playists
    fetch("https://api.spotify.com/v1/tracks/6oDswEDqLDJTWu0gq9YHJn", { 
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/x-www-form-urlencoded",
            "Authorization": "Bearer " + sessionStorage.getItem(`access_token`)
        }
    })
    .then(response => response.json())
    .then(function(result) {
        console.log(result.duration_ms);

        document.querySelector("main").innerHTML=`
            <img src="assets/images/player-circles.svg" alt="woman in circle" class="player-circle-img">
            <h6 class="song-playing name">${result.name}</h6>
            <p class="song-playing musician">${result.artists[0].name}</p>
            <div class="song-line"></div>
        `;
    })
    .catch(error => {
        console.error(error);
        if(error){
            fetcher();
        }else if(sessionStorage.getItem('access_token') == "null"){
            fetcher();
        }
    });    
}
import {fetcher} from "./fetch.js";
let params = new URLSearchParams(document.location.search);
const idParams = params.get("id");
fetch("https://api.spotify.com/v1/albums/" + idParams, { 
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization": "Bearer " + sessionStorage.getItem(`access_token`)
    }
})
.then(response => response.json())
.then(function(result) {
    document.querySelector("h5").innerHTML= result.name;
    document.querySelector(".song-amount").innerHTML= result.total_tracks + ` songs`;
//------------------------songs
    result.tracks.items.forEach(track => {
        var calResult = track.duration_ms/60000;
        var time = 0 + calResult.toFixed(2);
        console.log(track);
        document.querySelector(".songs").innerHTML +=`
            <div class="song">
                <a href="player.html?Pid=${track.id}">
                    <div class="circle">
                        <img src="assets/images/play.png" alt="play">
                    </div>
                    <h4>${track.name}</h4>
                    <p>${track.artists[0].name}</p>
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
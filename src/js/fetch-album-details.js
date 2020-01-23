import {fetcher} from `fetch.js`;
fetch("https://api.spotify.com/v1/browse/categories/{category_id}/playlists", { 
    //https://api.spotify.com/v1/albums/
    //https://api.spotify.com/v1/albums//tracks
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization": "Bearer " + sessionStorage.getItem(`access_token`)
    }
})
.then(response => response.json())
.then(function(result) {
    console.log(result);
})
.catch(error => {
    console.error(error);
    if(error){
        fetcher();
    }else if(sessionStorage.getItem('access_token') == "null"){
        fetcher();
    }
});
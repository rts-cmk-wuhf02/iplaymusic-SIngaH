fetch("https://api.spotify.com/v1/browse/categories/{category_id}/playlists", { 
    //https://api.spotify.com/v1/playlists/ idparams
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
.catch(err => console.error(err));
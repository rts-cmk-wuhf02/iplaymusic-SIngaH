import {fetcher} from "./fetch.js";
fetch("https://api.spotify.com/v1/browse/featured-playlists", { 
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization": "Bearer " + sessionStorage.getItem(`access_token`)
    }
})
    .then(response => response.json())
    .then(function(result) {
        result.playlists.items.forEach(item =>{
            document.querySelector(".featured").innerHTML +=`
                <div class="featured_album">
                    <div class="featured_text">
                        <h2>${item.name}</h2>
                        <p>${item.type}</p>
                    </div>
                    <a href="playlists.html?id=${item.id}"><img src="${item.images[0].url}" alt="${item.name}"></a>
                </div>`;
        })
    })
    .catch(error => {
        console.error(error);
        if(error){
            fetcher();
        }else if(sessionStorage.getItem('access_token') == null){
            fetcher();
        }
    });
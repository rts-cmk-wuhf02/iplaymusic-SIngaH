fetch("https://api.spotify.com/v1/browse/featured-playlists", { 
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization": "Bearer BQABT3PQ5zqqUASD9yCBVj_cjRxj4kDI1vfu8jyvneoDmt3gPbfTJNIz0OxRB6Y7axUmx-OcUHVwLIVh2Jw"
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
                        <a href="player.html?id=${item.id}"><img src="${item.images[0].url}" alt="${item.name}"></a>
                    </div>
                `;
        })
    }); 

      
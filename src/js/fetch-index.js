//Letter problems

fetch("https://api.spotify.com/v1/browse/new-releases", {
    method: "GET",
    headers: {
        Authorization: `Bearer BQAI3NIQ2Scz7bfQleKpzSf_4sGh1O6fQvxDS-86YT9k78DW2b0Pe6dshzA4roL8YzisPJy16Z23sX9CqJItu12bLGnvuiOslnUrp5RxREvIQa9yofeUT--DIFlHg0xR4x9Gi5TnBoCu2Zp2qDOnIw`     
    }
    })
    
    .then(response => response.json())
    .then(function(result) {
        console.log(result.albums.items);     
        result.albums.items.forEach(item =>{
            document.querySelector(".featured").innerHTML +=`
                <div class="featured_album">
                    <div class="featured_text">
                        <h2>${item.name}</h2>
                        <p>${item.type}</p>
                    </div>
                    <a href="albums.html?id=${item.id}"><img src="${item.images[0].url}" alt="${item.name}"></a>
                </div>
            `;
        })
    }); 
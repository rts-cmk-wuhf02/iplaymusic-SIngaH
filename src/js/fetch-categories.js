//no undercategories

fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
    method: "GET",
    headers: {
        Authorization: `Bearer BQAI3NIQ2Scz7bfQleKpzSf_4sGh1O6fQvxDS-86YT9k78DW2b0Pe6dshzA4roL8YzisPJy16Z23sX9CqJItu12bLGnvuiOslnUrp5RxREvIQa9yofeUT--DIFlHg0xR4x9Gi5TnBoCu2Zp2qDOnIw`     
    }
    })
    
    .then(response => response.json())
    .then(function(result) {
        result.genres.forEach(item =>{
            console.log(result);     

            document.querySelector(".categories").innerHTML += `
                <div class="category">
                    <h4 class="show-ul">${item} <i class="fas fa-ellipsis-h"></i></h4>
                    <ul class="category-ul">
                        <a href="albums.html?name=${item}><li>first<i class="fas fa-chevron-right"></i></li></a>
                        <a href="albums.html?name=${item}"><li>second<i class="fas fa-chevron-right"></i></li></a>
                        <a href="albums.html?name=${item}"><li>third<i class="fas fa-chevron-right"></i></li></a>
                    </ul>
                </div>`;
        })
    }); 

    /*
    */
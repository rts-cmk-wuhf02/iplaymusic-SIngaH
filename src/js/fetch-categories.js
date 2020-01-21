fetch("https://api.spotify.com/v1/browse/categories", { 
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization": "Bearer BQABT3PQ5zqqUASD9yCBVj_cjRxj4kDI1vfu8jyvneoDmt3gPbfTJNIz0OxRB6Y7axUmx-OcUHVwLIVh2Jw"
    }
    })
    
    .then(response => response.json())
    .then(function(result) {  
        result.categories.items.forEach(item =>{
            document.querySelector(".categories").innerHTML += `
                <div class="category">
                    <h4 class="show-ul">${item.name} <i class="fas fa-ellipsis-h"></i></h4>
                    <ul class="category-ul">
                        <a href="albums.html?name=${item.name}><li>first<i class="fas fa-chevron-right"></i></li></a>
                        <a href="albums.html?name=${item.name}"><li>second<i class="fas fa-chevron-right"></i></li></a>
                        <a href="albums.html?name=${item.name}"><li>third<i class="fas fa-chevron-right"></i></li></a>
                    </ul>
                </div>`;
        })
    }); 
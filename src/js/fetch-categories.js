fetch("https://api.spotify.com/v1/browse/categories", { 
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization": "Bearer " + sessionStorage.getItem(`access_token`)
    }
})
.then(response => response.json())
.then(function(result) {  
    console.log(result);
    result.categories.items.forEach(item =>{
        console.log(item);
        document.querySelector(".categories").innerHTML += `
            <div class="category">
            <h4 class="show-ul">${item.name} <i class="fas fa-ellipsis-h"></i></h4>
            <ul class="category-ul">
            <a href="playlists.html?id=${item.id}"><li class="li">first<i class="fas fa-chevron-right"></i></li></a>
            <a href="playlists.html?id=${item.id}"><li class="li">second<i class="fas fa-chevron-right"></i></li></a>
            <a href="playlists.html?id=${item.id}"><li class="li">third<i class="fas fa-chevron-right"></i></li></a>
            </ul>
            </div>`;
    })
})
.catch(err => console.error(err));
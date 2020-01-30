import {fetcher} from "./fetch.js";
fetch("https://api.spotify.com/v1/browse/categories", { 
    headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization": "Bearer " + sessionStorage.getItem(`access_token`)
    }
})
    .then(response => response.json())
    .then(function(result) {
        result.categories.items.forEach(item =>{
            const list = document.getElementsByClassName("categories")[0];
            var songTemplate = document.querySelector(".category");
            const clone = songTemplate.content.cloneNode(true);
            clone.querySelector(".show-ul").innerHTML =item.name + ` <i class="fas fa-ellipsis-h"></i>`;
            clone.querySelector(".li1 a").href =`playlists.html?categoryId=${item.id}`;
            clone.querySelector(".li2 a").href =`playlists.html?categoryId=${item.id}`;
            clone.querySelector(".li3 a").href =`playlists.html?categoryId=${item.id}`;
            list.appendChild(clone);
        });
        
        let clickHere = document.getElementsByClassName("show-ul");
        let clickArray = Array.from(clickHere);
        let ul = document.getElementsByClassName("category-ul");
        let ulArray = Array.from(ul);
        for(let index=0; index<clickArray.length; index++){
            clickArray[index].addEventListener("click", vis);
        }
        
        function vis(){
            for(let index = 0; index < clickArray.length; index++){
                if(ulArray[index].classList.contains("hide")){
                    ulArray[index].classList.remove("hide");
                }else{
                    ulArray[index].classList.add("hide");
                }
            }
        }
    })
    .catch(error => {
        console.error(error);
        if(error){
            fetcher();
        }else if(sessionStorage.getItem('access_token') == null){
            fetcher();
        }
    }); 
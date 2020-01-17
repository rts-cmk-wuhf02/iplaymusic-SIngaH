document.addEventListener("DOMContentLoaded", ()=>{
    let root = document.querySelector(":root");
    let colorChange = document.querySelector(".adjust");
    let bgColor = "black";

    colorChange.addEventListener("click", ()=>{
         if(bgColor == "black"){
            bgColor = "white";
            root.style.setProperty("--background-color", "#fff");
            root.style.setProperty("--not-background", "#341931");
            root.style.setProperty("--footer", "#fff");
            root.style.setProperty("--footer-shadow", "#707070");

// jeg kunne ikke finde iconer for to af dem i footeren så jeg lavede billederne i forskellige farver og ændrer dem her
            let url = window.location.href;
            if( url.match("index") ) {
                 document.getElementById("index-circle").style.background="#000";   
                 document.getElementById("index-circles").src="assets/images/circles.svg";    
            }else if( url.match("album")){
                document.getElementById("icon-change").src="assets/images/iconBlack.svg";  
                document.querySelector("#circleWhite").src="assets/images/circlesWhite.svg";
            }else if(url.match("index") === null){
                document.querySelector("#circleWhite").src="assets/images/circlesWhite.svg";
            }
         }else if(bgColor == "white"){           
            bgColor = "black";
            root.style.setProperty("--background-color", "#341931");
            root.style.setProperty("--not-background", "#fff");
            root.style.setProperty("--footer", "#341931");
            root.style.setProperty("--footer-shadow", "#111625");

// jeg kunne ikke finde iconer for to af dem i footeren så jeg lavede billederne i forskellige farver og ændrer dem her
            let url = window.location.href;
            if( url.match("index") ) {
                document.getElementById("index-circle").style.background="var(--pink-gradient-circle)";
                document.querySelector("#index-circles").src="assets/images/circlesBlack.svg"; 
            }else if( url.match("album")){
                document.getElementById("icon-change").src="assets/images/iconWhite.svg";  
                document.querySelector("#circleWhite").src="assets/images/circlesBlack.svg";
            }else if(url.match("index") === null){
                document.querySelector("#circleWhite").src="assets/images/circlesBlack.svg";
            }
        }
    });
});
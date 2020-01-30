const imgs = document.querySelectorAll("img");

const options = {
    rootMargin: "0px 0px 0px 0px",
    threshold: "0"
};

const imageCallback = function(entries, self){
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
        }
    })
}

const ImageObserver = new IntersectionObserver(imageCallback, options);

imgs.forEach(img => {
    ImageObserver.observe(img);
});
//nåede ikke at færdigøre lazy-loading, jeg nåede kun lige at starte på det, 
//jeg nåede ikke ændret html filerne med data-src, placeholders og linken til denne fil
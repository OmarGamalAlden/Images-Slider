let allImages = Array.from( document.querySelectorAll("img") );

let rightArrow = document.querySelector(".fa-right-long");
let leftArrow = document.querySelector(".fa-left-long");
let closeIcon = document.querySelector(".fa-xmark");
let myDiv = document.querySelector(".innerDiv");
let layer = document.querySelector(".layer");

let currentIndex;


for (let i = 0; i < allImages.length; i++) {
    
    allImages[i].addEventListener("click" , function( e ){

        layer.classList.remove("d-none");

        let myImageSrc = e.target.getAttribute("src");

        console.log(myImageSrc);

        myDiv.style.backgroundImage = `url(${myImageSrc})`;

        currentIndex = allImages.indexOf( e.target );
    })
}

function getNext() {
    currentIndex++;

    if (currentIndex == allImages.length) {
        currentIndex = 0;
    }

    let nextImageSrc = allImages[ currentIndex ].getAttribute("src");
    myDiv.style.backgroundImage = `url(${ nextImageSrc })`
}
function getPrevious() {
    currentIndex--;

    if (currentIndex == -1) {
        currentIndex = allImages.length - 1 ;
    }
    
    let nextImageSrc = allImages[ currentIndex ].getAttribute("src");
    myDiv.style.backgroundImage = `url(${ nextImageSrc })`
}
function getHide() {
    layer.classList.add("d-none");
}

rightArrow.addEventListener("click" , getNext )
leftArrow.addEventListener("click" , getPrevious )
closeIcon.addEventListener("click" , getHide )


document.addEventListener("keydown" , function(e) {

    if (e.code == "ArrowRight" ) {
        getNext();
    }
    else if (e.code == "ArrowLeft") {
       getPrevious ();
    }
    else if (e.code == "Escape") {
        getHide();
    }
})

layer.addEventListener("click" , function ( e ) {

    if (e.target == layer) {
        getHide();
    }
    
})
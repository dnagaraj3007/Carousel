let counter = 1;

document.addEventListener("DOMContentLoaded",function(){
    addProducts(products);
    addButtonListeners();
});

function addProducts(products) {
    products.forEach((product) => {
        createCellAndAddImg(product);
        createCellIndicator();
    })
}

function createCellAndAddImg(product){
    let carouselList = document.getElementById("container");
    let image = document.createElement("img");
    image.src = product.src;
    image.className= "carousel_image";

    carouselList.appendChild(image);
}

function createCellIndicator(){
    let carouselNav = document.getElementById("carousel_nav");
    let button = document.createElement("button");
    button.className="carousel_indicator";
    carouselNav.appendChild(button);
}

function addButtonListeners(){
    const carouselContainer  = document.querySelector(".carousel_container")
    const image = document.querySelector(".carousel_container img")
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");
    const size = image.clientWidth;
    nextBtn.addEventListener('click', ()=>{
        carouselContainer.style.transition = "transform 0.4s ease-in-out"
        counter++;
        carouselContainer.style.transform = 'translateX('+(-size*counter)+'px)'
        console.log(carouselContainer.style.transform);
    })
    prevBtn.addEventListener('click', ()=>{
        carouselContainer.style.transition = "transform 0.4s ease-in-out"
        counter--;
        carouselContainer.style.transform = 'translateX('+(-size*counter)+'px)'
        console.log(carouselContainer.style.transform);
    })
    carouselContainer.addEventListener('transitioned', ()=>{
        console.log("Triggered");
    })


}







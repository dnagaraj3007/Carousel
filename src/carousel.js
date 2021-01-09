let counter = 0;
const size =

document.addEventListener("DOMContentLoaded",function(){
    addProducts(products);
    addButtonListeners();
});

function addProducts(products) {
    products.forEach((product) => {
        createCellAndAddImg(product);
        //createCellIndicator();
    })
}

function createCellAndAddImg(product){
    let carouselList = document.getElementById("container");
    let card = document.createElement("div");
    card.className="carousel_card";

    let image = document.createElement("img");
    image.src = product.src;
    image.className= "carousel_image";

    let details = document.createElement("div");
    details.className="carousel_card_container"

    let itemName = document.createElement("h4");
    itemName.className="carousel_card_item_name";
    itemName.textContent=product.name;

    let breakLine = document.createElement("br");

    let itemPrice = document.createElement("h5");
    itemPrice.className = "carousel_card_item_price";
    itemPrice.textContent = "Price: "+product.price

    let itemCategory = document.createElement("h5");
    itemCategory.className = "carousel_card_item_category";
    itemCategory.textContent = "Category: "+product.category;

    details.appendChild(itemName);
    details.appendChild(breakLine);
    details.appendChild(itemPrice);
    details.appendChild(breakLine);
    details.appendChild(itemCategory);

    card.appendChild(image);
    card.appendChild(details);
    carouselList.appendChild(card);
}

/*function createCellIndicator(){
    let carouselNav = document.getElementById("carousel_nav");
    let button = document.createElement("button");
    button.className="carousel_indicator";
    carouselNav.appendChild(button);
}*/

function addButtonListeners(){
    const carouselContainer  = document.querySelector(".carousel_container")
    const image = document.querySelector(".carousel_card")
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");
    let size;
    nextBtn.addEventListener('click', ()=>{
       size = image.clientWidth;
        carouselContainer.style.transition = "transform 0.4s ease-in-out"
        counter++;
        carouselContainer.style.transform = 'translateX('+(-size*counter)+'px)'
        console.log(carouselContainer.style.transform);
    })
    prevBtn.addEventListener('click', ()=>{
        size = image.clientWidth;
        if(counter ===0){
            counter= products.length-2;
        }

            carouselContainer.style.transition = "transform 0.4s ease-in-out"
            counter--;
            carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
            console.log(carouselContainer.style.transform);
    })
    carouselContainer.addEventListener('transitionend', ()=>{
        if(products.length>3) {
            if (counter === products.length - 2) {
                counter = 0;
                carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
            }
        }
    })
}







let counter = 0;
let maxProducts = products.length;


document.addEventListener("DOMContentLoaded",function(){
    addProducts(products,"");
    addButtonListeners();
    addItemCategories(products);
    addCategoryListener();
});

function addItemCategories(products){
    const categoryField = document.querySelector("#categories");
    const categories =  [...new Set(products.map(product => product.category))];
    const option = document.createElement('option');
    option.text = "";
    option.value= "";
    categoryField.appendChild(option);
    categories.forEach((category)=>{
        const option = document.createElement('option');
        option.text = category;
        option.value= category;
        categoryField.appendChild(option);
    })
}

function addCategoryListener(){
    const categoryField = document.querySelector("#categories");
    categoryField.addEventListener('change', function(){
        changeDisplayType(products, categoryField.value);
    })
}

function changeDisplayType(products, filter){
    maxProducts=0;
    counter = 0;
    const cards = document.querySelector(".carousel_container").children;
    for(let i=0;i<products.length; i++){
        if(products[i].category===filter){
            cards[i].style.display= "inline"
            maxProducts++;
        }else{
            cards[i].style.display= "none";
        }
    }

}

function addProducts(products, filter) {
    products.forEach((product) => {
            createCellAndAddImg(product);
        //createCellIndicator();
    })
}

function createCellAndAddImg(product, displayType){
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
            counter= maxProducts-2;
        }

            carouselContainer.style.transition = "transform 0.4s ease-in-out"
            counter--;
            carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
            console.log(carouselContainer.style.transform);
    })
    carouselContainer.addEventListener('transitionend', ()=>{
            if (counter === maxProducts - 2) {
                counter = 0;
                carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
            }

    })
}







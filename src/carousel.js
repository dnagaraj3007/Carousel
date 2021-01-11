let counter = 0;
let maxProducts = products.length;
let activeindex=1;
const mapProducts={}
products.map((product, index)=>{
 mapProducts[index] =true
})
console.log(mapProducts);

document.addEventListener("DOMContentLoaded",function(){
    addProducts(products,"");
    addButtonListeners();
    addItemCategories(products);
    addCategoryListener();
});

const addItemCategories=(products)=>{
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

const addCategoryListener= ()=> {
    const categoryField = document.querySelector("#categories");
    categoryField.addEventListener('change', function(){
        const carouselContainer  = document.querySelector(".carousel_container");
        carouselContainer.style.transform = 'translateX(0px)';
        changeDisplayType(products, categoryField.value);
    })
}

const changeDisplayType=(products, filter)=>{
    maxProducts=0;
    counter = 0;
    const cards = document.querySelector(".carousel_container").children;
    for(let i=0;i<products.length; i++){
        if(filter===""){
            mapProducts[i] =true;
            cards[i].style.display= "inline"
            maxProducts++;
        }else{
            if(products[i].category===filter){
                mapProducts[i] =true;
                cards[i].style.display= "inline"
                maxProducts++;
            }else{
                mapProducts[i]=false;
                cards[i].style.display= "none";
            }
        }

    }
    let activeIndex = setActiveIndex(0, mapProducts);
    for(let i=0; i<products.length;i++){
        if(i===activeIndex){
            cards[i].classList.add('active_carousel');
        }else{
            cards[i].classList.remove('active_carousel');
        }
    }

}

const setActiveIndex= (fromIndex, mapProducts)=>{
    let count =0;
    for(let i=fromIndex; i< products.length;i++){
        if(mapProducts[i]){
            count++;
        }
        if(count==2){
            return i;
        }
    }
}

const addProducts=(products) =>{
    products.forEach((product, index) => {
            createCellAndAddImg(product, index);
        //createCellIndicator();
    })
}

const createCellAndAddImg=(product, index)=>{
    let carouselList = document.getElementById("container");
    let card = document.createElement("div");
    card.className="carousel_card";
    if(activeindex == index){
        card.classList.add("active_carousel");
    }

    let image = document.createElement("img");
    image.src = product.src;
    image.className= "carousel_image";

    let details = document.createElement("div");
    details.className="carousel_card_container"

    let itemName = document.createElement("h4");
    itemName.className="carousel_card_item_name";
    itemName.textContent=product.name;

    let itemPrice = document.createElement("h5");
    itemPrice.className = "carousel_card_item_price";
    itemPrice.textContent = "Price: "+product.price

    let itemCategory = document.createElement("h5");
    itemCategory.className = "carousel_card_item_category";
    itemCategory.textContent = "Category: "+product.category;

    details.appendChild(itemName);
    details.appendChild(itemPrice);
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

const addButtonListeners=()=>{
    const carouselContainer  = document.querySelector(".carousel_container")
    let allCards = carouselContainer.children;
    const card = document.querySelector(".carousel_card")
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");
    let size;
    nextBtn.addEventListener('click', ()=>{
        if(maxProducts>3) {
            size = card.clientWidth;
            carouselContainer.style.transition = "transform 0.4s ease-in-out"
            counter++;
            allCards[counter].classList.remove('active_carousel')
            allCards[counter + 1].classList.add('active_carousel')
            carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
            console.log(carouselContainer.style.transform);
        }
    })
    prevBtn.addEventListener('click', ()=>{
        if(maxProducts>3) {
            size = card.clientWidth;
            if (counter === 0) {
                counter = maxProducts - 2;
                allCards[1].classList.remove('active_carousel')
            }

            carouselContainer.style.transition = "transform 0.4s ease-in-out";
            allCards[counter].classList.add('active_carousel')
            allCards[counter + 1].classList.remove('active_carousel')
            counter--;

            carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
            console.log(carouselContainer.style.transform);
        }
    })
    carouselContainer.addEventListener('transitionend', ()=>{
            if (counter === maxProducts - 2) {
                counter = 0;
                allCards[1].classList.add('active_carousel')
                allCards[products.length-1].classList.remove('active_carousel')
                carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
            }

    })
}







const items = document.querySelector("#items")
const options = document.querySelector(".h-o-items")
const btnRing = document.querySelector(".ring")
const slides = document.querySelectorAll(".b-info-image")

let i = 0
let qtdItems = document.querySelector("#qtd-items").innerHTML
let product = document.querySelector(".item-info")
let listProducts = document.querySelector("#products")
let valueProduct = parseInt(document.querySelector("#valueObj").innerHTML)
let total = document.querySelector("#valueTotal")

function showItems() {
   if(options.style.display == "none") {
       options.style.display = "flex"
       items.style.backgroundColor = "#FAB49B"
       items.style.color = "#000000"
   } else {
       options.style.display = "none"
       items.style.backgroundColor = "#FFFFFF"
       items.style.color = "#616060"
   }
}

function buy() {
    qtdItems = parseInt(qtdItems)
    if(btnRing.onclick) {
        qtdItems += 1
        document.querySelector("#qtd-items").innerHTML = qtdItems
        document.querySelector(".qtd-items").innerHTML = qtdItems

        total.innerHTML = valueProduct * qtdItems
        
        let newProduct = product.cloneNode(true);
        listProducts.appendChild(newProduct);
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let i;
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
}

function nextImage(n) {
    showSlides(slideIndex += n);
}

function prevImage(n) {
    showSlides(slideIndex = n);
}
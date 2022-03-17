const images = [
    "images/products/image-product-1-thumbnail.jpg",
    "images//products/image-product-2-thumbnail.jpg",
    "images/products/image-product-3-thumbnail.jpg",
    "images/products/image-product-4-thumbnail.jpg"
]

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const presently_displayed_img = document.getElementById("displaye-image")
const all_products = document.querySelectorAll(".clikable-image");
let present_value = 0;

document.addEventListener("DOMContentLoaded", () => {
    presently_displayed_img.src = images[present_value];
    all_products[0].classList.add('blur-image')

})

function goPrev() {
    console.log("click")
    if (present_value != 0) {
        present_value = present_value - 1
    }
    else{
        present_value = 3;
    }
    presently_displayed_img.src = images[present_value];
}

prev.addEventListener("click", () => {
    goPrev()
})
next.addEventListener("click", () => {
    goNext()
})


function goNext () {
    if (present_value != 3) {
        present_value = present_value + 1  
        console.log("done")
    }
    else{
        present_value = 0;
    }
    presently_displayed_img.src = images[present_value];
}

function change_displayed_image(product){
    product.classList.toggle('blur-image')
        console.log("clicked")
        presently_displayed_img.src = product.childNodes[0].src
}


all_products.forEach((product) => {
    product.addEventListener('click', ()=> {
        change_displayed_image(product)
    })
})



// all_products[0].addEventListener('click', () => {
//     all_products.classList.add('blur-image')
// })
//




// for ul nav element

const nav_items = document.querySelector('.nav-items');
const btn = document.getElementById('menu');
const close = document.getElementById('close-menu');
const overlay = document.querySelector('.overlay');
// btn.addEventListener('click', () => {
//     nav_items.style.display = "block"
//     overlay.style.display = "block"
// })
// close.addEventListener('click', () => {
//     nav_items.style.display = "none"
//     overlay.style.display = "none"
// })

btn.addEventListener('click', () => {
    nav_items.classList.add('show-navitems');
    overlay.style.display = "block"
})
close.addEventListener('click', () => {
    nav_items.classList.remove('show-navitems')
    overlay.style.display = "none"
})

// cart 

const cart = document.getElementById('cart');
const items = document.querySelector('.cart-items');

cart.addEventListener('mouseover', () => {
    items.classList.add('show-cart-items')
})

cart.addEventListener('mouseout', () => {
    items.classList.remove('show-cart-items')
})

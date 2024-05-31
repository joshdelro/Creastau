window.onload = function() {
    // carousel
    var slidePosition = 1;
    SlideShow(slidePosition);
    // plus or minus index
    window.plusSlides = function (n) {
        let x = slidePosition += n
        // console.log(x)
        SlideShow(x);
    }
    function SlideShow(n) {
    let slides = document.getElementsByClassName("slides");
    // to repeat carousel
    if (n > slides.length) {
        slidePosition = 1;
        console.log("this is slide pos: " + slidePosition)
    }
    if (n < 1) {
        slidePosition = slides.length;
    }
    // hide all
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // display index
    slides[slidePosition-1].style.display = "block";
    } 

    // cart modal
    var modal = document.getElementById('cart');
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    }
    let back2 = document.getElementById('back2');
    let forward2 = document.getElementById('forward2');
    // back2.onclick = function(z) {
    //     z = z - 1;
    //     console.log(z)
    //     return z;
    // }
    // forward2.onclick = function(z) {
    //     z = z + 1;
    //     console.log(z)
    //     return z;
    // }
    // let checkout = document.getElementById('checkout-btn');
}
// let checkout = document.getElementById('checkout-btn');
//     let fname = document.getElementById('fname');
//     checkout.onclick = function() {
//     alert("Message sent")
// }
// cart checkout
let x = 0;
let multi = 0;
let z = 1;

function addToCart(item) {
    let prodHolder = document.getElementById('prodName').innerHTML;
    let prodPrice = document.getElementById('prodPrice').innerHTML;
    
    let priceInt = parseFloat(prodPrice * z);
    let total = x += priceInt;
    console.log(total)
    // total
    document.getElementById('cartTotal').innerHTML = total;

    $("#cartCol").prepend('<div class="cartItem"><p>Product Name: ' + prodHolder + '</p> <p>Product Price: ' + prodPrice + ' </p></div>')
    // $("#cartCol").prepend('<div class="cartItem"><p>Product Name: ' + prodHolder + '</p> <p>Product Price: ' + prodPrice + ' </p> <button id="back2">&#10094;</button> <div id="forward2">&#10095;</div></div>')

}



// let checkout = document.getElementById('checkout-btn');
//     let fname = document.getElementById('fname');
//     checkout.onclick = function() {
//     alert("Message sent")
// }
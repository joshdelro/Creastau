window.onload = function() {
    // contact
    document.getElementById('contactBtn').onclick = function() {
        let x = document.forms["contactForm"]["fname"].value;
        if( x == "" ) {
            alert("Fill out text boxes");
        } else {
            alert("Message sent");
            }
        }
    // cart
    document.getElementById('checkoutBtn').onclick = function() {
        alert("Payment successful");
    }

    // cart
    document.getElementById('dineBtn').onclick = function() {
        alert("Book successful");
    }
    
    // header
    document.getElementById('menulink').onclick = function() {
        let menu = document.getElementById('menu');
        if(menu.className != 'showmenu') {
            menu.className = 'showmenu';
        }
        else {
            menu.className = 'hiddenmenu';
        }
    }

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
}

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
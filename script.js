// JavaScript to handle navigation and shopping cart

function showSection(sectionId) {
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
}

// Show the home section by default
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');

    // Add event listeners to navigation links
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            var sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });
});

var cart = [];

function addToCart(itemName, itemPrice) {
    var item = {
        name: itemName,
        price: itemPrice
    };
    cart.push(item);
    updateCart();
}

function updateCart() {
    var cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    for (var i = 0; i < cart.length; i++) {
        var li = document.createElement('li');
        li.textContent = cart[i].name + ' - $' + cart[i].price.toFixed(2);
        cartList.appendChild(li);
    }
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
}

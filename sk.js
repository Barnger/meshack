let cart = [];

function addToCart(productId) {
    const productElement = document.querySelector(`.product[data-id='${productId}']`);
    const product = {
        id: productId,
        name: productElement.querySelector('h2').textContent,
        price: parseFloat(productElement.querySelector('p').textContent.replace('$', '')),
        image: productElement.querySelector('img').src
    };
    cart.push(product);
    updateCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart() {
    const cartElement = document.querySelector('.cart');
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    cartElement.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('cart-item');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartElement.appendChild(productElement);
        totalPrice += product.price;
    });

    document.querySelector('.total p').textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    alert('Proceeding to checkout!');
}

document.addEventListener('DOMContentLoaded', () => {
    displayCart();
});

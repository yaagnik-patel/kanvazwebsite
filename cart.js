let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Update Local Storage
function updateCartStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Ensure cart elements exist before updating the cart
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById('cart-items-list') && document.getElementById('total-price') && document.querySelector('.cart-footer')) {
        updateCartDisplay();
    }
    if (document.getElementById('cart-count')) {
        updateCartCount();
    }
});

// Open the cart page
function viewCart() {
    window.location.href = "cart.html"; // Redirect to the cart page
}

// Close the cart modal
function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.style.display = 'none'; // Hide the cart modal
    }
    window.location.href = 'index.html'; // Redirect to homepage
}

// Add item to cart
function addItemToCart(productName, price, imageUrl, size) {
    console.log("Adding item:", productName, price, imageUrl, size); // Debugging

    price = parseFloat(price);

    const existingItem = cartItems.find(item => item.name === productName && item.size === size);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ name: productName, price, quantity: 1, imageUrl, size });
    }

    updateCartStorage();
    updateCartDisplay();
    updateCartCount();
}
function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items-list');
    const totalPriceElem = document.getElementById('total-price');
    const cartFooter = document.querySelector('.cart-footer');

    if (!cartItemsList || !totalPriceElem || !cartFooter) {
        console.warn("Cart elements not found in the DOM. Skipping update.");
        return;
    }

    cartItemsList.innerHTML = '';

    let totalPrice = 0;

    if (cartItems.length === 0) {
        cartItemsList.innerHTML = `
            <p class="empty-cart-message">Your cart is empty.</p>
            <button class="continue-shopping-btn" onclick="continueShopping()">Continue Shopping</button>
        `;
        totalPriceElem.textContent = '0.00';
        cartFooter.style.display = 'none';
        return;
    }

    cartFooter.style.display = 'block';

    cartItems.forEach((item, index) => {
        const itemElem = document.createElement('div');
        itemElem.className = 'cart-item';
        itemElem.innerHTML = `
            <div class="cart-item">
                <span class="remove-item" onclick="removeFromCart(${index})">X</span>
                <img src="${item.imageUrl}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <p class="product-name">${item.name} - <strong>Size: ${item.size}</strong></p>
                    <p class="product-price">₹${item.price.toFixed(2)}</p>
                    <div class="quantity-controls">
                        <button class="qty-btn decrease" onclick="changeQuantity(${index}, -1)">-</button>
                        <span class="item-quantity" id="item-quantity-${index}">${item.quantity}</span>
                        <button class="qty-btn increase" onclick="changeQuantity(${index}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
        cartItemsList.appendChild(itemElem);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElem.textContent = totalPrice.toFixed(2);
}

// Continue Shopping - Closes Cart and Navigates Back
function continueShopping() {
    closeCart();
    window.location.href = 'index.html';
}

// Change item quantity (+ or -)
function changeQuantity(index, change) {
    if (cartItems[index].quantity + change > 0) {
        cartItems[index].quantity += change;
    } else {
        removeFromCart(index);
    }
    updateCartStorage();
    updateCartDisplay();
    updateCartCount();
}

// Remove an item from the cart
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartStorage();
    updateCartDisplay();
    updateCartCount();
}

// Update cart count in the UI
function updateCartCount() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartCountElem = document.getElementById('cart-count');
    if (cartCountElem) {
        cartCountElem.textContent = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    }
}

// Proceed to checkout (WhatsApp Order)
function proceedToCheckout() {
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    let message = "Hello, I would like to place an order:\n\n";
    cartItems.forEach(item => {
        message += `- ${item.name} (Size: ${item.size}): ₹${item.price.toFixed(2)} x ${item.quantity}\n`;
    });

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    message += `\nTotal Price: ₹${totalPrice.toFixed(2)}`;

    const whatsappURL = `https://wa.me/+917046145944?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

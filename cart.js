let cartItems = [];

// Function to view the cart sidebar
function viewCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.add('open');
    updateCartDisplay();
}

// Function to close the cart sidebar
function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.remove('open');
}

// Function to add an item to the cart with the selected size
function addToCart(productName, price, imageUrl, size) {
    const itemIndex = cartItems.findIndex(item => item.name === productName && item.imageUrl === imageUrl && item.size === size);

    if (itemIndex > -1) {
        // If the item is already in the cart, increment the quantity
        cartItems[itemIndex].quantity += 1;
    } else {
        // If it's not in the cart, add a new item with size
        cartItems.push({ name: productName, price: price, quantity: 1, imageUrl: imageUrl, size: size });
    }

    updateCartDisplay();
    updateCartCount();
}

// Function to update the cart display with items and total price
function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items-list');
    const totalPriceElem = document.getElementById('total-price');
    cartItemsList.innerHTML = '';

    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        const itemElem = document.createElement('div');
        itemElem.className = 'cart-item';
        itemElem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <p class="product-name">${item.name} - Size: ${item.size}</p>
                <p class="product-price">$${item.price.toFixed(2)} x ${item.quantity}</p>
                <button class="remove-item-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartItemsList.appendChild(itemElem);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElem.textContent = totalPrice.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(itemIndex) {
    cartItems.splice(itemIndex, 1);
    updateCartDisplay();
    updateCartCount();
}

// Function to update the cart count
function updateCartCount() {
    const cartCountElem = document.getElementById('cart-count');
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElem.textContent = itemCount;
}

// Proceed to Checkout
function proceedToCheckout() {
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    let message = "Hello, I would like to place an order with the following items:\n\n";

    cartItems.forEach(item => {
        message += `- ${item.name} (Size: ${item.size}): $${item.price.toFixed(2)} x ${item.quantity}\n`;
    });

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    message += `\nTotal Price: $${totalPrice.toFixed(2)}`;

    const whatsappURL = `https://wa.me/+917046145944?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
}

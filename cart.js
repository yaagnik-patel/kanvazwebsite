let cartItems = [];

// Open the cart sidebar
function viewCart() {
    document.getElementById('cart-modal').classList.add('open');
    updateCartDisplay();
}

// Close the cart sidebar
function closeCart() {
    document.getElementById('cart-modal').classList.remove('open');
}

// Add product to cart
function addToCart(productName, price, imageUrl, size) {
    const existingItem = cartItems.find(item => item.name === productName && item.size === size);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ name: productName, price: price, quantity: 1, imageUrl: imageUrl, size: size });
    }

    updateCartDisplay();
    updateCartCount();
}

// Update the cart display
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
                <p class="product-price">$${item.price.toFixed(2)}</p>
                <div class="quantity-controls">
                    <button class="qty-btn decrease" onclick="changeQuantity(${index}, -1)">-</button>
                    <span class="item-quantity" id="item-quantity-${index}">${item.quantity}</span>
                    <button class="qty-btn increase" onclick="changeQuantity(${index}, 1)">+</button>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartItemsList.appendChild(itemElem);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElem.textContent = totalPrice.toFixed(2);
}

// Change item quantity (+ or -)
function changeQuantity(index, change) {
    if (cartItems[index].quantity + change > 0) {
        cartItems[index].quantity += change;
    } else {
        removeFromCart(index);
    }
    document.getElementById(`item-quantity-${index}`).textContent = cartItems[index]?.quantity || 0;
    updateCartDisplay();
    updateCartCount();
}

// Remove an item from the cart
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartDisplay();
    updateCartCount();
}

// Update cart count in the UI
function updateCartCount() {
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
        message += `- ${item.name} (Size: ${item.size}): $${item.price.toFixed(2)} x ${item.quantity}\n`;
    });

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    message += `\nTotal Price: $${totalPrice.toFixed(2)}`;

    const whatsappURL = `https://wa.me/+917046145944?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
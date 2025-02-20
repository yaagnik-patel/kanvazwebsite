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

// Add item to cart
function addItemToCart(productName, price, imageUrl, size) {
    price = parseFloat(price); // Ensure price is always a number

    // Check if the item with the same name and size already exists
    const existingItem = cartItems.find(item => item.name === productName && item.size === size);

    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if same product & size exist
    } else {
        // Add new product with size variation
        cartItems.push({ name: productName, price, quantity: 1, imageUrl, size });
    }

    updateCartDisplay();
    updateCartCount();
}

// Update cart display
function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items-list');
    const totalPriceElem = document.getElementById('total-price');
    const cartFooter = document.querySelector('.cart-footer');
    cartItemsList.innerHTML = '';

    let totalPrice = 0;

    if (cartItems.length === 0) {
        // If cart is empty, show a message and hide the checkout section
        cartItemsList.innerHTML = `
            <p class="empty-cart-message">Your cart is empty.</p>
            <button class="continue-shopping-btn" onclick="continueShopping()">Continue Shopping</button>
        `;
        totalPriceElem.textContent = '0.00';
        cartFooter.style.display = 'none'; // Hide total and checkout
        return;
    }

    // Show checkout section when cart has items
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
    window.location.href = 'index.html'; // Change this if product page has a different path
}

// Change item quantity (+ or -)
function changeQuantity(index, change) {
    if (cartItems[index].quantity + change > 0) {
        cartItems[index].quantity += change;
    } else {
        removeFromCart(index);
    }
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
        message += `- ${item.name} (Size: ${item.size}): ₹${item.price.toFixed(2)} x ${item.quantity}\n`;
    });

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    message += `\nTotal Price: ₹${totalPrice.toFixed(2)}`;

    const whatsappURL = `https://wa.me/+917046145944?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}



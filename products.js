const products = {
    polaroid: [
        { 
            name: 'custome Thumbprint Polaroid 1', 
            imageUrl: 'image/Product/Polorid/polorid  (12).webp', 
            price: 20, 
            minOrder:9 
        },
        { 
            name: 'custome Thumbprint Polaroid 2', 
            imageUrl: 'image/Product/Polorid/polorid  (13).webp', 
            price: 20, // Fixed price per piece
            minOrder:9 // Minimum order quantity
        },
        { 
            name: 'Spotify Code<br>Polaroid', 
            imageUrl: 'image/Product/Polorid/polorid  (7).webp', 
            price: 20, // Fixed price per piece
            minOrder:9 // Minimum order quantity
        },
        
        { 
            name: 'White<br>Polaroid', 
            imageUrl: 'image/Product/Polorid/polorid  (1).webp', 
            price:16.667, // Fixed price per piece
            minOrder:9 // Minimum order quantity
        },
        { 
            name: 'Coloring Polaroid', 
            imageUrl: 'image/Product/Polorid/polorid  (4).webp', 
            price: 20, // Fixed price per piece
            minOrder:9 // Minimum order quantity
        },
        { 
            name: 'Pattren Polaroid', 
            imageUrl: 'image/Product/Polorid/polorid  (5).webp', 
            price: 20, // Fixed price per piece
            minOrder:9 // Minimum order quantity
        },
        { 
            name: 'Grey<br> Polaroid', 
            imageUrl: 'image/Product/Polorid/polorid  (6).webp', 
            price: 20, // Fixed price per piece
            minOrder:9 // Minimum order quantity
        },

        { 
            name: 'Unique color Polaroid', 
            imageUrl: 'image/Product/Polorid/polorid  (9).webp', 
            price: 20, // Fixed price per piece
            minOrder:9 // Minimum order quantity
        }

    ],
    anime: [
        {
            name: 'Goku SSJ1 vs Beerus',
            imageUrl: 'image/Product/Poater/Anime/anime (1).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Dragon Ball Super Art',
            imageUrl: 'image/Product/Poater/Anime/anime (2).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },{
            name: 'One Piece Samurai Zoro',
            imageUrl: 'image/Product/Poater/Anime/anime (3).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Son Goku',
            imageUrl: 'image/Product/Poater/Anime/anime (4).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Son Goku & Vegeta',
            imageUrl: 'image/Product/Poater/Anime/anime (5).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Gogeta & Broly',
            imageUrl: 'image/Product/Poater/Anime/anime (6).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Son goku fight',
            imageUrl: 'image/Product/Poater/Anime/anime (7).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Gogesta',
            imageUrl: 'image/Product/Poater/Anime/anime (8).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Gogeta Blue ',
            imageUrl: 'image/Product/Poater/Anime/anime (9).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Gogeta vs Broly Poster – Dragon Ball Super',
            imageUrl: 'image/Product/Poater/Anime/anime (10).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Dragon Ball Poster – Epic Gogeta vs Broly',
            imageUrl: 'image/Product/Poater/Anime/anime (11).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Demon Slayer Mugen Train Poster – Anime Art',
            imageUrl: 'image/Product/Poater/Anime/anime (12).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Rengoku vs Akaza Poster – Demon Slayer Movie',
            imageUrl: 'image/Product/Poater/Anime/anime (13).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Tanjiro Water Breathing Poster – Demon Slayer Art',
            imageUrl: 'image/Product/Poater/Anime/anime (14).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Sukuna Anime Poster – Jujutsu Kaisen Art',
            imageUrl: 'image/Product/Poater/Anime/anime (15).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Tanjiro Kamado Poster – Demon Slayer Wall Art',
            imageUrl: 'image/Product/Poater/Anime/anime (16).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Gohan Super Saiyan Poster – Dragon Ball Z Wall Art',
            imageUrl: 'image/Product/Poater/Anime/anime (17).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Naruto Power Pose Poster – Leaf Village Hero Art',
            imageUrl: 'image/Product/Poater/Anime/anime (18).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Demon Slayer Poster – Tanjiro & Team Epic Anime Wall Art',
            imageUrl: 'image/Product/Poater/Anime/anime (19).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Ultimate Naruto Eyes Poster – Uchiha, Sasuke, Kakashi, Itachi Wall Art',
            imageUrl: 'image/Product/Poater/Anime/anime (20).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Vegetto Super Saiyan Poster – Dragon Ball Fanart Wall Art',
            imageUrl: 'image/Product/Poater/Anime/anime (21).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Naruto Sharingan Rinnegan Poster – Uchiha Clan Eye Powers Fanart',
            imageUrl: 'image/Product/Poater/Anime/anime (22).webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        }
    ],
    music: [
        {
            name: 'Taylor Swift x The Eras Tour Poster',
            imageUrl: 'image/Product/Poater/music/music (1).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Taylor Swift Reputation Era – Tracklist & Lyrics',
            imageUrl: 'image/Product/Poater/music/music (13).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Taylor Swift Portrait Poster – Dreamy Pink & Blue Decor',
            imageUrl: 'image/Product/Poater/music/music (14).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Taylor Swift "The Eras Tour" Poster',
            imageUrl: 'image/Product/Poater/music/music (15).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'TAYLOR SWIFT - LOVER ERA',
            imageUrl: 'image/Product/Poater/music/music (16).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'lavender haze - Taylor Swift',
            imageUrl: 'image/Product/Poater/music/music (17).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Cruel Summer Poster | Taylor Swift Retro Aesthetic Wall Art',
            imageUrl: 'image/Product/Poater/music/music (18).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Guilty as Sin Poster | Taylor Swift Black & White Lyric Print',
            imageUrl: 'image/Product/Poater/music/music (19).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'The Dark Side of the Moon Wall Art Poster',
            imageUrl: 'image/Product/Poater/music/music (20).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Dark Side Towel',
            imageUrl: 'image/Product/Poater/music/music (21).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Taylor Swift Speak Now Poster',
            imageUrl: 'image/Product/Poater/music/music (22).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Barbie Aesthetic Wall Art',
            imageUrl: 'image/Product/Poater/music/music (23).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Eras Tour Music Poster Custom Made Kanvaz Exclusive',
            imageUrl: 'image/Product/Poater/music/music (24).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        }
    ],
    movie: [
        {
            name: 'Pink Floyd Poster',
            imageUrl: 'images/music/pinkfloyd.jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Taylor Swift Poster',
            imageUrl: 'image/Product/Poater/music/Taylor-1.jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        }
    ],
    Motivation: [
        {
            name: 'Code in Progress',
            imageUrl: 'image/Product/Poater/Motivatinal/moti (1).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Motivation for Programmers',
            imageUrl: 'image/Product/Poater/Motivatinal/moti (11).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Chess Lover',
            imageUrl: 'image/Product/Poater/Motivatinal/moti (12).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'DREAM + WORK = SUCCESS',
            imageUrl: 'image/Product/Poater/Motivatinal/moti (13).jpg',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        }
    ],

    car: [
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/1.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/2.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/3.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/4.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/5.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/6.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/7.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/8.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/9.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/10.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/11.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/12.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/13.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/14.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/15.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/16.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        {
            name: 'Coders Poster',
            imageUrl: 'image/Product/Poater/car/17.webp',
            size: {
                A4: 50, A3: 90, 'A4 LANDSCAPE': 50, 'A3 LANDSCAPE': 90
            }
        },
        
    ]

};

let selectedSize = {}; // Object to track selected sizes per product

function showCategory(category) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products

    if (products[category]) {
        products[category].forEach(product => {
            if (category === 'polaroid') {
                // Polaroid Product Card (Fixed Price & Fixed Min Order)
                const productElem = document.createElement('div');
                productElem.className = 'card';
                productElem.innerHTML = `
                    <div class="card-img">
                        <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
                    </div>
                    <h3 class="card-title">${product.name}</h3>
                    <p class="card-price" id="price-${product.name}">₹${(product.price * product.minOrder).toFixed(2)} (9 pieces per order)</p>
                    <button onclick="addPolaroidToCart('${product.name}', '${product.imageUrl}', ${product.price})" class="card-btn add-to-cart">Add to Cart</button>
                `;
                productList.appendChild(productElem);
            } else {
                // Regular Product Card
                const defaultSize = Object.keys(product.size)[0]; // Get the first size as default
                selectedSize[product.name] = defaultSize; // Set default selected size

                const productElem = document.createElement('div');
                productElem.className = 'card';
                productElem.innerHTML = `
                    <div class="card-img">
                        <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
                    </div>
                    <h3 class="card-title">${product.name}</h3>
                    <p class="card-price" id="price-${product.name}">$${product.size[defaultSize].toFixed(2)}</p>
                    <div class="size-selection">
                        ${Object.keys(product.size).map(size => `
                            <button class="card-btn" onclick="selectSize('${product.name}', '${size}', ${product.size[size]}, this)">
                                ${size}
                            </button>
                        `).join('')}
                    </div>
                    <button onclick="addToCart('${product.name}', '${product.imageUrl}')" class="card-btn add-to-cart">Add to Cart</button>
                `;
                productList.appendChild(productElem);
            }
        });
    } else {
        productList.innerHTML = '<p>No products available for this category.</p>';
    }
}

// Function to handle size selection and update price
function selectSize(productName, size, price, button) {
    selectedSize[productName] = size; // Update selected size
    
    // Remove 'active' class from all buttons within the parent
    const buttons = button.parentElement.getElementsByClassName('card-btn');
    Array.from(buttons).forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    button.classList.add('active');

    // Update the displayed price
    document.getElementById(`price-${productName}`).textContent = `$${price.toFixed(2)}`;
}

// Function to add Polaroid to Cart with fixed quantity of 9
function addPolaroidToCart(productName, imageUrl, unitPrice) {
    const quantity = 9; // Fixed quantity per order
    const totalPrice = unitPrice * quantity;

    const cartItem = {
        name: productName,
        size: `9 pieces`,
        price: totalPrice,
        imageUrl: imageUrl,
        quantity: 1
    };

    // Check if the item is already in the cart
    const existingItemIndex = cartItems.findIndex(item => item.name === productName);
    
    if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity += quantity; // Increase quantity if exists
        cartItems[existingItemIndex].price += totalPrice;
    } else {
        cartItems.push(cartItem); // Add new item if not exists
    }

    updateCartDisplay();
    updateCartCount();
}
function addToCart(productName, imageUrl) {
    if (!selectedSize[productName]) {
        alert('Please select a size before adding to the cart.');
        return;
    }

    const size = selectedSize[productName]; // Get the selected size
    
    // Find the product in any category
    let foundProduct = null;
    for (const category in products) {
        foundProduct = products[category].find(product => product.name === productName);
        if (foundProduct) break; // Stop searching once found
    }

    if (!foundProduct) {
        console.error(`Product "${productName}" not found in any category.`);
        return;
    }

    const price = foundProduct.size[size]; // Get price of selected size

    const cartItem = {
        name: productName,
        size: size,
        price: price,
        imageUrl: imageUrl,
        quantity: 1
    };

    // Check if the item is already in the cart
    const existingItemIndex = cartItems.findIndex(item => 
        item.name === productName && item.size === size
    );

    if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity += 1; // Increase quantity if exists
    } else {
        cartItems.push(cartItem); // Add new item if not exists
    }

    updateCartDisplay();
    updateCartCount();


    // Reset size button color after adding to cart
    resetSizeButtonColor();
}

window.onload = function() {
    showCategory('polaroid'); // Default category
};

function preloadImages() {
    for (const category in products) {
        products[category].forEach(product => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = product.imageUrl;
            link.as = 'image';
            document.head.appendChild(link);
        });
    }
}



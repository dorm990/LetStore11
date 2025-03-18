const products = [
    { id: 1, name: 'Товар 1', description: 'Описание товара 1. Этот товар обладает замечательными свойствами.', price: '10.00', img: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Товар 2', description: 'Описание товара 2. Идеален для вашего дома.', price: '20.00', img: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Товар 3', description: 'Описание товара 3. Подходит для всех возрастов.', price: '30.00', img: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Товар 4', description: 'Описание товара 4. Высокое качество и доступная цена.', price: '40.00', img: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Товар 5', description: 'Описание товара 5. Рекомендуется к покупке.', price: '50.00', img: 'https://via.placeholder.com/300' },
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.img}" alt="${product.name}">
            <p>${product.description}</p>
            <p>Цена: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Добавить в корзину</button>
            <button onclick="viewProduct(${product.id})">Подробнее</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Вы выбрали: ${product.name}\n${product.description}\nЦена: $${product.price}`);
}

function checkout() {
    alert('Оформление заказа...');
}

// Инициализация
displayProducts();


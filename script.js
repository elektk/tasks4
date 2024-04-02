                                                    // task 1

function decryptMessage(message, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let decryptedMessage = '';

  for (let i = 0; i < message.length; i++) {
    if (alphabet.includes(message[i].toLowerCase())) {
      const position = alphabet.indexOf(message[i].toLowerCase());
      let newPosition = (position - key) % 26;
      if (newPosition < 0) {
        newPosition = 26 + newPosition;
      }
      if (message[i] === message[i].toUpperCase()) {
        decryptedMessage += alphabet[newPosition].toUpperCase();
      } else {
        decryptedMessage += alphabet[newPosition];
      }
    } else {
      decryptedMessage += message[i];
    }
  }

  return decryptedMessage;
}

console.log(decryptMessage("Khoor, zruog!", "3"));

                                                    // task 2

let cart = {
products: [], // Массив товаров
total: 0, // Общая сумма покупки

// Метод для добавления товара в корзину
addProduct: function(product, quantity, price) {
let productIndex = this.products.findIndex(item => item.product === product); // Ищем товар в корзине
if (productIndex !== -1) { // Если товар уже есть, увеличиваем количество
this.products[productIndex].quantity += quantity;
} else { // Иначе добавляем новый товар
this.products.push({
product: product,
quantity: quantity,
price: price
});
}
this.calculateTotal(); // Пересчитываем общую сумму
},

// Метод для удаления товара из корзины
removeProduct: function(product) {
this.products = this.products.filter(item => item.product !== product); // Удаляем товар из массива
this.calculateTotal(); // Пересчитываем общую сумму
},

// Метод для изменения количества товара
changeQuantity: function(product, quantity) {
let productIndex = this.products.findIndex(item => item.product === product); // Ищем товар в корзине
if (productIndex !== -1) { // Если товар найден, меняем количество
this.products[productIndex].quantity = quantity;
this.calculateTotal(); // Пересчитываем общую сумму
}
},

// Метод для расчета общей суммы покупки
calculateTotal: function() {
this.total = this.products.reduce((sum, item) => sum + (item.price * item.quantity), 0); // Считаем сумму товаров в корзине
},

// Метод для оформления заказа
checkout: function() {
console.log("Товары в корзине:");
this.products.forEach(item => {
console.log(`${item.product} - ${item.quantity} шт. по ${item.price} руб.`);
});
console.log(`Итого: ${this.total} руб.`);
// Другая необходимая информация
}
};

// Пример использования
cart.addProduct("Футболка", 2, 500);
cart.addProduct("Джинсы", 1, 1500);
cart.removeProduct("Футболка");
cart.changeQuantity("Джинсы", 3);
cart.checkout(); // Выводит информацию о товарах в корзине, итоговую сумму и другую необходимую информацию.

                                                    // task 3

function filterProducts(products, criteria) {
  let filteredProducts = products;

  // Фильтрация по ценовому диапазону
  if (criteria.priceRange) {
    filteredProducts = filteredProducts.filter(product =>
      product.price >= criteria.priceRange.min && product.price <= criteria.priceRange.max
    );
  }

  // Фильтрация по категории
  if (criteria.category) {
    filteredProducts = filteredProducts.filter(product =>
      product.category === criteria.category
    );
  }

  // Фильтрация по бренду
  if (criteria.brand) {
    filteredProducts = filteredProducts.filter(product =>
      product.brand === criteria.brand
    );
  }

  return filteredProducts;
}

const products = [
  { name: "Товар 1", price: 100, category: "категория 1", brand: "бренд 1" },
  { name: "Товар 2", price: 200, category: "категория 2", brand: "бренд 2" }
];

const criteria = {
  priceRange: { min: 100, max: 300 },
  category: "категория 1",
  brand: "бренд 1"
};

console.log(filterProducts(products, criteria));
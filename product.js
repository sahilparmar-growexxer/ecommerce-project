class Product {
constructor(name, price) {
this.name = name;
this.price = price;
this.discount = 0;
}
getPrice() {
return this.price - (this.price * this.discount / 100);
const tax = 0.18; // 18% tax
return this.price + (this.price * tax);
}
}
module.exports = Product;
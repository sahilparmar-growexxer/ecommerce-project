class Product {
constructor(name, price) {
this.name = name;
this.price = price;
this.discount = 0;
}
getPrice() {
<<<<<<< HEAD
return this.price - (this.price * this.discount / 100);
<<<<<<< HEAD
const tax = 0.18; // 18% tax
return this.price + (this.price * tax);
=======
=======
const tax = 0.18; // 18% tax
return this.price + (this.price * tax);
>>>>>>> ae57514 (Add tax calculation)
>>>>>>> 24359cb (implement user login with validation)
}
}
module.exports = Product;
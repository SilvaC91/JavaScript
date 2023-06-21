function Smartphone(brand, name, price){
    this.brand=brand;
    this.name=name;
    this.price=price;
}

let zenfone9 = new Smartphone('Asus','Zenfone9',850);
let iphone14ProMax = new Smartphone('Apple','Iphone14ProMax',1489);

console.log(zenfone9);
console.log(iphone14ProMax);
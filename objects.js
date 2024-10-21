const phone = {
    brand: "Samsung",
    model: "Samsung S24 Ultra"
}

const samsung = {
    brand: "Samsung",
    model: "Samsung S24 Ultra"
}

console.log(Object.is(phone, samsung));
console.log(Object.is(25, 25));
console.log(Object.is(NaN, NaN));
const phone = {
    brand: "Vivo",
    model: "Vivo X200 Pro",
    year: "2024",
    storage: "1TB",
    ram: "16GB",
    price: "$1000"
}

Object.freeze(phone);

phone.brand = "Google";
console.log(Object.values(phone));
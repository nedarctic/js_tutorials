const phone = {
    brand: "Vivo",
    model: "Vivo X200 Pro",
    year: "2024",
    storage: "1TB",
    ram: "16GB",
    price: "$1000"
}

Object.seal(phone); // prevents adding new properties but allows modifying existing ones

phone.camera = "Zeiss"; // adding new property
phone.price = "1300$"; // modifying an existing property
console.log(Object.entries(phone));
const phone = {
    model: "Samsung S24 Ultra",
    battery: "5000mAh",
    display: "LTPO",
    price: "1000$",
    year: 2024,
    storage: "1TB",
    RAM: "16GB"
}

Object.entries(phone).map(property => console.log(property[0] + ": " + property[1]));
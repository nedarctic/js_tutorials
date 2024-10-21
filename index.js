const phones = ['Samsung', 'iPhone', 'Google Pixel', 'Vivo', 'Honor', 'Huawei'];

const splicedArr = phones.splice(0, 2, "Motorolla", "Redmi");
console.log("Spliced array:", splicedArr);
console.log("phones after splicing:", phones);
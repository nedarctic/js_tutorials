const phones = ['Samsung', 'iPhone', 'Google Pixel', 'Vivo', 'Honor', 'iQoo', 'Huawei', 'Redmi'];

const isPhonesSomeIncludeO = phones.some(phone => phone.includes('o'));
console.log(isPhonesSomeIncludeO);
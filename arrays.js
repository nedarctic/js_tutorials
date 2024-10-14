// Instantiating a new array
// 1. Array literal
const phones = ['Samsung', 'iPhone', 'Google Pixel', 'Huawei', 'Vivo', 'Xiaomi', 'Oppo', 'Tecno', 'Infinix', 'HMD'];

// 2. Array constructor
const cars = new Array('BMW', 'Audi', 'Ferrari', 'Ford', 'Toyota', 'Aston Martin', 'Dodge', 'Range Rover', 'Chevrolet');

// JS Arrays Methods
// 1. push(element1, ..., elementN) – Add

phones.push('Motorolla');
cars.push('Rimac Nevera');
console.log('Method 1: push - Add element to the tail of list')
if(phones.includes('Motorolla')){
    console.log('Motorolla successfully added!');
}
if(cars.includes('Rimac Nevera')){
    console.log('Rimac Nevera successfully added! \n');
}
// 2. pop() – Remove last element
console.log('Method 2: pop - Remove last element')
console.log(`Length of phones before popping is ${phones.length}`);
const poppedElem = phones.pop();
console.log(`Length of phones after popping is ${phones.length}`);
console.log('Popped element is', poppedElem);

// 3. shift() – Remove


// unshift(element1, ..., elementN) – Add
// forEach(callback(currentValue, index, array)) – Iterate
// map(callback(currentValue, index, array)) – Transform
// filter(callback(element, index, array)) – Filter
// reduce(callback(accumulator, currentValue, index, array), initialValue) – Accumulate
// reduceRight(callback(accumulator, currentValue, index, array), initialValue) – Accumulate
// some(callback(element, index, array)) – Test
// every(callback(element, index, array)) – Test
// find(callback(element, index, array)) – Find
// findIndex(callback(element, index, array)) – Locate
// concat(value1, ..., valueN) – Merge
// slice(beginIndex, endIndex) – Copy
// splice(start, deleteCount, item1, ..., itemN) – Modify
// join(separator) – Concatenate
// reverse() – Reverse
// sort(compareFunction) – Order
// includes(searchElement, fromIndex) – Check
// indexOf(searchElement, fromIndex) – Locate
// lastIndexOf(searchElement, fromIndex) – Locate
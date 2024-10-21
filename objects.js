const proto = {greet() {return "Hello";}};

const obj = Object.create(proto);
console.log(Object.getPrototypeOf(obj));
const phones = ['Samsung', 'iPhone', 'Google Pixel', 'Vivo', 'Honor', 'Huawei'];

const phonesSeparatedByCommas = phones.reduce((previous, current,  currentId) => {
    let sentence = previous + ", " + current;
    if(currentId == phones.length - 1){
        sentence += ".";
    }
    return sentence;
});
console.log(phonesSeparatedByCommas);
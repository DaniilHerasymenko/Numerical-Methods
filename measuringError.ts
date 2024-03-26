const trueValue : number = 2; //точне значення
const approximateValue : number = 1.8859; //наближене значення
console.log(`True error : ${approximateValue - trueValue}`); // абсолютна похибка
console.log(`Relative true error : ${Math.abs(approximateValue - trueValue)/trueValue}`); // відносна похибка
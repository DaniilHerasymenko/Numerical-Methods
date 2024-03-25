const func = (x : number) => x**2;
function leftRectanglesMethod(a : number, b : number, iteration :number) {
    let interval = (b-a)/iteration;
    let sum = 0;
    for (let i = 0; i <= iteration - 1; i++) {
        sum += func(a + i * interval);
    }
    let result = interval * sum;
    console.log("Area: " + result);
}
leftRectanglesMethod(0, 1, 4);
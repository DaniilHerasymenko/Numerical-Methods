const func = (x : number) => 1/Math.sqrt(1-x**2);
function leftRectanglesMethod(a : number, b : number, iteration : number) {
    let interval = (b-a)/iteration;
    let sum = 0;
    for (let i = 1; i <= iteration; i++) {
        sum += func(a + i * interval);
    }
    let result = interval * sum;
    console.log("Area: " + result);
}
leftRectanglesMethod(0, 0.5, 10);
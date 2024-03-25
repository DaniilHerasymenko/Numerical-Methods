const func = (x : number) => 1/Math.sqrt(1-x**2);
function trapezoidalRule(a : number, b : number, iteration : number) {
    let interval = (b-a)/iteration;
    let sum = func(a)+func(b);
    for (let i = 1; i < iteration; i++) {
        sum += 2*func(a + i * interval);
    }
    let result = interval/2 * sum;
    console.log("Area: " + result);
}
trapezoidalRule(0, 0.5, 10);
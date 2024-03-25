const func = (x : number) => 1/Math.sqrt(1-x**2);
function simpsonsRule(a : number, b : number, iteration : number) {
    let interval = (b-a)/iteration;
    let sum = func(a) + func(b);
    let odd_sum = 0, even_sum = 0;
    for (let i = 1; i < iteration; i+=2) {
        odd_sum +=func(a + i * interval);
    }
    for (let j = 2; j < iteration; j+=2) {
        even_sum +=func(a + j * interval);
    }
    let result = (interval/3) * (sum + 4*odd_sum + 2*even_sum);
    console.log("Area: " + result);
}
simpsonsRule(0, 0.5, 10);
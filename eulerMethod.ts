// Початкові дані : dy(x)/dx = -1.0*y, y(0)= 0.08
// Аналітичний розв'язок : y(x) = 0.08*exp(-1.0*x)
const func = (x : number,y : number) => -1.0 * y;
function eulerMethod (y0 : number, x0 : number, x1 : number, n : number) {
    let y = y0, x = x0;
    console.log(0,y,x);
    for (let i = 1; i <= n; i++){
        const k1 = func(x,y);
        const h = (x1-x0)/n;
        x+=h;
        y+=(k1*h);
        console.log(i, k1, y, x);
    }
}
eulerMethod(0.08, 0, 1, 20);
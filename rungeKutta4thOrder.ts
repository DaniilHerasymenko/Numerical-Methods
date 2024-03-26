// Початкові дані : dy(x)/dx = -1.0*y, y(0)= 0.08
// Аналітичний розв'язок : y(x) = 0.08*exp(-1.0*x)
const func = (x : number,y : number) => -1.0 * y;
function rungeKutta4thOrder (y0 : number, x0 : number, x1 : number, n : number) {
    let y = y0, x = x0;
    console.log(0,y,x);
    for (let i = 1; i <= n; i++){
        const h = (x1-x0)/n;
        const k1 = func(x,y);
        const k2 = func(x+h/2, y+k1*h/2);
        const k3 = func(x+h/2, y+k2*h/2);
        const k4 = func(x+h, y+k3*h);
        y+=(k1+ 2*k2+ 2*k3+ k4)*h/6;
        x+=h;
        console.log(i, k1, k2, k3, k4, y, x);
    }
}
rungeKutta4thOrder(0.08, 0, 1, 20);
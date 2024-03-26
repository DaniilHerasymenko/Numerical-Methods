// Початкові дані : dy(x)/dx = -1.0*y, y(0)= 0.08
// Аналітичний розв'язок : y(x) = 0.08*exp(-1.0*x)
const func = (x : number,y : number) => -1.0 * y;
function midpointMethod (y0 : number, x0 : number, x1 : number, n : number) {
    let y = y0, x = x0;
    console.log(0,y,x);
    for (let i = 1; i <= n; i++){
        const h = (x1-x0)/n;
        const k1 = func(x,y);
        const k2 = func(x+0.5*h, y+0.5*h*k1);
        x+=h;
        y+=k2*h;
        console.log(i, k1,k2, y, x);
    }
}
midpointMethod(0.08, 0, 1, 20);
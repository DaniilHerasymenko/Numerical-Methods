const lagrangeFirstOrder = (x : number) => 2*x; //поліном Лагранжа 1-го порядку для точок [x4,y4], [x5, y5]
const lagrangeSecondOrder = (x : number) => 2*x; //2-го порядку для точок [x3-5,y3-5]
const lagrangeThirdOrder = (x : number) => -8.34*x**3+10*x**2-1.88*x+0.5; //3-го порядку для точок [x2-5,y2-5]

//У функцію передається початковий та кінцевий проміжки, а також кількість вузлів інтерполяції
const lagrangianInterpolation = (xmin : number, xmax : number, points : number) => {
    const h = (xmax-xmin)/points;
    for (let i = 0; i <= points; i++) {
        const x = xmin + i*h;
        const y1 = lagrangeFirstOrder(x);
        const y2 = lagrangeSecondOrder(x);
        const y3 = lagrangeThirdOrder(x);
        console.log(x, y1, y2, y3);
    }
}
lagrangianInterpolation(0, 0.5, 50);
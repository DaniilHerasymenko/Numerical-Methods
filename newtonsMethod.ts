const func = (x : number) => x**4+3*x**2-75*x-10000;
const dfunc = (x : number) => 4*x**3+6*x-75; //похідна функції
function newtonsMethod(a : number,b : number) {
    if (func(a) * func(b) < 0) {
        let iteration;
        do {
            iteration = b - func(b)/dfunc(b); // можна брати як ліву, так і праву границю 
            console.log(iteration, func(iteration));
            b = iteration;
        } while (Math.abs(func(iteration)) > 1e-5);
    }else if(func(a) === 0) {console.log(func(a));
    }else if(func(b) === 0) {console.log(func(b));
    }else {console.log('Нема кореня');}
}
newtonsMethod(10,11);
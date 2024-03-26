const func = (x : number) => x**4+2*x**2-x-1;
function bisection(a : number,b : number) {
    if (func(a) * func(b) < 0){
        let iteration;
        do {
            iteration = 0.5 * (a + b);
            console.log(iteration, func(iteration));
            if (func(iteration) * func(a) < 0) {
                b = iteration;
            } else {
                a = iteration;
            }
        } while (Math.abs(func(iteration)) > 1e-9);
    }else if (func(a) === 0) {console.log(func(a));
    }else if(func(b) ===0) {console.log(func(b));
    }else {console.log('Нема кореня');}
}
bisection(0,1);
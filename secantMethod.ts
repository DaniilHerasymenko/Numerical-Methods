const func = (x : number) => x**3+0.2*x**2-0.2*x-1.2;
function secantMethod(a : number,b : number) {
    if (func(a) * func(b) < 0){
        let iteration;
        do {
            iteration = a - func(a)/func(b)*(b-a);
            console.log(iteration, func(iteration));
            if (func(iteration) * func(a) < 0) {
                b = iteration;
            } else {
                a = iteration;
            }
        } while (Math.abs(func(iteration)) > 1e-9);
    }else if (func(a) === 0) {console.log(func(a));
    }else if(func(b) === 0) {console.log(func(b));
    }else {console.log('Нема кореня');}
}
secantMethod(1, 1.5);
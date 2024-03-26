const func = (x : number) => x**4+3*x**2-75*x-10000;
const dfunc = (x : number) => 4*x**3+6*x-75; //похідна функції
function combinedMethod(a : number,b : number) {
    if (func(a) * func(b) < 0) {
        let iterationA, iterationB, average;
        do {
            iterationA = a - func(a)/dfunc(a);
            iterationB = b - func(b)*(b-a)/(func(b)-func(a));
            average = (iterationA+iterationB)/2;
            console.log(average, func(average));
            a = iterationA;
            b = iterationB;
        } while (Math.abs(func(average)) > 1e-5);
    }else if(func(a) === 0) {console.log(func(a));
    }else if(func(b) === 0) {console.log(func(b));
    }else {console.log('Нема кореня');}
}
combinedMethod(10,11);
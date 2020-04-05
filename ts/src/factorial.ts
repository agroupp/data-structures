function factorial(n: number): number {
    let result = 1;
    if (!n || n === 1) return result;
    for(let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}

console.log(`5! = ${factorial(5)}`);
console.log(`6! = ${factorial(6)}`);
console.log(`7! = ${factorial(7)}`);
console.log(`446! = ${factorial(446)}`);

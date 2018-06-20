/*

2. parameters are declared when the function is defined. arguments are passed when the function is consumed.
3. return provides a value for the processed function. console.log prints to screen.
*/

const checkPalindrome = (inString) => { 
    instring = instring.toLowerCase();
    let firstHalf = inString.split('').slice(0,inString.length/2);
    let secondHalf = inString.split('').slice(inString.length/2, inString.length);
    if (secondHalf.length!=firstHalf.length){
        secondHalf=secondHalf.slice(1,secondHalf.length);
    }
    secondHalf=secondHalf.reverse();
    for (i = 0; i < firstHalf.length; ++i) {
        if (firstHalf[i] !== secondHalf[i]) return false;
    }
    return true;
 }

 const calcSide = (a, b) => {
     return Math.sqrt( Math.pow(a,2) + Math.pow(b,2) );
 }

const sumArray = (inArray) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return inArray.reduce(reducer);
}

const checkPrime = (n) => {
    if (i===1)
        return false;
    for (let i=2; i<=Math.sqrt(n);i++){
        if (n%i==0)
            { return false; }
    }
    return true;
}

const printPrimes = (n) => {
    console.log("Primes between 1 and "+n);
    for (let i=1; i<=n; i++){
        if (checkPrime(i))
            { console.log(i); }
    }
}

const insertDash = (inString) => {
    inString=inString.toString();
    inString=inString.split('');
    for (let i=0; i<iString.length; i++)
        {
            
        }    
}

console.log(calcSide(2,2));
console.log(sumArray([1,2,3,4]));
console.log(checkPrime(9));
printPrimes(20);
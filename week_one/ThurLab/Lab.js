


const printString = (name) => { console.log(name); };
const reverseWordOrder = (name) => { 
    name = name.split(''); 
    name.reverse(); 
    let str = "";
    name.forEach(function (char){str+=char;});
    printString(str);
}
const calculate = (num1, num2, operation) => { 
    switch (operation){
        case "sub": return num1-num2; break;
        case "mult": return num1*num2; break;
        case "div": return num1/num2; break;
        case "exp": return Math.pow(num1,num2); break;
        default: return null; break;
    }
 }


//const userInput = prompt("Enter the thing");
//alert(reverseWordOrder(userInput));

const isPalindrome = (inString) => { 
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

 console.log(isPalindrome("aa"));




const addNumber = (e) => {
    console.log(document.getElementById('display').innerHTML.indexOf('.'));
    console.log((document.getElementById('display').innerHTML=='.'))
    if (  (document.getElementById('display').innerHTML.indexOf('.')!=-1)  &&  (document.getElementById('display').innerHTML=='.')  )
        return 0;
    
    document.getElementById('display').innerHTML+=e.currentTarget.innerHTML;
}
const operator = (e) => {
    switch(e.currentTarget.innerHTML){
    }
}

for (let num of $('.num')){
   num.onclick=addNumber;
}


console.log("hi");
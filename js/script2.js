'use script'
// Write a progrma and print the trangle
function printTrangle(n){
    if(n==undefined){
        return 'please enter value';
    }
    if(n==0){
    return 'please enter the value greater than zero';
    }
    else{
    for(let i=0;i<=n;i++){
        for(let j=0;j<i;j++){
            document.write(" * ");
        }
        document.write("<br>")

    }
}
    
}
printTrangle(0);
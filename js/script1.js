'use strict'
//Write a program get the factorial
//Recursion method
 function factorial(n){
     if(n==0){
         return 1;
     }
     return n* factorial(n-1);
}
document.write("Recurision method=>"+factorial(5));
document.write("<br><br>");

let fact=1;
		function getValue(n){
            let i=1;
		if(n==0){
		return fact;	
        }	
        // using for lop
		//  for(let i=1;i<=n;i++){
        //   fact=fact*i;
        // }
        //using while loop
        while(i<=n){
            fact=fact*i;
            i++;
           
        }	
        return fact;
		}
document.writeln("Normal using loop=>"+getValue(5));

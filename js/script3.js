// create table 1-20
'use strict'
const rows=prompt("Please enter the rows");
const cols=prompt("Please enter the columns");
if(rows=="" || rows==null){
    rows=10;
}
if(cols=="" || cols==null){
    cols=10;
}
createTable(rows,cols);
function createTable(r,c){
    debugger
let i=1,j=1;
let output="<table cellpadding='10' border='1'>";
for(i=1;i<=r;i++){
    output+=`<tr>`;
    while(j<=c){
        output+=`<td>${i*j}</td>`;
        j++;
    }
    output+=`</tr>`;
    j=1;
}
output+='</table>';
document.write(output);
}


// create table random row and column
'use strict'
let rows=prompt("Please enter the rows");
let cols=prompt("Please enter the columns");
debugger
if(rows=="" || rows==null || rows==0){
    rows=10;
}
if(cols=="" || cols==null || cols==0){
    cols=10;
}
createTable(rows,cols);
function createTable(r,c){
let i=1,j=1;
let output="<table>";
for(i=1;i<=r;i++){
    output+=`<tr>`;
    while(j<=c){
        output+=`<td class="${i%2!=0?'td-bg':''}">${i*j}</td>`;
        j++;
    }
    output+=`</tr>`;
    debugger
    j=1;
}
output+='</table>';
document.write(output);
}


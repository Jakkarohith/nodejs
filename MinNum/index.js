var sb = require('readline-sync');
var n=parseInt(sb.question("Enter the number of elements in the array \n"));
var arr=new Array();
console.log("Enter the array elements");
for(let i=0;i<n;i++)
{
    let temp=parseInt(sb.question());
    arr[i]=temp;
}
var min=arr[0];
for(let i=1;i<n;i++)
{
if(min>arr[i])
{
min=arr[i];    
}    
}
console.log("Minimun number in "+arr+"  "+min);

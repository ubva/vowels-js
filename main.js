function str(var1){
    let var2 ="aeiou"
    let result = 0
   for (let i=0; i<var1.length; i++){
    if(var2.indexOf(var1[i].toLowerCase()) !== -1){
     result += 1    
   }
}
return result
}
console.log(str('olma'))
console.log(str('assalomu alaykum'))
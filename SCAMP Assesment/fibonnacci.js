const input= document.getElementById("input");
const result= document.getElementById("result");
function fib_no(){
  var fib = [0, 1];

  for(var i=fib.length; i < input.value; i++) {
  fib[i] = fib[i-2] + fib[i-1];

 }
 result.innerHTML=fib;
}
function clear_display(){
   input.value= "";
   result.innerHTML= "";

 } 
var i;
var a;
a=prompt("Ingrese un numero del 1 al 10");
a=parseInt(a)
console.log("Tabla de numero ",+a);
for(i=1; i<11; i++){
  tabel=a*i;
  console.log(a+"x"+i+"="+tabel);
}

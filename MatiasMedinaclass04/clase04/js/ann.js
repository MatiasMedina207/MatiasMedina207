var b;
var c;
b=prompt("Ingrese un numero del 1 al 10");
b=parseInt(b)
console.log("Tabla del numero "+b);
for(c=1; c<11; c++){
  tabel=b*c;
  console.log(b+"x"+c+"="+tabel);
}


console.log(":::::::::::::::::::::::::::::::::::::::::::::")
var d;
var e;
d=prompt("Ingrese un numero del 1 al 10");
d=parseInt(d)
if(b<d){
  console.log("Tabla del numero "+d);
  for(e=1; e<11; e++){
    tabel=d*e;
    console.log(d+"x"+e+"="+tabel);
  }
}else{
  console.log("Error, el segundo numero ingresado debe ser mayor al primero")
}

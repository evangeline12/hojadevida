//alert ("AQUI ESTOY");
var salario, trasporte, sueldo, mesada,gastos

sueldo= 781242;
trasporte = 88250;
function sumar () {
    salario = sueldo + trasporte;
}
    sumar ();
//alert(salario);
function gastos () {
    
    gastos = prompt ("ingreso gastos") 
    mesada = salario - gastos
    if (mesada > 500000){
        alert ("Lo estamos haciendo bien");
        
    }
    else {alert ("aprendamos a programar");

    }

} 
gastos ();


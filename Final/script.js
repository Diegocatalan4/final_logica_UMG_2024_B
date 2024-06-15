let total;
let valor1;
let valor2;
let valor3;
let operacion;
function btn1(){
    valor1 = parseFloat(document.getElementById('valor1').value);
    valor2 = parseFloat(document.getElementById('valor2').value);
    valor3 = parseFloat(document.getElementById('valor3').value);
    if (valor1 !== valor3 ){
       if (valor2 == 0){
        if (valor1 > valor3){
            total = valor1 - valor3;
        }
        else{ 
            total = valor3 - valor1
            operacion = "resta  ";
        }
       }
       else{
        total = valor1 * valor2 * valor3;
        operacion = "Multiplicacion  "
       }
        
        }
        else {
            total = valor1 + valor2 + valor3;
        operacion = "Suma  "
        }
    

    document.getElementById('resultado').value = operacion + total;
}
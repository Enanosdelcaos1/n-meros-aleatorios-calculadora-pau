/* ========================================
   LÓGICA DE LA CALCULADORA MANUAL
   Controla las operaciones con números introducidos por el usuario
   ======================================== */

/* ========================================
   FUNCIÓN: Calcular operaciones manuales
   Realiza las 6 operaciones con los números introducidos
   ======================================== */
function calcularOperacionesManuales() {
    // Obtener los valores de los inputs
    const numero1 = parseFloat(document.getElementById('inputNumero1').value) || 0;
    const numero2 = parseFloat(document.getElementById('inputNumero2').value) || 0;

    // Suma: numero1 + numero2
    const suma = numero1 + numero2;
    document.getElementById('resultSumaManual').textContent = suma;

    // Resta: numero1 - numero2
    const resta = numero1 - numero2;
    document.getElementById('resultRestaManual').textContent = resta;

    // Multiplicación: numero1 * numero2
    const multiplicacion = numero1 * numero2;
    document.getElementById('resultMultiplicacionManual').textContent = multiplicacion;

    // División: numero1 / numero2 (si numero2 no es 0)
    const division = numero2 !== 0 ? (numero1 / numero2).toFixed(2) : 'Error';
    document.getElementById('resultDivisionManual').textContent = division;

    // Porcentaje: qué porcentaje es numero1 de numero2
    const porcentaje = numero2 !== 0 ? (numero1 * numero2 / 100).toFixed(2) : 'Error';
    document.getElementById('resultPorcentajeManual').textContent = porcentaje;

    // Raíz cuadrada: raíz cuadrada del promedio de los dos números
    const promedio = (numero1 + numero2) / 2;
    const raizCuadrada = Math.sqrt(promedio).toFixed(2);
    document.getElementById('resultRaizCuadradaManual').textContent = raizCuadrada;
}

/* ========================================
   EVENTO DEL BOTÓN CALCULAR
   Al hacer click, calcula todas las operaciones
   ======================================== */
document.getElementById('btnCalcular').addEventListener('click', function() {
    calcularOperacionesManuales();
});

/* ========================================
   EVENTO DE TECLA ENTER EN LOS INPUTS
   Permite calcular presionando Enter en los campos de texto
   ======================================== */
document.getElementById('inputNumero1').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcularOperacionesManuales();
    }
});

document.getElementById('inputNumero2').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcularOperacionesManuales();
    }
});

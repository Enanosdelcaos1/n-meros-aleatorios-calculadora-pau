/* ========================================
   LÓGICA DE LA CALCULADORA DE PORCENTAJE
   Calcula el porcentaje de una cantidad
   ======================================== */

/* ========================================
   FUNCIÓN: Calcular porcentaje
   Calcula el porcentaje de una cantidad introducida
   ======================================== */
function calcularPorcentaje() {
    const cantidad = parseFloat(document.getElementById('inputCantidad').value) || 0;
    const porcentaje = parseFloat(document.getElementById('inputPorcentaje').value) || 0;

    // Fórmula: (cantidad * porcentaje) / 100
    const resultado = (cantidad * porcentaje) / 100;
    document.getElementById('resultPorcentajeFinal').textContent = resultado.toFixed(2);
}

/* ========================================
   EVENTO DEL BOTÓN CALCULAR PORCENTAJE
   Al hacer click, calcula el porcentaje
   ======================================== */
document.getElementById('btnCalcularPorcentaje').addEventListener('click', function() {
    calcularPorcentaje();
});

/* ========================================
   EVENTO DE TECLA ENTER EN LOS INPUTS
   Permite calcular presionando Enter
   ======================================== */
document.getElementById('inputCantidad').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcularPorcentaje();
    }
});

document.getElementById('inputPorcentaje').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcularPorcentaje();
    }
});

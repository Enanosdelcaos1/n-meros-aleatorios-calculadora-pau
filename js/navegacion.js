/* ========================================
   LÓGICA DE NAVEGACIÓN ENTRE APARTADOS
   ======================================== */

function mostrarApartado(apartado) {
    // Ocultar todos los apartados
    const apartados = document.querySelectorAll('.apartado');
    apartados.forEach(ap => ap.classList.remove('activo'));

    // Desactivar todos los botones
    const botones = document.querySelectorAll('.btn-apartado');
    botones.forEach(btn => btn.classList.remove('activo'));

    // Mostrar el apartado seleccionado
    document.getElementById(`apartado-${apartado}`).classList.add('activo');

    // Activar el botón correspondiente
    event.target.classList.add('activo');
}

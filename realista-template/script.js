// Función para cambiar catálogo
function changeCatalog(category) {
    const tabs = document.querySelectorAll('.catalog-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    const categories = document.querySelectorAll('.catalog-category');
    categories.forEach(cat => cat.classList.remove('active'));
    document.getElementById(category).classList.add('active');
}

// Función para mostrar/ocultar ejemplos adicionales
function toggleExamples(type) {
    // Cerrar todos los ejemplos ocultos en otros tipos de corte
    const allExamples = document.querySelectorAll('.example.hidden');
    allExamples.forEach(example => {
        example.classList.add('hidden');
    });

    // Remover expanded de todos
    const allTypes = document.querySelectorAll('.haircut-type');
    allTypes.forEach(t => t.classList.remove('expanded'));

    // Toggle los ejemplos del tipo seleccionado
    const examples = type.querySelectorAll('.example');
    let hasHidden = false;
    examples.forEach((example, index) => {
        if (index > 0) {
            if (example.classList.contains('hidden')) {
                example.classList.remove('hidden');
                hasHidden = true;
            } else {
                example.classList.add('hidden');
            }
        }
    });

    // Si se mostraron, agregar expanded
    if (hasHidden) {
        type.classList.add('expanded');
    } else {
        type.classList.remove('expanded');
    }
}

// Función para mostrar imagen a pantalla completa
function showFullScreen(src) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    modal.style.display = 'flex';
    modalImg.src = src;
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

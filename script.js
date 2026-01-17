// ===============================
// CAMBIO DE CATÁLOGO
// ===============================
function changeCatalog(category, event) {
    const tabs = document.querySelectorAll('.catalog-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    const categories = document.querySelectorAll('.catalog-category');
    categories.forEach(cat => cat.classList.remove('active'));
    document.getElementById(category).classList.add('active');
}

// ===============================
// MOSTRAR / OCULTAR EJEMPLOS
// ===============================
function toggleExamples(type) {

    const allExamples = document.querySelectorAll('.example.hidden');
    allExamples.forEach(example => {
        example.classList.add('hidden');
    });

    const allTypes = document.querySelectorAll('.haircut-type');
    allTypes.forEach(t => t.classList.remove('expanded'));

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

    if (hasHidden) {
        type.classList.add('expanded');
    }
}

// ===============================
// MODAL DE IMÁGENES
// ===============================
function showFullScreen(src) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    modal.style.display = 'flex';
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// ===============================
// CAMBIO DE ESTILO GLOBAL
// ===============================
function changeGlobalStyle(style, button) {

    const buttons = document.querySelectorAll('.style-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');
    document.body.className = style;

    document.getElementById('current-style').textContent =
        style.charAt(0).toUpperCase() + style.slice(1);
}

// ===============================
// MENÚ DE NAVEGACIÓN MÓVIL
// ===============================
document.addEventListener('DOMContentLoaded', () => {

    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if (toggle && menu) {

        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.textContent = menu.classList.contains('active') ? '✖' : '☰';
        });

        // Cerrar menú al hacer clic en un link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                toggle.textContent = '☰';
            });
        });
    }

    // ===============================
    // SMOOTH SCROLL
    // ===============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

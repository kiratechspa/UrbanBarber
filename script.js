// ===============================
// CAMBIO DE CATÁLOGO
// ===============================
function changeCatalog(category, button) {
    const tabs = document.querySelectorAll('.catalog-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    button.classList.add('active');

    const categories = document.querySelectorAll('.catalog-category');
    categories.forEach(cat => cat.classList.remove('active'));

    const activeCategory = document.getElementById(category);
    if (activeCategory) {
        activeCategory.classList.add('active');
    }
}

// ===============================
// MOSTRAR / OCULTAR EJEMPLOS
// ===============================
function toggleExamples(type) {

    const isExpanded = type.classList.contains('expanded');

    document.querySelectorAll('.haircut-type').forEach(t => {
        t.classList.remove('expanded');
        t.querySelectorAll('.example').forEach((ex, i) => {
            if (i > 0) ex.classList.add('hidden');
        });
    });

    if (!isExpanded) {
        type.classList.add('expanded');
        type.querySelectorAll('.example').forEach(ex => {
            ex.classList.remove('hidden');
        });
    }
}

// ===============================
// MODAL DE IMÁGENES
// ===============================
function showFullScreen(src) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');

    if (modal && modalImg) {
        modal.style.display = 'flex';
        modalImg.src = src;
    }
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

window.addEventListener('click', function (event) {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// ===============================
// CAMBIO DE ESTILO GLOBAL
// ===============================
function changeGlobalStyle(style, button) {

    const buttons = document.querySelectorAll('.style-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (button) button.classList.add('active');

    document.body.className = style;

    const label = document.getElementById('current-style');
    if (label) {
        label.textContent =
            style.charAt(0).toUpperCase() + style.slice(1);
    }

    // 🔥 OCULTAR SELECTOR AL ELEGIR ESTILO
    const selector = document.getElementById('style-selector');
    if (selector) {
        selector.classList.add('hidden');
    }
}

// ===============================
// MENÚ DE NAVEGACIÓN + LOGO
// ===============================
document.addEventListener('DOMContentLoaded', () => {

    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    const selector = document.getElementById('style-selector');
    const logo = document.querySelector('.nav-logo');

    // MENU MOBILE
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.textContent = menu.classList.contains('active') ? '✖' : '☰';
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                toggle.textContent = '☰';
            });
        });
    }

    // 🔥 MOSTRAR SELECTOR AL CLICK EN LOGO
    if (logo && selector) {
        logo.addEventListener('click', () => {
            selector.classList.remove('hidden');
        });
    }

    // ===============================
    // SMOOTH SCROLL
    // ===============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

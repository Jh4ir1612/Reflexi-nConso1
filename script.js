document.addEventListener('DOMContentLoaded', function() {
    // Efecto de scroll suave para enlaces internos (si existen)
    document.querySelectorAll('a[href^="./reflexion1.html"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación al cargar las secciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.week-section').forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 3s ease, transform 3s ease';
        observer.observe(section);
    });

// 1. CREACIÓN DEL BOTÓN (con más estilos y atributos)
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑ Subir';
    scrollToTopBtn.id = 'scrollToTopBtn';
    
    // Estilos mejorados para el botón
    Object.assign(scrollToTopBtn.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '12px 15px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'none',
        zIndex: '1000',
        fontSize: '16px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
        transition: 'all 0.3s ease'
    });
    
    document.body.appendChild(scrollToTopBtn);
    console.log("Botón creado y añadido al DOM");

    // 2. EVENTO SCROLL (con verificación mejorada)
    window.addEventListener('scroll', function() {
        console.log("Posición de scroll:", window.pageYOffset);
        
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
            console.log("Mostrando botón");
        } else {
            scrollToTopBtn.style.display = 'none';
            console.log("Ocultando botón");
        }
    });

    // 3. EVENTO CLICK (con verificación)
    scrollToTopBtn.addEventListener('click', function() {
        console.log("Botón clickeado - haciendo scroll");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Forzar una verificación inicial
    window.dispatchEvent(new Event('scroll'));
});
    console.log("JavaScript cargado correctamente");

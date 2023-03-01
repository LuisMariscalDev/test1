const botonesComprar = document.querySelectorAll('.boton');
botonesComprar.forEach(boton => {
    boton.addEventListener('click', () => {
        const mensaje = document.createElement('p');
        mensaje.textContent = 'Artículo comprado';
        mensaje.classList.add('mensaje');
        boton.parentNode.appendChild(mensaje);
        setTimeout(() => {
            boton.parentNode.removeChild(mensaje);
        }, 4000);
    });
});

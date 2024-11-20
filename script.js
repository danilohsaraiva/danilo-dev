// Adicionando interatividade para ocultar/mostrar detalhes
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.querySelector('.timeline-content p');
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});

// Busca a refenrência da Âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Rolagem suave
        });
    });
});

window.onscroll = function () {
    // Detecta a rolagem da página
    const header = document.querySelector('.header');

    // Se a rolagem for maior que 100px, aplica a classe 'minimized'
    if (window.pageYOffset > 100) {
        header.classList.add('minimized');
    } else {
        header.classList.remove('minimized');
    }
};
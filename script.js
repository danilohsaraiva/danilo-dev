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

function showText() {
    // Esconde o texto inicial
    document.getElementById("inicial-text").style.display = "none";
    // Mostra o formulário
    document.getElementById("hidden-text").style.display = "block";
}

function showTyText() {
    document.getElementById("hidden-text").style.display = "none";
    document.getElementById("ty-text").style.display = "flex";
}


document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Obtendo os valores dos campos
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("e-mail").value.trim();
    const message = document.getElementById("message").value.trim();

    // Verifica se todos os campos estão preenchidos
    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos antes de enviar!");
        return;
    }

    // Criar os dados a serem enviados
    const formData = {
        name: name,
        "e-mail": email,
        message: message,
        accessKey: "77ef4dfd-8f3d-406d-8b48-c6af9c4d443f"
    };

    // Enviar o formulário via Fetch API (sem redirecionamento)
    fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Erro ao enviar o formulário.");
            }
        })
        .then(data => {
            console.log(data); // Para depuração
            alert("Mensagem enviada com sucesso!");
            showTyText(); // Função para exibir o próximo texto
        })
        .catch(error => {
            console.error("Erro ao enviar o formulário:", error);
            alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
        });
});
// Ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Menu mobile (abre/fecha)
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => menu.classList.toggle("aberto"));

// Botão voltar ao topo
const botaoTopo = document.getElementById("botaoTopo");
window.addEventListener("scroll", () => botaoTopo.classList.toggle("visivel", scrollY > 300));
botaoTopo.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

// Validação do formulário de contato (só existe na página de contato)
const form = document.getElementById("formContato");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
        const retorno = document.getElementById("retornoForm");

        if (nome === "" || !email.includes("@") || mensagem === "") {
            retorno.className = "retorno-form erro";
            retorno.textContent = "Preencha todos os campos corretamente.";
            return;
        }

        retorno.className = "retorno-form sucesso";
        retorno.textContent = `Obrigado, ${nome}! Mensagem enviada com sucesso.`;
        form.reset();
    });
}

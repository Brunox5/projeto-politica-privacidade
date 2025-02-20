document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const politicaModal = document.getElementById("politicaModal")
    ? new bootstrap.Modal(document.getElementById("politicaModal"))
    : null;
  const btnAceitar = document.getElementById("btnAceitar");
  const confirmarLeituraCheckbox = document.getElementById("confirmarLeitura");

  // Verifica se o usuário já aceitou os termos
  function usuarioAceitouTermos(nome) {
    return localStorage.getItem(`termosAceitos_${nome}`) === "true";
  }

  // Função para redirecionamento seguro, evitando loops de recarga
  function redirecionarUsuario() {
    const nomeUsuario = localStorage.getItem("usuarioLogado");

    if (!nomeUsuario && !window.location.pathname.endsWith("index.html")) {
      window.location.href = "index.html";
    } else if (nomeUsuario && window.location.pathname.endsWith("index.html")) {
      window.location.href = "dashboard.html";
    }
  }

  // Verifica o usuário logado ao carregar a página
  redirecionarUsuario();

  // Evento de envio do formulário de login
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const nomeUsuario = document.getElementById("nome").value.trim();

      if (!nomeUsuario) {
        alert("Por favor, insira seu nome.");
        return;
      }

      localStorage.setItem("usuarioLogado", nomeUsuario);

      // Se o usuário não aceitou os termos, exibe o modal
      if (!usuarioAceitouTermos(nomeUsuario) && politicaModal) {
        politicaModal.show();
      } else {
        window.location.href = "dashboard.html";
      }
    });
  }

  // Habilita o botão "Aceitar Termos" apenas quando o checkbox for marcado
  if (confirmarLeituraCheckbox && btnAceitar) {
    confirmarLeituraCheckbox.addEventListener("change", function () {
      btnAceitar.disabled = !this.checked;
    });

    btnAceitar.addEventListener("click", function () {
      const nomeUsuario = localStorage.getItem("usuarioLogado");
      if (nomeUsuario) {
        localStorage.setItem(`termosAceitos_${nomeUsuario}`, "true");
        window.location.href = "dashboard.html";
      }
    });
  }

  // Exibe o nome do usuário na página
  const nomeUsuario = localStorage.getItem("usuarioLogado");
  const usuarioNomeElement = document.getElementById("usuarioNome");
  if (nomeUsuario && usuarioNomeElement) {
    usuarioNomeElement.textContent = nomeUsuario;
  }

  //  botão "Sair"
  const btnSair = document.getElementById("btnSair");
  if (btnSair) {
    btnSair.addEventListener("click", function () {
      localStorage.removeItem("usuarioLogado");
      window.location.href = "index.html";
    });
  }
});

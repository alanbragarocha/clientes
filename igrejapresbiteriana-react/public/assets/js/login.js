document.addEventListener("DOMContentLoaded", function () {
  // Função para alternar visibilidade da senha
  const togglePassword = document.querySelector(".toggle-password");
  const passwordInput = document.querySelector("#password");

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", function () {
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);

      // Alternar ícone
      const icon = this.querySelector("i");
      icon.classList.toggle("fa-eye");
      icon.classList.toggle("fa-eye-slash");
    });
  }

  // Validação do formulário
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Exibir mensagem de carregamento na própria página
      const loginBtn = document.querySelector(".login-btn");
      const originalBtnText = loginBtn.innerHTML;
      const errorMessage = document.querySelector(".login-error");

      // Limpar mensagens de erro anteriores
      if (errorMessage) {
        errorMessage.style.display = "none";
      }

      loginBtn.innerHTML =
        '<i class="fas fa-circle-notch fa-spin"></i> Autenticando...';
      loginBtn.disabled = true;

      // Enviar solicitação para a API de autenticação
      fetch("./admin/api/auth.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
        credentials: "same-origin",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Login bem-sucedido, redirecionar para o painel administrativo
            window.location.href = "./admin/admin.html";
          } else {
            // Exibir mensagem de erro
            if (errorMessage) {
              errorMessage.textContent =
                "Email ou senha incorretos. Tente novamente.";
              errorMessage.style.display = "block";
            } else {
              const formContainer = loginForm.querySelector(".form-options");
              const newErrorMessage = document.createElement("div");
              newErrorMessage.className = "login-error";
              newErrorMessage.textContent =
                "Email ou senha incorretos. Tente novamente.";
              formContainer.before(newErrorMessage);
            }

            // Restaurar botão
            loginBtn.innerHTML = originalBtnText;
            loginBtn.disabled = false;
          }
        })
        .catch((error) => {
          console.error("Erro durante o login:", error);

          // Exibir mensagem de erro genérica
          if (errorMessage) {
            errorMessage.textContent =
              "Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.";
            errorMessage.style.display = "block";
          }

          // Restaurar botão
          loginBtn.innerHTML = originalBtnText;
          loginBtn.disabled = false;

          // Opcional: redirecionar para uma página fictícia de admin
          // window.location.href = 'admin.html';
        }, 1500);
    });
  }
});

// Função para lidar com o menu mobile (reimplementada do script original)
const menuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    this.classList.toggle("active");
  });
}

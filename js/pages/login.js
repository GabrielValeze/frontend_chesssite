import { loadHeader } from "../components/header.js";
import { loadFooter } from "../components/footer.js";

loadHeader();
loadFooter();

const form = document.getElementById('login-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('Preencha e-mail e senha.');
      return;
    }

    // Por enquanto apenas simulamos um login bem-sucedido
    alert('Login recebido: ' + email);
    // Redirecionar para a home ou painel depois do login real
    window.location.href = 'index.html';
  });
}
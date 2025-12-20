export function loadHeader() {
  document.getElementById("header").innerHTML = `
    <header class="header">
      <h2 class="logo">Chess Academy</h2>

      <nav class="nav">
        <a href="index.html">Home</a>
        <a href="tactics-course.html">Cursos</a>
        <a href="login.html" class="btn-login">Entrar</a>
      </nav>
    </header>
  `;
}

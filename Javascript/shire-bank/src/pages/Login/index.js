const container = document.querySelector('#login-container')

function registerDOM() {
  container.innerHTML = `
  <div class="login-content">
    <h3>Abra sua conta agora mesmo</h3>
    <p id="login-content-question">Já possui uma conta? <button onclick='loginDOM()'>Faça login</button></p>
  </div>

  <form action="#" onSubmit="registerUser()">
    <div>
      <label for="name">Nome</label>
      <input type="text" id="name" required>
    </div>

      <div>
        <label for="email">Email</label>
        <input type="email" id="email">
      </div>

      <div>
        <label for="phone">Telefone</label>
        <input type="tel" id="phone">
      </div>

      <div>
        <label for="cpf">CPF</label>
        <input type="number" id="cpf">
      </div>

      <div>
        <label for="password">Senha</label>
        <input type="password" id="password">
      </div>

      <div class="form-checkbox">
        <input type="checkbox" id="term">
        <p>Aceito os <a href="#">termos e as condições.</a></p>
      </div>

    <button>Cadastrar</button>
  </form>
`
}

function loginDOM() {
  container.innerHTML = `
  <div class="login-content">
    <h3>Login</h3>
    <p id="login-content-question">Não possui uma conta? <button onclick="registerDOM()">Registre-se</button></p>
  </div>

  <form action="#">
    <div>
      <label for="email">Email</label>
      <input type="email" id="email">
    </div>

    <div>
      <label for="password">Senha</label>
      <input type="password" id="password">
    </div>

    <button>Entrar</button>
    <a href="#">Esqueceu a senha?</a>
  </form>
  `
}

loginDOM()
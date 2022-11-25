const container = document.querySelector('#login-container')

function register() {
  container.querySelector('h3').textContent = 'Abra sua conta agora mesmo'
  container.querySelector('#login-content-question').innerHTML = "<p id='login-content-question'>Já possui uma conta? <button onclick='login()'>Faça login</button></p>"

  container.querySelector('form').innerHTML = `
  <div>
    <label for="name">Nome</label>
    <input type="text" id="name">
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
    <label for="birthDate">Data de Nascimento</label>
    <input type="number" id="birthDate">
  </div>

  <div class="form-checkbox">
    <input type="checkbox">
    <p>Aceito os <a href="#">termos e as condições.</a></p>
  </div>

  <button>Cadastrar</button>
  `
}

function login() {
  container.querySelector('h3').textContent = 'Login'
  container.querySelector('#login-content-question').innerHTML = "<p id='login-content-question'>Não possui uma conta? <button onclick='register()'>Registre-se</button></p>"

  container.querySelector('form').innerHTML = `
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
  `
}
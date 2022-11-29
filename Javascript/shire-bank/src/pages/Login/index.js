const container = document.querySelector('#login-container')

function showPasswordRequirements() {
  document.querySelector('.login-content-input-password-requirements').classList.remove('hidden')
}

function registerDOM() {
  container.innerHTML = `
  <div class="login-content">
          <h3>Abra sua conta agora mesmo</h3>
          <p id="login-content-question">Já possui uma conta? <button onclick='loginDOM()'>Faça login</button></p>
        </div>
      
        <form action="#" onSubmit="registerValidations(event)">
          <span class="hidden login-content-form-message login-content-form-message-error" >E-mail ou CPF já cadastrado.</span>
          <span class="hidden login-content-form-message login-content-form-message-success" >Conta cadastrada com sucesso, você será redirecionado a página de login em breve.</span>

          <div>
            <label for="name">Nome</label>
            <input type="text" id="name" required>
            <p class="warning" id="nameWarning"></p>
          </div>
      
            <div>
              <label for="email">Email</label>
              <input type="email" id="email" required>
              <p class="warning" id="emailWarning"></p>
            </div>
      
            <div>
              <label for="phone">Telefone</label>
              <input type="tel" id="phone" placeholder="(XX) XXXXX-XXXX" onInput="masks(event)" maxlength="15" required>
              <p class="warning" id="phoneWarning"></p>
            </div>
      
            <div>
              <label for="cpf">CPF</label>
              <input type="text" id="cpf" onInput="masks(event)" required>
              <p class="warning" id="cpfWarning"></p>
            </div>
      
            <div class="login-content-input-password">
              <label for="password">Senha</label>
              <input type="password" id="password" required onfocus="showPasswordRequirements()">
              <p class="warning" id="passwordWarning"></p>
              <div class="login-content-input-password-requirements hidden">
                <span>A senha deve atender os seguintes critérios:</span>
                <div>
                  <span>- No mínimo 8 caracteres</span>
                  <span>- 1 letra maiúscula no mínimo</span>
                  <span>- 1 número no mínimo</span>
                  <span>- 1 caracter especial no mínimo: $*&@#</span>
                </div>
              </div>
            </div>
      
            <div class="form-checkbox">
              <input type="checkbox" id="term" required>
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

  <form action="#" onSubmit="loginValidations(event)">
    <span class="hidden login-content-form-message login-content-form-message-error" ></span>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" required>
      <p class="warning" id="emailWarning"></p>
    </div>

    <div>
      <label for="password">Senha</label>
      <input type="password" id="password" required>
    </div>

    <button>Entrar</button>
    <a href="#">Esqueceu a senha?</a>
  </form>
  `
}

function inputValidations(element, regex, message) {
  if (!regex.test(element.value)) {
    document.querySelector(`#${element.id}Warning`).textContent = message
    return false
  } else {
    document.querySelector(`#${element.id}Warning`).textContent = ''
    return true
  }
}

async function registerValidations(event) {
  event.preventDefault()

  const name = document.querySelector("#name")
  const email = document.querySelector("#email")
  const phone = document.querySelector("#phone")
  const cpf = document.querySelector("#cpf")
  const password = document.querySelector("#password")
  const term = document.querySelector("#term")

  const nameValidation = inputValidations(name, /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/, 'Nome inválido')
  const emailValidation = inputValidations(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email inválido')
  const phoneValidation = inputValidations(phone, /(\(\d{2}\)\s)(\d{5}\-\d{4})/, 'Telefone inválido')
  const cpfValidation = inputValidations(cpf, /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido')
  const passwordValidation = inputValidations(password, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, 'Senha inválida')
  const termValidation = term.checked

  if (nameValidation && emailValidation && phoneValidation && cpfValidation && passwordValidation && termValidation) {
    try {
      const { error } = await registerUser({
        name: name.value,
        email: email.value,
        phone: phone.value.replace(/\D/g,""),
        cpf: cpf.value.replace(/\D/g,""),
        password: password.value,
        acceptance_of_terms: term.checked
      })

      if(error) {
        throw error.message
      } else {
        document.querySelector('.login-content-form-message-success').classList.remove('hidden')
        setTimeout(() => {
          loginDOM()
        }, 3000)
      } 
    } catch (err) {
      document.querySelector('.login-content-form-message-error').classList.remove('hidden')
      throw new Error(err)
    }
  }
}

async function loginValidations(event){
  event.preventDefault()
  const email = document.querySelector("#email")
  const password = document.querySelector("#password")

  const emailValidation = inputValidations(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email inválido')

  if(emailValidation) {
    try {
      const errorMessageElement = document.querySelector('.login-content-form-message-error')
      const { data, error } = await queryUser(email.value)

      if(error) {
        throw error.message
      } else if(data.length < 1){
        errorMessageElement.textContent = 'Usuário não encontrado.'
        errorMessageElement.classList.remove('hidden')
        setTimeout(() => {
          document.querySelector('.login-content-form-message-error').classList.add('hidden')
        }, 3000)
      } else {
        if(data[0].password === password.value){
          localStorage.setItem('userSession', email.value)
          window.location.replace('../Application/Dashboard/index.html')
        } else {
          errorMessageElement.textContent = "Senha incorreta, tente novamente ou clique em 'Esqueceu a senha?'."
          errorMessageElement.classList.remove('hidden')
          setTimeout(() => {
            document.querySelector('.login-content-form-message-error').classList.add('hidden')
          }, 3000)
        }
      } 
    } catch (err) {
      throw new Error(err)
    }
  }
}

loginDOM()
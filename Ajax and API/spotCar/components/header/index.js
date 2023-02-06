document.querySelector('body').insertAdjacentHTML('afterbegin', `
  <header>
    <div class="container">
      <a href="/">
        <img src="../../assets/logo.svg" alt="logo">
      </a>

      <button id="btn-mobile" class="header-btn-mobile" onclick="toogleMenu()">Menu</button>
      <div class="header-navigation">
        <nav class="header-navigation-nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="../../pages/cars/">Carros</a>
            </li>
            <li>
              <a href="#">Clientes</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
          </ul>
        </nav>

        <a href="../../pages/user/" id="header-navigation-user" class="header-navigation-user">
          <button class="header-btn-user">
            <span>User</span>
          </button>
        </a>
      </div>

    </div>
  </header>
`)

function toogleMenu(){
  const nav = document.querySelector('.header-navigation')
  const btnMobile = document.querySelector('#btn-mobile')
  
  nav.classList.toggle('active')
}
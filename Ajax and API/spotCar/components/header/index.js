document.querySelector('body').insertAdjacentHTML('afterbegin', `
  <header>
    <div class="container">
      <a href="/">
        <img src="../../assets/logo.svg" alt="logo">
      </a>

      <div class="header-navigation">
        <nav>
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

        <a href="../../pages/user/">
          <button>
            <span>User</span>
          </button>
        </a>
      </div>

    </div>
  </header>
`)
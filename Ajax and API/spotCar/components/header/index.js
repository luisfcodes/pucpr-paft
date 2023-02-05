document.querySelector('body').insertAdjacentHTML('afterbegin', `
  <header>
    <div class="container">
      <a href="/">
        <img src="../assets/logo.svg" alt="logo">
      </a>

      <div class="header-navigation">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="./pages/cars.html">Carros</a>
            </li>
            <li>
              <a href="#">Clientes</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
          </ul>
        </nav>

        <button>
          <span>User</span>
        </button>
      </div>

    </div>
  </header>
`)
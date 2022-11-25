const header = document.createElement('header')
header.innerHTML = `
<a href="/"><span class="logo">S<span>h</span>ire</span></a>

<nav>
  <ul class="navbar">
    <li><a href="#">Sobre</a></li>
    <li><a href="#">Recursos</a></li>
    <li><a href="#">Negócios</a></li>
    <li><a href="#">Suporte</a></li>
    <li><a href="src/pages/Login/index.html"><button class="button-primary-color header-button">Acessar</button></a></li>
  </ul>
</nav>
`

document.querySelector('main').insertAdjacentElement('beforebegin', header)
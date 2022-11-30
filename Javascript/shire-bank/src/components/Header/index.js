const header = document.createElement('header')
header.innerHTML = `
<a href="/"><span class="logo">S<span>h</span>ire</span></a>

<nav>
  <button class="button-mobile" onclick="handleMenuMobile()">Menu<span class="button-menu-hamburguer"></span></button>
  <ul class="navbar" id="navbar">
    <li><a href="#">Sobre</a></li>
    <li><a href="#">Recursos</a></li>
    <li><a href="#">Negócios</a></li>
    <li><a href="#">Suporte</a></li>
    <li><a href="src/pages/Login/index.html"><button class="button-primary-color header-button">Acessar</button></a></li>
  </ul>
</nav>
`

document.querySelector('main').insertAdjacentElement('beforebegin', header)

function handleMenuMobile(){
  const navbar = document.querySelector('#navbar')
  navbar.classList.toggle('active')
}
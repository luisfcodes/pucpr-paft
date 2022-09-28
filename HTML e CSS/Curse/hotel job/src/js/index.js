const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(){
  const headerNav = document.getElementById('header-nav')
  headerNav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
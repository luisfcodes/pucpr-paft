function Statement() {
  const rootElement = document.querySelector('#root')

  rootElement.innerHTML = `
  <section class="section-container">
  <div class="section-content statement-section">
    <h3>Histórico</h3>
    <div class="statement-search">
      <img src="../../../assets/icon-search.png" alt="">
      <input type="text" class="statement-input" placeholder="Buscar por cliente" oninput="showListStatement(event)">
    </div>

    <div class="statement-cards" id="statement-cards">
    </div>
  </div>
</section>
  `
  showListStatement(event)
}

async function showListStatement(event) {
  document.querySelector('#statement-cards').innerHTML = ''
  const userData = await userCurrent()
  const newList = userData.statement.filter(element => ((element.customer).toLowerCase()).includes((event.target.value).toLowerCase()))

  return newList.forEach(element => {
    document.querySelector('#statement-cards').innerHTML += `
      <div class="statement-card">
        <div class="statement-card-title">
          <span>${element.title}</span>
          <span>${formatDate(element.created_at)}</span>
        </div>
        <span class="statement-card-customer">${element.customer}</span>
        <span class="statement-card-price ${element.category}">${formatCurrency(element.amount)}</span>
      </div>
    `
  })
}
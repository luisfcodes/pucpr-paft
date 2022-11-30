function testHomeComponent(){
  validateUserName()
  validateUserBalance()
  validateUserInvoice()
  validateUserInvoiceLimit()
}

function validateUserName(){
  try {
    if(document.querySelector('#user-name').textContent === "undefined"){
      throw new Error('Usuário não encontrado')
    } else {
      console.log('Teste de usuário passou!!!')
    }
  } catch (err) {
    throw new Error(err)
  }
}

function validateUserBalance(){
  try {
    if(document.querySelector('#user-balance').textContent === "undefined"){
      throw new Error('Saldo do usuário não carregado')
    } else {
      console.log('Teste de saldo bancário passou!!!')
    }
  } catch (err) {
    throw new Error(err)
  }
}

function validateUserInvoice(){
  try {
    if(document.querySelector('#user-invoice').textContent === "undefined"){
      throw new Error('Valor da fatura do usuário não carregado')
    } else {
      console.log('Teste de valor total da fatura passou!!!')
    }
  } catch (err) {
    throw new Error(err)
  }
}

function validateUserInvoiceLimit(){
  try {
    if(document.querySelector('#user-invoiceLimit').textContent === "undefined"){
      throw new Error('Valor do limite da fatura do usuário não carregado')
    } else {
      console.log('Teste de valor total do limite da fatura passou!!!')
    }
  } catch (err) {
    throw new Error(err)
  }
}
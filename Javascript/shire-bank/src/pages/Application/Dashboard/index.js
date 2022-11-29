async function userCurrent() {
  try {
    const user = await localStorage.getItem('userSession')

    if(!user){
      window.location.replace('../../Login/index.html')
      throw new Error('Usuário não está logado.')
    }

    const { data } = await queryUser(user)
    return data[0]
  } catch (err) {
    throw new Error(err)
  }
}

function signOut(){
  localStorage.removeItem('userSession')
}

function formatCurrency(value){
  return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

function formatDate(date){
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
}
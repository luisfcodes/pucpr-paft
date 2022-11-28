const database = supabase.createClient('https://qmwedueyyaghpwxknkrn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtd2VkdWV5eWFnaHB3eGtua3JuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk1ODYzOTgsImV4cCI6MTk4NTE2MjM5OH0.NuUPhKGQzPK8vKMKJPw5f-rqQUTZp7-hdqKFkq2fSBU')

async function registerUser(){
  const name = document.querySelector("#name")
  const email = document.querySelector("#email")
  const phone = document.querySelector("#phone")
  const cpf = document.querySelector("#cpf")
  const password = document.querySelector("#password")
  const term = document.querySelector("#term")

  const regexName = /^[a-zA-Z ]{2,50}$/

  console.log(regexName.test(name.value))

  if(!regexName.test(name.value)){
    name.insertAdjacentHTML('afterend', `<p class="warning" id="warningName">Nome inválido</p>`)
  } else {
    document.querySelector('#warningName').textContent = ''
  }

  // const { data, error } = await database.from("users").insert({
  //   name: 'Fernando Souza',
  //   email: 'fernanda@gmail.com',
  //   phone: '5541998786754',
  //   cpf: '10034849980',
  //   password: '45656789',
  //   acceptance_of_terms: true
  // })

  // console.log(data, error)
}
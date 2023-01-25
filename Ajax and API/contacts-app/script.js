function updateList(res){
  document.querySelector('#contacts_list').innerHTML = ''
    res.forEach(element => {
      document.querySelector('#contacts_list').innerHTML += `
        <div class="contacts-content">
          <div class="name-description"><span>${element.name}</span></div>  <span class="number-description">${element.number}</span>
          <button onclick="showFormUpdate(${element.id})" class="button-icons">
            <img src="./icon/edit-icon.png">
          </button> 
          <button onclick="deleteContact(${element.id})" class="button-icons">
          <img src="./icon/trash-icon.png">
          </button>

          <div style="display: none" id=${element.id}>
            <input type="text" id="${element.id}${element.id}" placeholder="Nome do Contato">
            <input type="tel" id="${element.id}${element.number}" maxlength="11" placeholder="Número do Contato">
            <button onclick="updateContact(${element.id}, ${element.number})">Atualizar</button>
          </div>
        </div>
      `
    });
}

fetch("http://127.0.0.1:5000/contacts").then(res => res.json().then(res => {
  updateList(res)
}))

function addContact(event){
  event.preventDefault()

  const inputNameElement = document.querySelector('#name')
  const inputNumberElement = document.querySelector('#number')

  console.log(inputNameElement.value, inputNumberElement.value)
  
  fetch("http://127.0.0.1:5000/contacts", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        'name': inputNameElement.value,
        'number': inputNumberElement.value
      }
    )
  }).then(res => res.json().then(res => {
    closeModal();
    updateList(res)
  }))

  
}

function deleteContact(id){
  fetch(`http://127.0.0.1:5000/contacts/${id}`, {
    method: 'DELETE'
  }).then(res => res.json().then(res => {
    updateList(res)
  }))
}

function updateContact(id, number){

  fetch(`http://127.0.0.1:5000/contacts/${id}`, {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        'name': document.getElementById(id+''+id).value,
        'number': document.getElementById(id+''+number).value
      }
    )
  }).then(res => res.json().then(res => {
   updateList(res)
  }))
}

function showFormUpdate(id){
  document.getElementById(id).style.display = 'block'
}

function closeModal(){
  document.querySelector('.modal-container').classList.add('hidden')
}

function openModal(){
  document.querySelector('.modal-container').classList.remove('hidden')
}
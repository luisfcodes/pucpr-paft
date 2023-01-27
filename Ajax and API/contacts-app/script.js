function updateList(res) {
  res.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

  document.querySelector('#contacts_list').innerHTML = ''
  res.forEach(element => {
    const numberString = element.number.toString()

    document.querySelector('#contacts_list').innerHTML += `
        <div class="contacts-content">
          <div class="name-description">
            <img src="./images/icons/user-icon.png">
            <span>${element.name}</span>
          </div>
          <span class="number-description">
            (${numberString.substr(0, 2)}) ${numberString.substr(2, 5)} - ${numberString.substr(7, 4)}
          </span>
          <button onclick="showFormUpdateContact(${element.id}, '${element.name}', ${element.number})" class="button-icons">
            <img src="./images/icons/edit-icon.png">
          </button> 
          <button onclick="deleteContact(${element.id})" class="button-icons">
            <img src="./images/icons/trash-icon.png">
          </button>          
        </div>
      `
  });
}

fetch("http://127.0.0.1:5000/contacts").then(res => res.json().then(res => {
  updateList(res)
}))

function addContact(event) {
  event.preventDefault()

  const inputNameElement = document.querySelector('#modal_name')
  const inputNumberElement = document.querySelector('#modal_number')

  fetch("http://127.0.0.1:5000/contacts", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        'name': inputNameElement.value,
        'number': inputNumberElement.value.replace(/\D/g,"")
      }
    )
  }).then(res => res.json().then(res => {
    closeModal();
    updateList(res)
  }))
}

function deleteContact(id) {
  fetch(`http://127.0.0.1:5000/contacts/${id}`, {
    method: 'DELETE'
  }).then(res => res.json().then(res => {
    updateList(res)
  }))
}

function showFormUpdateContact(id, name, number) {
  document.querySelector('.modal-container').classList.remove('modal-hidden')
  document.querySelector('#modal-title').textContent="Atualizar Contato"
  document.querySelector('#modal-confirm-button').textContent="Atualizar Contato"
  document.querySelector('#modal-submit-form').setAttribute('onsubmit',`updateContact(event,${id})`)
  document.getElementById("modal_name").value = name
  document.getElementById("modal_number").value = number
  masks()
}

function showFormAddContact() {
  document.querySelector('.modal-container').classList.remove('modal-hidden')
  document.querySelector('#modal-title').textContent="Adicionar Contato"
  document.querySelector('#modal-confirm-button').textContent="Adicionar Contato"
  document.querySelector('#modal-submit-form').setAttribute('onsubmit',`addContact(event)`)
}

function updateContact(event,id) {
  event.preventDefault();

  fetch(`http://127.0.0.1:5000/contacts/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        'name': document.getElementById("modal_name").value,
        'number': document.getElementById("modal_number").value.replace(/\D/g,"")
      }
    )
  }).then(res => res.json().then(res => {
    closeModal()
    updateList(res)
  }))
}

function closeModal() {
  document.querySelector('#modal_name').value = ''
  document.querySelector('#modal_number').value = ''
  document.querySelector('.modal-container').classList.add('modal-hidden')
}

function masks() {
  const numberElement = document.querySelector(`#modal_number`)

  return numberElement.value = numberElement.value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1')
}
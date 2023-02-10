function addProduct(event){
  event.preventDefault()

  const nameProduct = document.getElementById('name')
  const quantityProduct = document.querySelector('#quantity')
  const unitTypeProduct = document.querySelector('#unit_type')

  if(unitTypeProduct.value !== "0"){
    products.push({
      id: products[products.length - 1].id +1,
      name: nameProduct.value,
      quantity: Number(quantityProduct.value),
      type_unit: unitTypeProduct.value,
    })

    closeModal()
    showProducts(products)
  } else {
    alert('Selecione o tipo de medida!')
  }
}

function removeProduct(id){
  products.forEach((item, index) => {
    if(item.id === id){
      delete products[index]
    }
  })
  showProducts(products)
}

function checkItem(id){
  const checkboxElement = document.querySelector(`#item-checkbox-${id}`).checked
  const nameTaskElement = document.querySelector(`#item-name-${id}`)

  if(checkboxElement){
    nameTaskElement.classList.add('checked')
  } else {
    nameTaskElement.classList.remove('checked')
  }
}

function searchItem(){
  const searchElement = document.querySelector('#search')
  
  const productsFiltered = products.filter(item => item.name.toLowerCase().includes(searchElement.value.toLowerCase()))

  showProducts(productsFiltered)
}
function addProduct(event){
  event.preventDefault()

  const nameProduct = document.getElementById('name')
  const quantityProduct = document.querySelector('#quantity')
  const unitTypeProduct = document.querySelector('#unit_type')

  products.push({
    id: products[products.length - 1].id +1,
    name: nameProduct.value,
    quantity: Number(quantityProduct.value),
    type_unit: unitTypeProduct.value,
  })

  closeModal()
  showProducts()
}

function removeProduct(id){
  products.forEach((item, index) => {
    if(item.id === id){
      delete products[index]
    }
  })
  showProducts()
}
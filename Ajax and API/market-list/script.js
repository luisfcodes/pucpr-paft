function addProduct(event){
  event.preventDefault()

  const nameProduct = document.getElementById('name')
  const quantityProduct = document.querySelector('#quantity')
  const unitTypeProduct = document.querySelector('#unit_type')

  products.push({
    name: nameProduct.value,
    quantity: Number(quantityProduct.value),
    type_unit: unitTypeProduct.value,
  })

  closeModal()
  showProducts()
}
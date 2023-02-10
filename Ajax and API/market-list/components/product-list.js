const productList = document.querySelector('.product-list ul')

function showProducts() {
  productList.innerHTML = ''
  products.forEach(element => {

    productList.innerHTML += `
    <li>
        <div class="list-item-title">
            <input type="checkbox" />
            <span>${element.name}</span>
        </div>
        <div class="list-item-delete">
            <span>${element.quantity} ${element.type_unit}</span>
            <button onclick="removeProduct(${element.id})">
                <img src="./images/trash-icon.png" alt="Ícone de lixeira">
            </button>
        </div>
    </li>
  `
  })
}

showProducts()
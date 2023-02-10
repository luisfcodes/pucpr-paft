const productList = document.querySelector('.product-list ul')

function showProducts(list) {
  productList.innerHTML = ''
  list.forEach(element => {

    productList.innerHTML += `
    <li>
        <div class="list-item-title">
            <input type="checkbox" id="item-checkbox-${element.id}" onclick="checkItem(${element.id})"/>
            <span id="item-name-${element.id}">${element.name}</span>
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

showProducts(products)
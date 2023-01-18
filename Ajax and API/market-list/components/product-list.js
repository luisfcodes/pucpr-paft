const productList = document.querySelector('.product-list ul')

products.forEach(element => {
    
    productList.innerHTML += `
        <li>
            <div class="list-item-title">
                <input type="checkbox" />
                <span>${element.name}</span>
            </div>
            <div class="list-item-delete">
                <span>${element.quantity} ${element.type_unit}</span>
                <button>
                    <img src="./images/trash-icon.svg" alt="Ícone de lixeira">
                </button>
            </div>
        </li>
    `
})
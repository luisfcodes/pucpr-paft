function masks(type) {
  switch (type.target.id) {
    case 'phone':
      return document.querySelector(`#${type.target.id}`).value = type.target.value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')

    case 'cpf':
      return document.querySelector(`#${type.target.id}`).value = type.target.value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')

    case 'amount':
      var element = document.querySelector(`#${type.target.id}`)
      let value = element.value

      value = value + ''
      value = parseInt(value.replace(/[\D]+/g, ''))
      value = value + '';
      value = value.replace(/([0-9]{2})$/g, ",$1");

      if (value.length > 6) {
        value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
      }

      element.value = value;
        if(value == 'NaN') element.value = '';
  }
}
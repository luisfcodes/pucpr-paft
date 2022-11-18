async function loadDataFromGithub(){
  data = await fetch('https://api.github.com/users/luisfcodes')
        .then(data => data.json())
        .then(response => response)
  return data
}

async function handleData(){
  data = await loadDataFromGithub()
  
  document.getElementById('name').textContent = data.name
  document.getElementById('bio').textContent = data.bio
}

handleData()
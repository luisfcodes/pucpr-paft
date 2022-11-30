const database = supabase.createClient('https://qmwedueyyaghpwxknkrn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtd2VkdWV5eWFnaHB3eGtua3JuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk1ODYzOTgsImV4cCI6MTk4NTE2MjM5OH0.NuUPhKGQzPK8vKMKJPw5f-rqQUTZp7-hdqKFkq2fSBU')

async function registerUser(obj){
  const { data, error } = await database
    .from("users").insert({
      name: obj.name,
      email: obj.email,
      phone: obj.phone,
      cpf: obj.cpf,
      password: obj.password,
      acceptance_of_terms: obj.acceptance_of_terms,
      balance: 1588,
      invoice: 500,
      invoice_limit: 2500,
      statement: [
        {
          created_at: new Date(),
          category: 'expense',
          title: 'Compra no débito',
          customer: 'Supermercado Londres',
          amount: 322.01
        },
        {
          created_at: new Date(),
          category: 'income',
          title: 'Transferência recebida',
          customer: 'Luis Fernando da Silva',
          amount: 150
        },
        {
          created_at: new Date(),
          category: 'expense',
          title: 'Transferência enviada',
          customer: 'Ronaldo Pereira dos Santos',
          amount: 39.99
        },
        {
          created_at: new Date(),
          category: 'income',
          title: 'Transferência recebida',
          customer: 'MultiTec LTDA',
          amount: 1800
        },
        {
          created_at: new Date(),
          category: 'expense',
          title: 'Compra no crédito',
          customer: 'Kurth eletrônicos LTDA',
          amount: 500
        },
      ]
  })

  return {
    data,
    error
  }
}

async function queryUser(email){
  const { data, error } = await database
  .from('users')
  .select()
  .eq('email', email)

  return {
    data,
    error
  }
}

async function queryUserCPF(cpf){
  const { data, error } = await database
  .from('users')
  .select()
  .eq('cpf', cpf)

  return {
    data,
    error
  }
}

async function updateUserAmount(cpf, newBalance,  amount, date,  category, title, customer){
  const { data } = await database
  .from('users')
  .select()
  .eq('cpf', cpf)

  const { error } = await database
  .from('users')
  .update({ 
    balance: newBalance,
    statement: [
      ...data[0].statement, {
        created_at: date,
        category: category,
        title: title,
        customer: customer,
        amount: amount
      }
    ]
  })
  .eq('cpf', cpf)

  return {
    error
  }
}
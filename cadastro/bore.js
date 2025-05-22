const estadoSelect = document.getElementById('estado')
  const cidadeSelect = document.getElementById('cidade')


  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then(res => res.json())
    .then(estados => {
      estados.forEach(estado => {
        const option = document.createElement('option')
        option.value = estado.id
        option.textContent = estado.nome
        estadoSelect.appendChild(option)
      })
    })

 
  estadoSelect.addEventListener('change', () => {
    const estadoId = estadoSelect.value
    cidadeSelect.innerHTML = '<option>Carregando...</option>'

    if (!estadoId) {
      cidadeSelect.innerHTML = '<option value="">Selecione um estado primeiro</option>'
      return
    }
     
    
  })
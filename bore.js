'use strict'

document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault()

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const senhaRecuperacao = document.getElementById('palavra_chave').value
    const estado = document.getElementById('estado').value
    const cep = document.getElementById('cep').value
    const dataNascimento = document.getElementById('data_nascimento').value
    const cpf = document.getElementById('cpf').value

    try {
       

                                        //https://projeto-queropets-2025-1.onrender.com/v1/controle-pet/usuario
        const userResponse = await fetch('http://localhost:8080/v1/controle-pet/usuario', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nome: nome,
                email: email,
                senha: senha,
                palavra_chave: senhaRecuperacao,
                data_nascimento: dataNascimento,
                cpf: cpf,
                id_endereco: 2
            })
        })

        if (userResponse.ok) {
            alert('Usuário cadastrado com sucesso!')
            window.location.href = './index.html'
        } else {
            const errorData = await userResponse.json()
            console.error(errorData)
            alert('Erro ao cadastrar usuário.')
        }

    } catch (error) {
        console.error(error)
        alert('Erro no processo de cadastro.')
    }
})

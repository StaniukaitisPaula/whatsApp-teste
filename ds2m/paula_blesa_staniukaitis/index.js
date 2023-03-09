'use strict'

import { contatos } from "./contatos.js"

const criarCard = (contato) => {
    const card = document.createElement('button')
    card.classList.add('block')

    const img = document.createElement('img')
    img.classList.add('card_image')
    img.src = `./img/${contato.image}`

    const sender = document.createElement('h2')
    sender.classList.add('sender')
    sender.textContent = contato.name

    const descricao = document.createElement('p')
    descricao.classList.add('description')
    descricao.textContent = contato.description

    card.append(img, sender, descricao)

    return card

}
const carregarContatos = () => {
    const chatList = document.getElementById('chatList')
    const cards = contatos.map(criarCard)

    chatList.replaceChildren(...cards)


    cards.forEach(contato => {

        contato.onclick = () => {

            function puxarContato() {
                document.getElementById('main').style.display = "grid";


                const mainHeader = document.createElement('div')
                mainHeader.classList.add('main__header')


                const img = document.createElement('img')
                img.classList.add('card_image')
                img.src = `./img/${contato.image}`

                const sender = document.createElement('h2')
                sender.classList.add('sender')
                sender.textContent = contato.name

                const descricao = document.createElement('p')
                descricao.classList.add('description')
                descricao.textContent = contato.description


            }

            puxarContato()

        }



    });
}

carregarContatos()
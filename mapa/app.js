'use strict'
import { pesquisaEstado } from "./api.js"
//pegando o mapa
//const mapa = document.querySelector('svg')
//pegando pelo id
const mapa = document.querySelector('#mapa')
const sigla = document.querySelector('#sigla')

//console.log(mapa)


// const getEstados = (event) => {
//     // console.log('clicou estado')

//     // console.log(event)

//     //quero onde fou clicado
//     //alvo -> target
//     console.log(event.target)


// }

//desestruturacao para pegar apens o target
//pegar o svg todo
const getEstados = ({ target }) => {

    const estado = target.id.replace('BR-', '') // => pega o br e substritui por vázio
        //para pegar o title o atributo
    sigla.innerHTML = estado

    console.log(estado)

}
mapa.addEventListener('click', getEstados)

const dadosEstados = async({ target }) => {
    const estado = target.id
    const dadosEstado = await pesquisaEstado(estado)
    console.log(dadosEstado.descricao)

}
mapa.addEventListener('click', dadosEstados)
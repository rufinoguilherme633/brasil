'use strict'

export const pesquisaEstado = async(estado) => {
    const url = `http://localhost:8080//estado/cidade/${estado}/`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    return {
        uf: data.uf,
        nome: data.descricao,
    }

}
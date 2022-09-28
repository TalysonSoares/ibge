fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then( (resposta) => resposta.json() )
    .then( (regioes) => {
        regioes.forEach( (cadaRegiao) => {
            document.getElementById('regiao').innerHTML += `
                <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>
            `;
            
        })
    })

function escolherRegiao() {
        let estadoSelecionado = regiao.value;
fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${estadoSelecionado}/estados`)
    .then( (resposta) => resposta.json() )
    .then( (estados) => {
        estado.innerHTML = `<option> -- Selecione -- </option>`
        estados.forEach( (cadaEstado) => {
            document.getElementById('estado').innerHTML += `
                <option value="${cadaEstado.id}">${cadaEstado.nome}</option>
            `;
        })
    })
}

function escolherEstado() {
    let cidadeSelecionada = estado.value;
fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${cidadeSelecionada}/municipios`)
    .then( (resposta) => resposta.json() )
    .then( (cidades) => {
        cidade.innerHTML = `<option> -- Selecione -- </option>`
        cidades.forEach( (cadaCidade) => {
            document.getElementById('cidade').innerHTML += `
                <option value="${cadaCidade.id}">${cadaCidade.nome}</option>
            `;
        })
    })
}

function escolherCidade() {
    let subSelecionado = cidade.value;
fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${subSelecionado}/subdistritos`)
    .then( (resposta) => resposta.json() )
    .then( (subdistritos) => {
        subdistritos.forEach( (cadaSub) => {
            document.getElementById('sub').innerHTML += `
                <option>${cadaSub.nome}</option>    
            `;
        })
    })    
}
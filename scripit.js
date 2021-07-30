
let button = document.getElementById("button")
let selecao = document.getElementById("selectMoedas")





async function clickdobutton(){
    let moedasatt = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
        return resposta.json()
    })
    let dólar = moedasatt.USDBRL.high 
    let euro = moedasatt.EURBRL.high






    let inputReal = Number(document.getElementById("input").value)
    let inputdolar = document.getElementById("moedaDolar")
    let inputvalorreal = document.getElementById("inputReal")

    if (selecao.value === "US$ Dólar Americano"){
    let valordolar = inputReal / dólar 
    inputdolar.innerHTML = valordolar.toLocaleString('en-US',{style: 'currency', currency: 'USD'})
}

if (selecao.value === "€ Euro"){
 let valoreuro = inputReal / euro
 inputdolar.innerHTML = valoreuro.toLocaleString("de-DE", {style: "currency", currency: "EUR"})
}

inputvalorreal.innerHTML = inputReal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    





}

function trocademoeda(){
    let textosMoeda = document.getElementById("textoMoeda")
    let bandeiras = document.getElementById("bandeiras-moedas")
    if (selecao.value === "US$ Dólar Americano"){
        textosMoeda.innerHTML = "Dólar Americano"
        bandeiras.src = "./imagens/usa.png"
    }
    
    if (selecao.value === "€ Euro"){
    textosMoeda.innerHTML = "Euro"
    bandeiras.src = "./imagens/unia0.png"
    }
    clickdobutton()
}


button.addEventListener("click",clickdobutton)
selecao.addEventListener("change", trocademoeda)



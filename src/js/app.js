'use strict'
let main = document.querySelector('.main');


document.addEventListener('DOMContentLoaded', function(){
    fetchBanderas();
})


let fetchBanderas = async() => {
    try {
        const res = await fetch('https://restcountries.eu/rest/v2/all'); 
        const data = await res.json();
        forBanderas(data);
        buscadorPais(data);
        buscadorDetalles(data);
    } catch (error) {
        console.log(error);
    };
};


//se pasa un parametro porque al hacer el for le pasamos un (data) al innerHTML. aqui se recorre para mostrar todos los paises.
//index es el length y el item es el data(el json)
let forBanderas = (data) => {
    for(let [index, item] of data.entries()){
        let pais = item;
        if(index <= 7){
            main.innerHTML += `
        <a href="src/html/detalles.html?name=${pais.name}" class="content-paises">
            <div class="paises">
                <img src="${pais.flag}" alt="" srcset="">
            </div>
            <div class="info-paises">
                <h3>Name: ${pais.name}</h3>
                <h4>Population: ${pais.population}</h4>
                <h4>Region: ${pais.region}</h4>
                <h4>Capital: ${pais.capital}</h4>
            </div>
        </a>
        `;
        };
    };
};



 

//aprendimos
//try catch = res y luego data. el data se pone el res.json() y no es json nada mas.
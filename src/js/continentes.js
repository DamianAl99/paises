'use strict'
let continentes = document.querySelectorAll('#op');
//son los options del html

//esta funcion es para pintar todos los paises del continente, pero no la usamos todavia
let forBanderasContinentes = (data) => {
    for(let [index, item] of data.entries()){
        let pais = item;
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


//recorremos los options del html para que cuando se le de click a uno de ellos muestre su value correspondiente y ese value le pasamos a la url de la api.
for(let i = 0; i <= continentes.length; i++){
    continentes[i].addEventListener('click', () => {
        console.log(continentes[i].value);
        let fetchContinentes = async() => {
            try {
                const res = await fetch(`https://restcountries.eu/rest/v2/region/${continentes[i].value}`); 
                const data = await res.json();
                main.innerHTML = '';
                forBanderasContinentes(data);
            } catch (error) {
                console.log(error);
            };
        };
        fetchContinentes();
    });
};





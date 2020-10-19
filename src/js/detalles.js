let params = new URLSearchParams(window.location.search);
let paramsGet = params.get('name');
console.log(paramsGet);
let mainDetalle = document.querySelector('.mainDetalle');

buscadorDetalles = async() => {
    try {
        let res = await fetch(`https://restcountries.eu/rest/v2/name/${paramsGet}`);
        let data = await res.json();
        console.log(data[0]);
        mainDetalle.innerHTML = `
        <div class="content-paises">
            <div class="paises">
                <img src="${data[0].flag}" alt="" srcset="">
            </div>
            <div class="info-paises">
                <h3>Name: ${data[0].name}</h3>
                <h4>Population: ${data[0].population}</h4>
                <h4>Region: ${data[0].region}</h4>
                <h4>Capital: ${data[0].capital}</h4>
            </div>
        </div>
        `;
    } catch (error) {
        console.log(error);
    }
}
buscadorDetalles();
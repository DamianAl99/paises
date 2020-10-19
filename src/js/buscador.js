'use strict'
let btn = document.querySelector('#inputBtn');
let input = document.querySelector('#inputBuscador');

let buscadorPais = (data) => {
    //data se trae de la url, y viene completo el array
    input.addEventListener('keyup', () => {
        let inputValue = input.value.toLowerCase();
        //el filter lo que hace es necesitar solo un valor para poder filtrar los datos que tiene
        let filtroPais = data.filter(item => {
                                        let nombrePaisApi = item.name.toLowerCase();
                                        if(nombrePaisApi.indexOf(inputValue) !== -1){
                                            main.innerHTML = '';
                                            return item;
                                            //se hace un return ya que alli estan los items(datos) filtrados
                                        }
        });
        console.log(filtroPais);
        forBanderas(filtroPais);
        //se le pasa a la funcion de banderas los datos filtrados para que pinte en pantalla
    });

    //es otro metodo pero se le tiene que llamar si o si a la api
    /*if(input.value !== '' || input.value.trim()){
        try {
            //para traer los paises que se buscan
            const res = await fetch(`https://restcountries.eu/rest/v2/name/${input.value}`); 
            const data = await res.json();
            let value = input.value;
            if(value.indexOf(data)){
                main.innerHTML = '';
                forBanderas(data);
            }
        } catch (error) {
            //para que si hay un error solo muestre todos los paises
            main.innerHTML = '';
            fetchBanderas();
        };
    }*/
};
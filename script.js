const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f4abc71672mshd5ab87ed849e3d9p107390jsnf061c99ade4a',
        'X-RapidAPI-Host': 'sneaker-database-stockx.p.rapidapi.com'
    }
};

// Otra forma de conectarse a la api, pero muestra los datos de forma distinta
// fetch("https://sneaker-database-stockx.p.rapidapi.com/mostpopular?limit=10", options)
//     .then(res => res.json())
//     .then(Response => {
//         console.log(Response);
//     })

const obtenerZapatillas = async () => {
    try {
        const response = await fetch("https://sneaker-database-stockx.p.rapidapi.com/mostpopular?limit=10", options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`El error es: ${error}`);
    }
}

const crearTarjetas = (zapatillas) => {
    
    let zapatillaRow = document.getElementById("zapatillaRow");
    
    zapatillas.map( (zapatilla) => {

        const {thumbnail, shoeName, brand } = zapatilla;

        const divRow = document.createElement("div");
        divRow.classList.add("col-xl-3");
        divRow.classList.add("col-lg-3");
        divRow.classList.add("col-md-3");
        divRow.classList.add("col-sm-12");
        divRow.classList.add("col-xs-12");
        divRow.classList.add("mt-2");
        divRow.classList.add("mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = thumbnail;
        img.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const titulo = document.createElement("h5");
        titulo.classList.add("card.title");
        titulo.textContent = shoeName;

        const subTitulo = document.createElement("p");
        subTitulo.classList.add("card-text");
        subTitulo.textContent = brand;

        const btnMostrar = document.createElement("button");
        btnMostrar.classList.add("btn");
        btnMostrar.classList.add("btn-danger");
        btnMostrar.textContent = "ver detalles";

        divRow.appendChild(card);

        card.appendChild(img);
        card.appendChild(divBody);

        divBody.appendChild(titulo);
        divBody.appendChild(subTitulo);
        divBody.appendChild(btnMostrar);

        zapatillaRow.appendChild(divRow);
    })

}

obtenerZapatillas()
    .then((zapatillas) => {
        crearTarjetas(zapatillas);
    })
    .catch((error) => {
        console.log(error);
    })
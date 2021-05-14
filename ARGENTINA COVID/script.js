
//OBTENGO ARRAY DE TODAS LAS PROVINCIAS
const mapaArgentina=document.querySelector("svg");

mapaArgentina.addEventListener("click",function(e){
    const provSelec= e;
    const idProvSelec= provSelec.path[0].id;

    const datosProvincia= arrayProvincias.filter(x=> x.id == idProvSelec);

    cambiarDatos(datosProvincia);

    mostrarCuadro();






    //console.log(nombreProvincia);
});

function cambiarDatos(prov) {
    const provinciaNombre= document.querySelector(".info-title");
    
    //provinciaNombre.innerHTML = prov[0].nombre;





    console.log(prov[0].nombre);
};


function mostrarCuadro() {
    const cuadroInfo= document.querySelector(".info");
    cuadroInfo.style.display = 'inline-block';

    cuadroInfo.classList.toggle("ocultar");
    
}







const arrayProvincias = [
    {id:"AR-B", nombre:"Buenos Aires", casosTotales:26000, casosHoy: 4500, muertesTotales: 3200, muertosHoy:87, vacunados:250},
    {id:"AR-X", nombre:"Cordoba"},
    {id:"", nombre:""},
];















const btnClose= document.querySelector("#info-close");

btnClose.addEventListener("click", () =>{
    const cuadroInfo= document.querySelector(".info");

    cuadroInfo.classList.toggle("ocultar");
});






//obtener posicion mouse
    // x=e.clientX;
    // y=e.clientY;
    // cursor="La posicion del mouse es : " + x + " and " + y ;
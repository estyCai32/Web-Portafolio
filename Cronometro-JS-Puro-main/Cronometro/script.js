let min=document.querySelector("#min");
let seg=document.querySelector("#seg");
let mili=document.querySelector("#miliseg");

let vueltasDiv=document.querySelector("#list");

let btnPlay=document.querySelector(".btn-play");


let intervalMili;
let intervalSeg;
let intervalMin;

btnPlay.addEventListener("click",()=>{    
    intervalMili=setInterval(contarMiliSegundos,10);
    intervalSeg=setInterval(contarSeg,1000);
    intervalMin=setInterval(contarMin,60000);
});


//BOTON PLAY
let segundos=0;
let minutos=0;
let milisegundos=0;

function contarMiliSegundos(){   
    milisegundos++;
    mili.innerHTML = milisegundos;

    if (milisegundos == 99) {
        milisegundos=0;
    }
    
}

function contarSeg() {
    if(segundos == 59){
        segundos=0;
    }else{
        segundos++;
    }
    seg.innerHTML = segundos; 
}  

function contarMin() {
    minutos++;
    min.innerHTML= minutos;
}

//BOTON PAUSE
let btnPause=document.querySelector(".btn-pause");

btnPause.addEventListener("click",()=>{
    clearInterval(intervalMili);
    clearInterval(intervalSeg);
    clearInterval(intervalMin);
});

//BOTON STOP
let btnStop=document.querySelector(".btn-stop");

btnStop.addEventListener("click",()=>{

    clearInterval(intervalMili);
    clearInterval(intervalSeg);
    clearInterval(intervalMin);

   segundos=00;
   minutos=00;
   milisegundos=00;
   

   mili.innerHTML = milisegundos + "0";
   seg.innerHTML = segundos + "0";
   min.innerHTML= minutos + "0";

   vueltasDiv.innerHTML = "";
});

//BOTON VUELTAS

btnVuelta=document.querySelector(".btn-lap");
let vuelta=0;

btnVuelta.addEventListener("click", ()=>{
    const li=document.createElement("li");

    const divNumVuelta=document.createElement("div");
    divNumVuelta.className = "num-vuelta";
    divNumVuelta.innerHTML= `${vuelta}`;
    vuelta++;

    const divTiempo=document.createElement("div");
    divTiempo.className="tiempo";
    divTiempo.innerHTML= `${minutos}:${segundos}:${milisegundos}`;


    li.appendChild(divNumVuelta);
    li.appendChild(divTiempo);

    document.querySelector("#list").appendChild(li);

    


});
const btnCV = document.querySelector("#cv");

btnCV.addEventListener("click", () => {
    window.open("recursos/curriculum3.0.pdf");
});


// --------CARROUSEL RESPONSIVE--------------
window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
     

    });
});



// MENU NAV BAR EFECTO

    const menu= document.querySelector(".fa-bars");

    menu.addEventListener('click', () =>{
        document.querySelector(".clip-menu").classList.toggle('active');


    });


    
    const close= document.querySelector(".fa-times");

    close.addEventListener('click', () =>{
        document.querySelector(".clip-menu").classList.toggle('active');

    });

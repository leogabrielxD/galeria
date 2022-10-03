$(document).ready(main);

var contador = 1;

function main() {
    $(".menu-bar").click(function () {
        if (contador == 1) {
            $("nav").animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $("nav").animate({
                left: '-100%'
            });
        }
    });
}

function cerrarmenu() {
    contador = 1;
    $("nav").animate({
        left:'-100%'
    });
}
// MOSTRAMOS Y OCULTAMOS SUBMENUS

$(".sub-menu").click(function () {
    $(this).children(".menu-hijo").slideToggle();
});

$(".menu-hijo").click(function (p) {
    p.stopPropagation();
})

// Cambiar icono de h3

$("h3").click(function(){
    $(this).children("span").toggleClass("icon-up-open-1"); 
 });

 // boton de ir arriba 

 $(document).ready(function(){
    $(".ir-arriba").click(function(){
        $("body, html").animate({
            scrollTop: "0px"
        }, 500);
    });
    
    $(window).scroll(function(){
        if( $(this).scrollTop() > 0){
                $(".ir-arriba").slideDown(300);
           } else {
                $(".ir-arriba").slideUp(300);
           }
    });
    
});

// Ocultar estantes


$(".bodega h3").click(function() {
    $(this).siblings(".estante").slideToggle("fast");
});

//imagenes grandes

$(".estante img").click(function(){
    $(this).toggleClass("img-grande");
});



// Titulos 
$("img").hover(function(){
    var nombre = $(this).attr("src");
    var genero = $(this).attr("alt");
    var pc = nombre.slice(10,-4);
    var nswitch = nombre.slice(14,-4);
    var psx = nombre.slice(11,-4);
    var ps2 = nombre.slice(11,-4);
    var ps3 = nombre.slice(11, -4);
    var psp = nombre.slice(11,-4);
    var gamecube = nombre.slice(16,-4);
    var wii = nombre.slice(11, -4);
    var wiiu = nombre.slice(12, -4);
    var threeds = nombre.slice(11,-4);
    
    $(".switch img").attr("title", nswitch + " - " + genero);
    $(".pc img").attr("title", pc + " - " + genero);
    $(".psx img").attr("title", psx + " - " + genero);
    $(".ps3 img").attr("title", ps3 + " - " + genero);
    $(".ps2 img").attr("title", ps2 + " - " + genero);
    $(".psp img").attr("title", psp + " - " + genero);
    $(".gamecube img").attr("title", gamecube + " - " + genero);
    $(".wii img").attr("title", wii + " - " + genero);
    $(".wiiu img").attr("title", wiiu + " - " + genero);
    $(".3ds img").attr("title", threeds + " - " + genero);

    
});

// colores de borde




window.onload = function(){
    var terminado = document.querySelectorAll(".terminado");
    var colores = ['#808080', '#9c9c9c', '#c9c9c9', '#fff', '#c9c9c9', '#9c9c9c'];
    var t = setInterval(rgb, 150);

    function rgb(){ 
        var color = colores.shift();
        colores.push(color);
        
        for (var lista = 0; lista < terminado.length; lista++){
            terminado[lista].style.borderColor = color;
        }
    }
}



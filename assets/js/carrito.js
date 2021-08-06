(function(){

    //selecciono principalmente el carrito info que es el div que contiene el icono
    const carrito_info = document.getElementById("carrito-info");
    //Al hacer clic en el div del carrito se agrega la clase mostrar-carrito
    //esta clase de mostrar carrito hace refenrencia al contenedor que lleva por dentro los articulos y demas añadidos
    const carrito = document.getElementById("carrito");

    //al dar clic se activa el evento que muestra y oculta nuestro carrito
    carrito_info.addEventListener("click",function(){
        carrito.classList.toggle("mostrar-carrito");
    })

})();


//funcion para iniciar en el DOM es decir si no se ha cargado ejecuta la funcion.

if(document.readyState="loading"){
    document.addEventListener("DOMContentLoaded",ready);
}
else{
    ready();
}

//creacion de la funcion READY que se va a ejecutar.

function ready(){
    //añadimos los botones para que al dar clic.
    let añadirCarritoBotones = document.getElementsByClassName('añadir-carrito');
    //para todos los botones
    for(let i =0 ; i<añadirCarritoBotones.length;i++){
        //añado una variable que contenga todos los botones.
        let boton = añadirCarritoBotones[i];
        boton.addEventListener("click",function(){

        })
    }
}
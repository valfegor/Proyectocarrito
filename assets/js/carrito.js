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
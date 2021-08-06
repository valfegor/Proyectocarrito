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
        //se pasa la funcion para añadir los items al carrito
        boton.addEventListener("click",añadirItems)
    }

    //funcion para cuando demos clic al boton de comprar
    //se pasa el 0 por que es solamente 1 elemento es decir solo tenemos 1 boton
    document.getElementsByClassName("btn-purchase")[0].addEventListener('click',comprar);
}

//Esta funcion es ejecutada cuando el usuario da clic a los botones de comprar
function añadirItems(e){
    //creo la variable boton que va a contener la informacion de donde hagamos clic
    let button = e.target;
    //esto me lleva directamente al div padre donde se puede sacar toda la informacion
    let producto = button.parentElement.parentElement;
    console.log(producto);


}

function comprar(){

}
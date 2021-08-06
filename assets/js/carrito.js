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
    //en esta parte se pasa el producto se puede utilizar el get element by class name
    //importante para recordar el getElementsByClassName devuelve un array.
    //se utilizo el e.target por que hace referencia al boton al cual el usuario hace clic en ese momento
    //al obtener el parente element es decir el elemento padre en este caso es el contenedor principal.
    //al ser el contenedor principal se puede acceder a las clases que lo contiene,
    //como esta clase esta dentro del contenedor se le pasa el [0] por que? por que el contenedor solo tiene esta clase
    //es decir independientemente de todas las clases que existen dentro de la pagina ese contenedor solo tiene esa clase no tiene mas
    //por lo tanto es correcto usarlo de esta manera
    let titulo = producto.getElementsByClassName("producto_titulo")[0].innerText;
    let precio = producto.getElementsByClassName("producto_precio")[0].innerText;
    //recordando tambien podemos obtener la imagen.
    let img = producto.getElementsByClassName("producto_imagen")[0].src;

    console.log(titulo,precio,img);

    añadirItemCarrito(titulo,precio,img);


}

function añadirItemCarrito(titulo,precio,img){

    //aqui vamos a empezar a diagramar los datos que obtenemos los divs.
    //de esta manera estamos creando un div , mismo que vamos a insertar
    let carritoRow = document.createElement("div");
    //le añadimos la clase de carrito-row
    carritoRow.classList.add("carrito-row");
    //obtenemos el div que tiene la clase carrito-items
    //recordar que este div de carrito items esta vacio.
    let carritoItems = document.getElementsByClassName("carrito-items")[0];
    //obtenemos el div en donde iran a pintarse nuestros items
    let carritoTitulos = document.getElementsByClassName("carrito-total-titulo");
    

}

function comprar(){

}
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

    removercarritoitems()
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

    r
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

    actualizarCarriTotal();

    //aqui colocamos la funcion que creamos de actualizar carrito ya que al dar clic al boton de comprar se ejecuta automaticamente.




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
    let carritoTitulos = carritoItems.getElementsByClassName("carrito-total-titulo");

    console.log(carritoTitulos);
    //realizamos un bucle for.

    for(var i = 0 ; i< carritoTitulos.length ; i++){
        
        if(carritoTitulos[i].innerText == titulo){
            alert("Ese producto ya fue añadido");
        }
    }

    console.log(img);
    
    //añadimos lo que vamos a pintar dentro de nuestro div.

    var carritoRowContenedor = `
    <div class="carrito-item carrito-column">
    <img class="carrito-item-image" src="${img}>
    <span class="carrito-item-titulo">${titulo}</span>
    </div>
    <span class="carrito-precio carrito-column">${precio}</span>
    <div class="carrito-cantidad" carrito-column">
    <input class="carrito-cantidad-input" type="number" value="1">
    <button class="btn btn-danger" type="button">Elminar</button>
    </div>
    `

//al carrito row que es el div que nosotros mismos creamos en la parte superior le vamos a pintar nuestro contenido html.
carritoRow.innerHTML=carritoRowContenedor;

//luego de eso a carrito items que es el div el fondo azul le vamos a adicionar nuestro div ya con toda la informacion
carritoItems.append(carritoRow);

//recordar que cuando pintamos en la pantalla tenemos un elemento que se llama el btn y cuando de clic ejecuta la funcion para eliminar
carritoRow.getElementsByClassName("btn-danger")[0].addEventListener('click', removercarritoitems);

//asi mismo obtenemos el input que tiene la cantidad
carritoRow.getElementsByClassName("carrito-cantidad-input")[0].addEventListener('click',cambiarCantidad);



}

function comprar(){

}

//funcion elminar los items
function removercarritoitems(){
    //creamos una vairable buscando el boton
    //esta clase contiene todos los botones que se creen del div
    var eliminarItems = document.getElementsByClassName("btn-danger");

    //como es un html collection es decir un array de elementos procedo
    //para cada uno dar un clic
    for(var i = 0; i < eliminarItems.length; i++){
        var button = eliminarItems[i];
        //creamos el event listenes.

        button.addEventListener('click',removerCarritoitem);
    }
}

//esta es la funcion que vamos a utilizar para eliminar los items del carrito
//le pasamos el parametro event pues haremos uso de el
function removerCarritoitem(event){
    var botonclicleado = event.target;
    //eliminamos el div que lo contiene.
    //es decir el div que nosotros creamos mas arriba carrito row
    //este mismo boton al darle clic me lleva al elemento padre,
    //recordar que este mismo elemento fue creado con html desde una variable
    console.log(botonclicleado.parentElement.parentElement);
    botonclicleado.parentElement.parentElement.remove();
    console.log(botonclicleado);
}

//esta funcion se ejecuta tan pronto se elimina totalmente el div padre
function cambiarCantidad(event){

    //al boton que yo le de clic va a ejecutar lo siguiente
    var input = event.target;

    console.log(input);
    //aqui decimos si el valor del input no es un numero o el valor del inputo es < a 0
    if(isNaN(input.value) || input.value<=0){
        //Esto quiere decir si es negativo o es una letra su valor pasa a ser de 1
        input.value = 1;
    }

    //pasamos la funcion
    actualizarCarriTotal()
}

//funcion que nos va a actualizar los precios
function actualizarCarriTotal(){
    //le pasamos un 0 por que solamente existe un elemento padre el es decir un contenedor
    //es decir cuando agregamos un producto a nuestro carrito , este se va a ubicar dentro del contenedor cart-items que esta vacio
    var carritoItemContenedor = document.getElementsByClassName("carrito-items")[0];

    //Aqui en esta parte lo que obtenemos es carrito row
    //cuando damos clic en comprar automaticamente se genera un div que nosotros creamos y se insertan automaticamente la foto el precio y el nombre

    /*
     <div class="carrito-item carrito-column">
    <img class="carrito-item-image" src="${img}>
    <span class="carrito-item-titulo">${titulo}</span>
    </div>
    <span class="carrito-precio carrito-column">${precio}</span>
    <div class="carrito-cantidad" carrito-column">
    <input class="carrito-cantidad-input" type="number" value="1">
    <button class="btn btn-danger" type="button">Elminar</button>
    </div>
    */

    var carritoRows =carritoItemContenedor.getElementsByClassName("carrito-row");

    //nuestro total inicializa en 0
    var total = 0;


    for(var i = 0 ; i < carritoRows.length ; i++){
        //añado un for para cada elemento del carritoRow
        //es decir cada clase que tenga carrito-row
        var carritoRow = carritoRows[i];

        //obtengo el precio.

        //obtengo la clase carrito precio aqui se lista el precio
        //solo hay un precio , recordando que el total se muestra en este div y solo existe uno no varios totales
        var precioProducto = carritoRow.getElementsByClassName("carrito-precio")[0];

        //obtenemos el input de la cantidad
        var cantidadProducto = carritoRow.getElementsByClassName("carrito-cantidad-input")[0];

        //el precio resumiendo es lo que tiene y reemplazamos por le signo dolar
        var precio = parseFloat(precioProducto.textContent.replace("$",""));

        //de esta parte la cantidad hace referencia al input , pero as u valor tambien
        var cantidad = cantidadProducto.value;

        total = total + precio * cantidad;

        console.log(precio);
        console.log(carritoRows[i]);


    }

    total = Math.round(total*100)/100;

    //obtengo la clase carrito-total-precio en este caso es solo 1 es el span donde se ubica el precio , y le pintamos un $ y la variable total
    document.getElementsByClassName("carrito-total-precio")[0].innerText = "$" + total;

    
}   
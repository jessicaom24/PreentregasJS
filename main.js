let titulo = document.createElement("h1")
titulo.className="inicio";
titulo.innerHTML=`Tabü`

document.body.appendChild(titulo)


const arrUsuarios =[
    {
        nombre:"Raul",
        passw:1234,
    },
    {
        nombre:"Maria",
        passw:5678,
    },
    ]

let boton = document.createElement("div")
boton.innerHTML=`<button class="ing">Inicio</button>`;
document.body.appendChild(boton)

function ingreso(){
    let user = prompt("Ingresa tu nombre");
    let ingreso = arrUsuarios.filter((usuario)=>usuario.nombre==user);
    
    if(ingreso.length>0){
        console.log(ingreso);
        let contr = prompt("Ingresa tu contraseña");
        console.log(ingreso[0].passw + " " +ingreso[0].nombre);//prueba  
        if(ingreso[0].passw != contr){
            alert("¡Error!");
        }
        else
        alert("¡Bienvenido! " +user);
    } 
    else{
        alert("Para comprar, necesitas crear un usuario");
    }
}

boton.addEventListener("click", ingreso)

function tproductos(id, producto, precio, cantidad) {
    this.id = id;
    this.producto = producto;
    this.precio = precio;
    this.cantidad = cantidad;
}
    

let producto = [
    new tproductos(1,"Boxer", 150,0),
    new tproductos(2,"Braga", 299, 0),
    new tproductos(3,"Cachetero", 350, 0),
];

producto.forEach(item => {
    let card = document.createElement('div');
    card.className = "Dcard";
    card.id = item.id;
    card.innerHTML = `
        <p>Producto: ${item.producto}</p>
        <p>Precio: ${item.precio}</p>
        <p>Cantidad: <input class="txtcantidad" type="number" value="${item.cantidad}" </p>
    `;

    document.body.appendChild(card);

});

document.querySelectorAll(".txtcantidad").forEach((button)=>{
    button.addEventListener("change", function(){
    let idprod = this.parentNode.parentElement.id;
    let itemcantidad = producto.find(item => item.id == idprod);
    
    if (itemcantidad){ 
        itemcantidad.cantidad = parseInt(this.value); 
    /*/alert(`La cantidad del producto ${itemcantidad.producto} es ahora ${itemcantidad.cantidad}`); */}
})
});

let btotal = document.createElement("div")
btotal.innerHTML=`<button class="btotal">Total</button>`

btotal.addEventListener("click",()=>{
    sessionStorage.setItem("tcarrito", JSON.stringify(producto));
    const datosr = JSON.parse(
        sessionStorage.getItem("tcarrito")
    );
    console.log(datosr);
    window.location.href="./carrito.html";

});

document.body.appendChild(btotal)



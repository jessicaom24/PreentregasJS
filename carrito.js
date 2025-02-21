const carrito =JSON.parse(sessionStorage.getItem("tcarrito"));

const tprod = document.querySelector(".producto");
tprod.innerHTML = "";
let item = "";
let subtotal = 0;
let total = 0;

carrito.forEach((element) => {
    subtotal = element.cantidad * element.precio;
    total += total + subtotal;
    item += `<tr>
                <td>${element.producto}</td>
                <td>${element.precio}</td>
                <td>${element.cantidad}</td>
                <td>${subtotal}</td>
            </tr>`;
    tprod.innerHTML = item;
});



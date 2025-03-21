let estructura = document.createElement("div");
estructura.className = "contenedor";
estructura.innerHTML = `
<nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand">Dream's</a>
    </div>
</nav>
<body>
    <div class="container mt-5">
        <h2 class="mb-4">Carrito de Compras</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody class="TotalApi" id="tablaCarrito"></tbody>
        </table>
        <h4>Total: $<span id="totalCarrito">0.00</span></h4>
        <label for="montoPagado">Monto Pagado:</label>
        <input type="number" id="montoPagado" class="form-control mb-2" placeholder="Ingrese el monto pagado">
        <h4><button class="btn btn-primary" onclick="obtenerCambio()"><i class="fa-solid fa-sack-dollar"></i></button>Cambio: $<span id="cambioTotal">0.00</span></h4>
        <button class="btn btn-back"> <i class="fa-regular fa-circle-left"></i></button>
        <button class="btn btn-success mt-2" onclick="procesarPago()"><i class="fa-solid fa-cash-register"></i></button>
        <button class="btn btn-danger" onclick="vaciarCarrito()"><i class="fa-solid fa-trash-can"></i></button>
        
    </div>


</body>;`;

document.body.appendChild(estructura);

document.addEventListener("DOMContentLoaded", function () {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = parseFloat(localStorage.getItem("total")) || 0;
    let tablaCarrito = document.getElementById("tablaCarrito");
    let totalCarrito = document.getElementById("totalCarrito");

    if (carrito.length === 0) {
        tablaCarrito.innerHTML = "<tr><td colspan='4' class='text-center'>No hay productos en el carrito</td></tr>";
    } else {
        carrito.forEach(producto => {
            let fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${producto.descripcion}</td>
                <td>$${producto.precio.toFixed(2)}</td>
                <td>${producto.cantidad}</td>
                <td>$${(producto.precio * producto.cantidad).toFixed(2)}</td>
            `;
            tablaCarrito.appendChild(fila);
        });
    }

    totalCarrito.textContent = total.toFixed(2);
});


// Simulación de una API para calcular el cambio
function calcularCambio(montoTotal, montoPagado) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (montoPagado < montoTotal) {
                reject("El monto pagado es insuficiente.");
            } else {
                resolve(montoPagado - montoTotal);
            }
        }, 500);
    });
}

// Agregar input y botón para calcular el cambio
// document.addEventListener("DOMContentLoaded", function () {
//     let container = document.querySelector(".container");
//     let divCambio = document.createElement("div");
//     divCambio.className = "mt-3";
//     divCambio.innerHTML = `
//         <label for="montoPagado">Monto Pagado:</label>
//         <input type="number" id="montoPagado" class="form-control mb-2" placeholder="Ingrese el monto pagado">
//         <button class="btn btn-primary" onclick="obtenerCambio()"><i class="fa-solid fa-sack-dollar"></i></button>
//         <h4>Cambio: $<span id="cambioTotal">0.00</span></h4>
//         <button class="btn btn-success mt-2" onclick="procesarPago()"><i class="fa-solid fa-cash-register"></i></button>
//     `;
//     container.appendChild(divCambio);
// });

// Función para obtener el cambio
function obtenerCambio() {
    let total = parseFloat(document.getElementById("totalCarrito").textContent);
    let montoPagado = parseFloat(document.getElementById("montoPagado").value);
    
    calcularCambio(total, montoPagado)
        .then(cambio => {
            document.getElementById("cambioTotal").textContent = cambio.toFixed(2);
        })
        .catch(error => {
            alert(error);
        });
}

// Función para procesar el pago
function procesarPago() {
    let total = parseFloat(document.getElementById("totalCarrito").textContent);
    let montoPagado = parseFloat(document.getElementById("montoPagado").value);
    
    if (isNaN(montoPagado) || montoPagado < total) {
        alert("El monto pagado es insuficiente para realizar la compra.");
        return;
    }
    
    alert("✅ Pago realizado con éxito. Gracias por su compra!");
    localStorage.removeItem("carrito");
    localStorage.removeItem("total");
    location.reload();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    localStorage.removeItem("total");
    alert("🛒 Carrito vaciado correctamente.");
    location.reload();
}

 // Simulación de productos (puedes remplazar por fetch real luego)
const productos = [
    { id: 1, descripcion: "Calzón tipo bóxer de seamless azul", precio: 79.00, img: "./img/113780MARINO1.webp" },
    { id: 2, descripcion: "Panty coordinable corte hipster con encaje gris", precio: 99.00, img: "./img/74406OXFORD.webp" },
    { id: 3, descripcion: "Tanga coordinable con detalles de encaje vino", precio: 99.00, img: "./img/74429VINO.webp" },
    { id: 4, descripcion: "Bóxer coordinable seamless rosa pastel", precio: 49.00, img: "./img/75005-frente.webp" },
    { id: 5, descripcion: "Panty básica con control abdominal", precio: 99.00, img: "./img/8842BLANCO.webp" },
    { id: 6, descripcion: "Calzón tipo cachetero corte láser", precio: 79.00, img: "./img/cortelaser.webp" },
    { id: 7, descripcion: "Panty básica con detalle de mesh", precio: 69.00, img: "./img/ECOMMERCE06JULIO_0000_72072U1.webp" },
    { id: 8, descripcion: "Panty con detalles de encaje verde", precio: 99.00, img: "./img/panty-74918-frente.webp" },
];

const arrUsuarios = [
    { nombre: "Raul", passw: "1234" },
    { nombre: "Maria", passw: "5678" },
];

// Estructura base
let estructura = document.createElement("div");
estructura.className = "contenedor";
estructura.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand">Dream's</a>
            <div class="d-flex align-items-center gap-2">
                <form class="d-flex" role="search">
                    <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <button class="btn btn-carrito" id="btnCarrito" onclick="redirigirCarrito()">
                    <i class="fa-solid fa-bag-shopping"></i>
                </button>
                <button class="btn btn-ingreso">
                    <i class="fa-solid fa-user"></i>
                </button>
            </div>
        </div>
    </nav>
    <div class="tarjetas row justify-content-center p-4"></div>
`;
document.body.appendChild(estructura);

// Simulación fetch (puedes cambiar luego por fetch real)
function obtenerProductos() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(productos), 1000);
    });
}

async function renderProductos() {
    const contenedor = document.querySelector(".tarjetas");
    contenedor.innerHTML = "<p>Cargando productos...</p>";

    try {
        const productos = await obtenerProductos();
        contenedor.innerHTML = "";

        productos.forEach(producto => {
            const card = document.createElement("div");
            card.className = "card m-3";
            card.style.width = "18rem";
            card.innerHTML = `
                <img src="${producto.img}" class="card-img-top" alt="${producto.descripcion}">
                <div class="card-body">
                    <h5 class="card-title">$${producto.precio.toFixed(2)}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <a class="btn btn-secondary" onclick="modificarCantidad(${producto.id},-1)">-</a>
                    <input id="${producto.id}" class="cantidad" type="text" value="0" readonly 
                        data-precio="${producto.precio}" data-descripcion="${producto.descripcion}">
                    <a class="btn btn-primary" onclick="modificarCantidad(${producto.id},1)">+</a>
                    <a class="btn btnAgregar" onclick="agregarAlCarrito(${producto.id})">
                        <i class="fa-solid fa-cart-arrow-down"></i></a>
                </div>
            `;
            contenedor.appendChild(card);
        });
    } catch (err) {
        contenedor.innerHTML = "<p>Error al cargar productos</p>";
    }
}

document.addEventListener("DOMContentLoaded", renderProductos);

// Autenticación
function checkSession() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        Swal.fire(`Bienvenido de nuevo, ${loggedInUser}`);
        return true;
    }
    return false;
}

function login() {
    if (!checkSession()) {
        Swal.fire({
            title: "Para comprar, inicia sesión",
            html: `
                <input type="text" id="username" class="swal2-input" placeholder="Usuario">
                <input type="password" id="password" class="swal2-input" placeholder="Contraseña">
            `,
            showCancelButton: true,
            confirmButtonText: "Iniciar sesión",
            preConfirm: () => {
                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;

                if (!username || !password) {
                    Swal.showValidationMessage("Todos los campos son obligatorios");
                    return false;
                }

                const userFound = arrUsuarios.find(user => user.nombre === username && user.passw === password);

                if (!userFound) {
                    Swal.showValidationMessage("Usuario o contraseña incorrectos");
                    return false;
                }

                localStorage.setItem("loggedInUser", username);
                Swal.fire(`Bienvenido, ${username}`).then(() => location.reload());
            }
        });
    }
}

document.querySelector(".btn-ingreso").addEventListener("click", login);

function logout() {
    localStorage.removeItem("loggedInUser");
    Swal.fire("Sesión cerrada").then(() => location.reload());
}

if (localStorage.getItem("loggedInUser")) {
    const logoutButton = document.createElement("button");
    logoutButton.innerHTML = `<i class="fa-solid fa-sign-out-alt"></i>`;
    logoutButton.classList.add("btn", "btn-danger");
    logoutButton.onclick = logout;
    document.querySelector(".btn-ingreso").insertAdjacentElement("afterend", logoutButton);
}

// Carrito
let carrito = [];

function modificarCantidad(id, cambio) {
    let input = document.getElementById(id);
    let nuevaCantidad = Math.max(0, parseInt(input.value) + cambio);
    input.value = nuevaCantidad;

    let producto = carrito.find(p => p.id === id);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        if (nuevaCantidad === 0) {
            carrito = carrito.filter(p => p.id !== id);
            Swal.fire("Producto eliminado", `❌ ${producto.descripcion}`, "info");
        } else {
            Swal.fire("Cantidad actualizada", `Nueva cantidad: ${nuevaCantidad}`, "success");
        }
        calcularTotal();
    }
}

function agregarAlCarrito(id) {
    let input = document.getElementById(id);
    let cantidad = parseInt(input.value);
    let precio = parseFloat(input.getAttribute("data-precio"));
    let descripcion = input.getAttribute("data-descripcion");

    if (cantidad > 0) {
        let index = carrito.findIndex(p => p.id === id);
        if (index > -1) {
            carrito[index].cantidad += cantidad;
        } else {
            carrito.push({ id, descripcion, precio, cantidad });
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));
        Swal.fire("Producto agregado", `✅ ${cantidad} x ${descripcion}`, "success");
        calcularTotal();
    } else {
        Swal.fire("Cantidad inválida", "❌ Selecciona al menos uno", "warning");
    }
}

function calcularTotal() {
    let total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    localStorage.setItem("total", total.toFixed(2));
    Swal.fire("Total actualizado", `Total a pagar: $${total.toFixed(2)}`, "info");
}

function redirigirCarrito() {
    if (checkSession()) {
        calcularTotal();
        window.location.href = "./carrito.html";
    } else {
        login();
    }
}
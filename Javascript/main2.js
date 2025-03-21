    let estructura = document.createElement("div")
    estructura.className="contenedor";
    estructura.innerHTML=`
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand">Dream's</a>

        <!-- Contenedor de elementos alineados a la derecha -->
        <div class="d-flex align-items-center gap-2">
            <!-- Formulario de búsqueda -->
            <form class="d-flex" role="search">
                <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>

            <!-- Botón de carrito -->
            <button class="btn btn-carrito" id="btnCarrito" onclick="redirigirCarrito()">
                <i class="fa-solid fa-bag-shopping"></i>
            </button>

            <!-- Botón de usuario -->
            <button class="btn btn-ingreso">
                <i class="fa-solid fa-user"></i>
            </button>
        </div>
    </div>
</nav>
    <body>
    <div class= "tarjetas row justify-content-center" >
    <div class="card m-3" style="width: 18rem;">
        <img src="./img/113780MARINO1.webp" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">$79.00</h5>
        <p class="card-text">Calzón tipo bóxer de seamless azul</p>
        <a class="btn btn-secondary" onclick="modificarCantidad(1,-1)">-</a>
                <input id="1" class="cantidad" type="text" value="0" readonly data-precio="79.00" data-descripcion="Calzón tipo bóxer de seamless azul">
        <a class="btn btn-primary" onclick="modificarCantidad(1,1)">+</a>
        <a class="btn btnAgregar" onclick="agregarAlCarrito(1)"><i class="fa-solid fa-cart-arrow-down"></i></a>
        </div>
    </div>
    <div class="card m-3" style="width: 18rem;">
        <img src="./img/74406OXFORD.webp" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">$99.00</h5>
        <p class="card-text">Panty coordinable corte hipster con encaje gris</p>
        <a class="btn btn-secondary" onclick="modificarCantidad(2,-1)">-</a>
                <input id="2" class="cantidad" type="text" value="0" readonly data-precio="99.00" data-descripcion="Panty coordinable corte hipster con encaje gris">
        <a class="btn btn-primary" onclick="modificarCantidad(2,1)">+</a>
        <a class="btn btnAgregar" onclick="agregarAlCarrito(2)"><i class="fa-solid fa-cart-arrow-down"></i></a>
        </div>
    </div>
    <div class="card m-3" style="width: 18rem;">
        <img src="./img/74429VINO.webp" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">$99.00</h5>
        <p class="card-text">Tanga coordinable con detalles de encaje vino</p>
        <a class="btn btn-secondary" onclick="modificarCantidad(3,-1)">-</a>
                <input id="3" class="cantidad" type="text" value="0" readonly data-precio="99.00" data-descripcion="Tanga coordinable con detalles de encaje vino">
        <a class="btn btn-primary" onclick="modificarCantidad(3,1)">+</a>
        <a class="btn btnAgregar" onclick="agregarAlCarrito(3)"><i class="fa-solid fa-cart-arrow-down"></i></a>
        </div>
    </div>
    <div class="card m-3" style="width: 18rem;">
        <img src="./img/75005-frente.webp" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">$49.00</h5>
        <p class="card-text">Bóxer coordinable seamless rosa pastel</p>
        <a class="btn btn-secondary" onclick="modificarCantidad(4,-1)">-</a>
                <input id="4" class="cantidad" type="text" value="0" readonly data-precio="99.00" data-descripcion="Bóxer coordinable seamless rosa pastel">
        <a class="btn btn-primary" onclick="modificarCantidad(4,1)">+</a>
        <a class="btn btnAgregar" onclick="agregarAlCarrito(4)"><i class="fa-solid fa-cart-arrow-down"></i></a>
        </div>
    </div>
    <div class="card m-3" style="width: 18rem;">
        <img src="./img/8842BLANCO.webp" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">$99.00</h5>
        <p class="card-text">Panty básica con control abdominal</p>
        <a class="btn btn-secondary" onclick="modificarCantidad(5,-1)">-</a>
                <input id="5" class="cantidad" type="text" value="0" readonly data-precio="99.00" data-descripcion="Panty básica con control abdominal">
        <a class="btn btn-primary" onclick="modificarCantidad(5,1)">+</a>
        <a class="btn btnAgregar" onclick="agregarAlCarrito(5)"><i class="fa-solid fa-cart-arrow-down"></i></a>
        </div>
    </div>
    <div class="card m-3" style="width: 18rem;">
        <img src="./img/cortelaser.webp" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">$79.00</h5>
        <p class="card-text">Calzón tipo cachetero corte láser</p>
        <a class="btn btn-secondary" onclick="modificarCantidad(6,-1)">-</a>
                <input id="6" class="cantidad" type="text" value="0" readonly data-precio="99.00" data-descripcion="Calzón tipo cachetero corte láser">
        <a class="btn btn-primary" onclick="modificarCantidad(6,1)">+</a>
        <a class="btn btnAgregar" onclick="agregarAlCarrito(6)"><i class="fa-solid fa-cart-arrow-down"></i></a>
        </div>
    </div>
    <div class="card m-3" style="width: 18rem;">
        <img src="./img/ECOMMERCE06JULIO_0000_72072U1.webp" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">$69.00</h5>
        <p class="card-text">Panty básica con detalle de mesh</p>
        <a class="btn btn-secondary" onclick="modificarCantidad(7,-1)">-</a>
                <input id="7" class="cantidad" type="text" value="0" readonly data-precio="99.00" data-descripcion="Panty básica con detalle de mesh">
        <a class="btn btn-primary" onclick="modificarCantidad(7,1)">+</a>
        <a class="btn btnAgregar" onclick="agregarAlCarrito(7)"><i class="fa-solid fa-cart-arrow-down"></i></a>
        </div>
    </div>
    <div class="card m-3" style="width: 18rem;">
        <img src="./img/panty-74918-frente.webp" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">$99.00</h5>
        <p class="card-text">Panty con detalles de encaje verde</p>
        <a class="btn btn-secondary" onclick="modificarCantidad(8,-1)">-</a>
                <input id="8" class="cantidad" type="text" value="0" readonly data-precio="99.00" data-descripcion="Panty con detalles de encaje verde">
        <a class="btn btn-primary" onclick="modificarCantidad(8,1)">+</a>
        <a class="btn btnAgregar" onclick="agregarAlCarrito(8)"><i class="fa-solid fa-cart-arrow-down"></i></a>
        </div>
    </div>
    </div>
    </body>
    `
    document.body.appendChild(estructura)

    const arrUsuarios = [
        { nombre: "Raul", passw: "1234" },
        { nombre: "Maria", passw: "5678" },
    ];
    
    // Función para verificar si el usuario ya está autenticado
    function checkSession() {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            Swal.fire(`Bienvenido de nuevo, ${loggedInUser}`);
            return true;
        }
        return false;
    }
    function login(){
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
    
    
                 // Validar si los campos están vacíos
                if (!username || !password) {
                    Swal.showValidationMessage("Todos los campos son obligatorios");
                    return false;
                }
    
                // Buscar el usuario en el array
                const userFound = arrUsuarios.find(user => user.nombre === username && user.passw === password);
    
                if (!userFound) {
                    Swal.showValidationMessage("Usuario o contraseña incorrectos");
                    return false;
                }
    
                // Guardamos el usuario en localStorage
                localStorage.setItem("loggedInUser", username);
                Swal.fire(`Bienvenido, ${username}`).then(() => location.reload());
            }
        });
    }
}
document.querySelector(".btn-ingreso").addEventListener("click", login);

    // Función para cerrar sesión
    function logout() {
        localStorage.removeItem("loggedInUser");
        Swal.fire("Sesión cerrada").then(() => location.reload());
    }
    
    // Agrega un botón de cierre de sesión si el usuario está logueado
    if (localStorage.getItem("loggedInUser")) {
        const logoutButton = document.createElement("button");
        logoutButton.innerHTML = `<i class="fa-solid fa-sign-out-alt"></i>`;
        logoutButton.classList.add("btn", "btn-danger");
        logoutButton.onclick = logout;
    
        const ingresoButton = document.querySelector(".btn-ingreso");
    
        if (ingresoButton) {
            ingresoButton.insertAdjacentElement("afterend", logoutButton);
        }
    }

        //agregar y quitar productos

    function modificarCantidad(id, valor) {
        let input = document.getElementById(id);
        let cantidad = parseInt(input.value) || 0;
        cantidad += valor;

        if (cantidad < 0) cantidad = 0; // Evita números negativos
        input.value = cantidad;
    }

    let carrito = [];

function modificarCantidad(id, cambio) {
    let inputCantidad = document.getElementById(id);
    let nuevaCantidad = Math.max(0, parseInt(inputCantidad.value) + cambio);
    inputCantidad.value = nuevaCantidad;

    // Actualizar carrito si la cantidad ha cambiado
    let productoEnCarrito = carrito.find(item => item.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad = nuevaCantidad;

        if (nuevaCantidad === 0) {
            // Si la cantidad es 0, quitar el producto del carrito
            carrito = carrito.filter(item => item.id !== id);
            alert(`❌ El producto ${productoEnCarrito.descripcion} ha sido eliminado del carrito.`);
        }
        console.log("Carrito actualizado después de cambiar la cantidad:", carrito);
        calcularTotal();
    }
}

function agregarAlCarrito(id) {
    let producto = document.getElementById(id);
    let cantidad = parseInt(producto.value);
    let precio = parseFloat(producto.getAttribute("data-precio"));
    let descripcion = producto.getAttribute("data-descripcion");

    if (cantidad > 0) {
        let itemIndex = carrito.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            // Si ya existe el producto en el carrito, solo actualizamos la cantidad
            carrito[itemIndex].cantidad += cantidad;
        } else {
            // Si no existe, agregamos el nuevo producto
            carrito.push({
                id: id,
                descripcion: descripcion,
                precio: precio,
                cantidad: cantidad
            });
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));

        // Mensaje personalizado según el producto agregado
        alert(`✅ Has agregado ${cantidad} ${descripcion} al carrito.`);
        console.log("Carrito actualizado:", carrito);
        calcularTotal();
    } else {
        alert("❌ Selecciona al menos un producto antes de agregarlo al carrito.");
    }
}

function calcularTotal() {
    let total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    console.log("Total a pagar: $" + total.toFixed(2));

     // Almacenar el total en el localStorage
    localStorage.setItem("total", total.toFixed(2));
}


function redirigirCarrito() {
    if (checkSession()) {  // Verifica si hay un usuario logueado
        calcularTotal();  // Llamar a la función para calcular el total
        window.location.href = "./carrito.html";  // Redirigir a la página del carrito
    } else {
        Swal.fire({
            title: "Para acceder al carrito, inicia sesión",
            html: `
                <input type="text" id="username" class="swal2-input" placeholder="Usuario">
                <input type="password" id="password" class="swal2-input" placeholder="Contraseña">
            `,
            showCancelButton: true,
            confirmButtonText: "Iniciar sesión",
            preConfirm: () => {
                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;

                // Validar si los campos están vacíos
                if (!username || !password) {
                    Swal.showValidationMessage("Todos los campos son obligatorios");
                    return false;
                }

                // Buscar el usuario en el array
                const userFound = arrUsuarios.find(user => user.nombre === username && user.passw === password);

                if (!userFound) {
                    Swal.showValidationMessage("Usuario o contraseña incorrectos");
                    return false;
                }

                // Guardamos el usuario en localStorage
                localStorage.setItem("loggedInUser", username);
                Swal.fire(`Bienvenido, ${username}`).then(() => location.reload());
            }
        });
    }
}
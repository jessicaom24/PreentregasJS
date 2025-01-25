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
function ingreso(){
    let user = prompt("Ingresa tu nombre");s
    let ingreso = arrUsuarios.filter((usuario)=>usuario.nombre==user);
    
    if(ingreso.length>0){
        console.log(ingreso);
        let contr = prompt("Ingresa tu contraseña");
        console.log(ingreso[0].passw + " " +ingreso[0].nombre);//prueba  
        if(ingreso[0].passw != contr){
            alert("¡Error!");
        }
        else
        console.log("¡Bienvenido!");
    } 
    else{
        console.log("Crea un usuario");
    }
}
ingreso();
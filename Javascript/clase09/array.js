// Array

let personas = [
    "Santiago López",
    "María García",
    "Andrés Martínez",
    "Laura Rodríguez",
    "Carlos Hernández",
    "Ana Pérez",
    "Javier González",
    "Isabel Torres",
    "Diego Silva",
    "Patricia Ramírez",
    "José Jiménez",
    "Carmen Castro",
    "Luis Sánchez",
    "Gabriela Vargas",
    "Miguel Ortega"    
    ];

    /*
// Req #1 Mostrar datos de la persona 3
console.log(personas);
console.log(personas[2]);

// Req #2 Mostrar cant de elementos
console.log(personas.length)

// Req #3 Listar todos los elementos
for(let i=0; i<personas.length; i++){
    console.log(personas[i]);
}

// Req #4 Buscar si un nombre existe en el array
let nombreBuscar = "Gabriela Vargas";
let exite = false;

for( let i=0; i < personas.length; i++){
    //console.log(personas[i]);

    if(persona[i] == nombreBuscar){
        existe = true;
        break;
    }
}

console.log("La persona buscada: " + nombreBuscar);
console.log(existe === true ? "Si existe" : "No existe");
*/

// Req #5 Orderar array de personas y mostrarlo por consola
//console.log( personas )
//console.log( personas.sort()) // sort function mutable

/*
// MATRICES / ARRAY MULTIDIMENSION
let empleados = [
    ["Ramiro", "Sebas", 28, ["ramiro@gmail.com", "ramiro@hotmail.com"]],
    ["Jorge", "luis", 24],
    ["Lautaro", "Valentin", 18],
]

console.log(empleados[0][2]);
console.log(empleados[1][1]);
console.log(empleados[2][2]);
*/

// OBJETOS
let persona = {
    nombre: "Ramiro",
    edad: 26,
    descripcion: "developer"
}

console.log(persona.descripcion)

// Array de object
let proveedores = [
    {
        // clave valor
        id: 1,
        nombre: "Valentin",
        apellido: "Zapata",
        categoria: "Informatica",
        edad: 26
    },
    {
        id: 2,
        nombre: "Luis",
        apellido: "Ramon",
        categoria: "Panaderia",
        edad: 29
    }
]

console.log(proveedores);
console.log(proveedores[1].nombre);
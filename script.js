function cepillarDientes() {
    console.log("1.-cepillando los dientes");
}
function bañarse() {
    cepillarDientes();
    console.log("2.- cuerpo limpio");
}
function empezarDia() {
    bañarse();
    console.log("3.- listo para trabajar");
}

empezarDia();//se apila empezarDia

const botonproyecto = document.getElementById("ver-proyectos");
function mostrarProyectos() {
    const proyectosSection = document.getElementById("proyectos");
    proyectosSection.scrollIntoView({ behavior: "smooth" });
}
botonproyecto.addEventListener("click", mostrarProyectos);

//cambiar tema
const botonTema = document.getElementById("btn-tema");
const cuerpoPagina = document.body;
function alternarTema() {
    if (cuerpoPagina.style.background === "black") {
        cuerpoPagina.style.background = "white";
        cuerpoPagina.style.color = "black";
    }
    else {
        cuerpoPagina.style.background = "black";
        cuerpoPagina.style.color = "white";
    }
}
botonTema.addEventListener("click", alternarTema);

//ejemplo: alerta al hacer click 
// const todasLasTarjetas = document.querySelectorAll(".proyecto-card");

// todasLasTarjetas.forEach(tarjeta => {
//     tarjeta.addEventListener("click", function () {
//         const nombreProyecto = tarjeta.querySelector("h3").innerText;
//         alert("haz hecho click en el proyecto" + nombreProyecto);
//     })
// })

//variables: LET (que puede cambiar) - const(es fijo, no cambia)
const nombreDev = "Brayan Zurita";//fijo
let proyectosCompletados = 4;//cambia

let esInstructor = true;//valores booleanos
let edad = 34;// numero
let saludo = "Hola Bray";//string

//tipos complejos
let habilidades = ["JS", "CSS", "PHP"];
let experiencia = {
    años: 10,
    empresas: ["Google", "Facebook", "Instagram"]
};

const proyectoNuevo = {
    nombre: "portafolio",
    descripcion: "Sitio Web",
    tecnologias: ["HTML", "CSS", "PHP"],
    completado: false
};

//entender la visibilidad de las variables y la memoria de las funciones

function crearContadorDeProyectos(inicial) {
    let contador = inicial; // variable privada gracias al clousure
    return {
        incrementar: function () {
            contador++;
            return `ahora tienes ${contador} proyectos.`;
        },
        obtenerTotal: () => contador //para obtener el valor actual
    };
}

const miContador = crearContadorDeProyectos(4);
console.log(miContador.incrementar);//ahora tienes 5
console.log(miContador.contador);// no definido, no se puede acceder directamente al contador

//otro ejemplo
function crearRastreador() {
    //local function scoope -- solo vive dentro de la funcion
    let conteo = 0;
    return function () {
        conteo++;
        return `has intentado ver los proyectos ${conteo}`;
    };
}

const rastrearClick = crearRastreador();
console.log(rastrearClick());//has intentado ver los proyectos 1
console.log(rastrearClick());//has intentado ver los proyectos 1

//mutaciones
const misProyectos = [
    { nombre: "E-comerce", techs: ["react", "Node.js"] },
    { nombre: "BlogPersonal", techs: ["gastby", "sql"] },
    { nombre: "App tareas", techs: ["rVue", "Gatsby"] },
];
//usaremos reduce
const stackStats = misProyectos
    .flatMap(p => p.techs)//extraemos todas las techs
    .reduce((acc, tech) => {
        acc[tech] = (acc[tech] || 0) + 1;
        return acc;
    });

console.log(stackStats);//{react:1 node.js1, etc}

//filter creamos un nuevo array para proyectos react
const proyectosReact = misProyectos.filter(p => p.techs.includes("React"));

//map creamos nuevo array con solo nombre sde los proyectos
const nombresProyectos = misProyectos.map(p => p.nombre);

//ejemplo de carga de portafolio con fetch()
async function cargarProyectos() {
    try {
        const response = await fetch("https://api.github.com/users/Brayzuri/repos");
        if (!response.ok) {
            throw new Error("Error al cargar los proyectos");
        }
        const proyectos = await response.json();
        const contenedorProyectos = document.getElementById("contenedor-proyectos");
        contenedorProyectos.innerHTML = "";
        proyectos.forEach(proyecto => {
            contenedorProyectos.innerHTML += `
            <div class="proyecto-card">
          <h3>${proyecto.name}</h3>
          <p>${proyecto.description || "sin descripcion"}</p>
          <a href="${proyecto.html_url}" target="_blank">Ver en Github</a>
          </div>

            `;
        });

    } catch (error) {
        console.error("error", error)
    }

}
cargarProyectos();

//modularidad
//controlador de interfaz

const UI = {
    cuerpo: document.body,
    alternarColor: function () {
        const esOScuro = this.cuerpo.style.backgroundColor == "black";
        this.cuerpo.style.backgroundColor = esOScuro ? "white" : "black";
        this.cuerpo.style.color = esOScuro ? "black" : "white";
    },
    irAseccion: function (id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

}
botonTema.addEventListener("click", () => UI.alternarColor());

//local storage
function guardarTema(color) {
    localStorage.setItem("temaPreferido", color);
}

const temaGuardado = localStorage.getItem("temaPreferido");
if (temaGuardado) {
    cuerpoPagina.style.backgroundColor = temaGuardado;
    cuerpoPagina.style.color = temaGuardado == "black" ? "white" : "black";
}

//delegacion de prpoyectos
const contenedor = document.getElementById("contenedor-proyectos");
contenedor.addEventListener("click", function (evento) {
    const tarjeta = evento.target.closest(".proyecto-card");
    if (tarjeta) {
        alert("haz hecho click en un proyecto:" + tarjeta.querySelector("h3").innerText)
    }
})
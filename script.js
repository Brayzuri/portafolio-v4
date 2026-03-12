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
const todasLasTarjetas = document.querySelectorAll(".proyecto-card");

todasLasTarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", function () {
        const nombreProyecto = tarjeta.querySelector("h3").innerText;
        alert("haz hecho click en el proyecto" + nombreProyecto);
    })
})

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

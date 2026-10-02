
const botonMenu = document.getElementById("botonMenu");
const menu = document.querySelector(".menu");

botonMenu.addEventListener("click", () => {
    menu.classList.toggle("activo");
});

document.querySelectorAll(".menu a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("activo");
    });
});

function mostrarMensaje(tipo) {
    const mensajes = {
        actividad:
            "Realiza actividad física de manera regular y comienza con ejercicios adecuados para tu condición.",

        hidratacion:
            "Mantén agua disponible durante el día y toma pequeños vasos de forma constante.",

        descanso:
            "Establece horarios de descanso y evita utilizar dispositivos electrónicos antes de dormir.",

        alimentacion:
            "Procura incluir diferentes grupos de alimentos y mantener horarios regulares para comer."
    };

    alert(mensajes[tipo]);
}
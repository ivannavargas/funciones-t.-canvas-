var contexto;

function inicializar() {
    let lienzo = document.getElementById('miLienzo');
    lienzo.width = window.innerWidth;
    lienzo.height = window.innerHeight;
    contexto = lienzo.getContext('2d');
    contexto.beginPath();
    contexto.lineWidth = 1;
    contexto.strokeStyle = "#FF0000";
    contexto.moveTo(0, (window.innerHeight / 2)-100);
    contexto.lineTo(window.innerWidth, (window.innerHeight / 2)-100);
    contexto.stroke();
    contexto.translate(0, window.innerHeight/2);
    contexto.scale(1, -1);
}

function dibujar() {
    dibujo.fillStyle = 'blue';
    dibujo.fillRect(0, 0, 50, 100);
}


function dibujarCirculo(x, y, radio) {
    contexto.beginPath();
    contexto.arc(x, y, radio, 0, 2 * Math.PI, true);
    contexto.fill();
}

function dibujarSen(opcion, frecuencia) {
    let x;
    let yoffset = 100;
    let amplitud = 100;
    
    for (x =0; x < 360 * 4; x += (1 / frecuencia)) {
        if (opcion == 'seno') {
            y = Math.sin(x * frecuencia * Math.PI / 180) * amplitud + yoffset;
        } else {
            y = Math.cos(x * frecuencia * Math.PI / 180) * amplitud + yoffset;
        }
        dibujarCirculo(x, y, 1);
    }

}

function dibujarCos(opcion, frecuencia) {
    let x;
    let yoffset = 100;
    let amplitud = 100;
    
    for (x =180; x < 360 * 4; x += (1 / frecuencia)) {
        if (opcion == 'seno') {
            y = Math.sin(x * frecuencia * Math.PI / 310) * amplitud + yoffset;
        } else {
            y = Math.cos(x * frecuencia * Math.PI / 310) * amplitud + yoffset;
        }
        dibujarCirculo(x, y, 1);
    }

}







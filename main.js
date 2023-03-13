
let op_uno = document.getElementById('consulta_uno')
let op_dos = document.getElementById('consulta_dos')

op_uno.addEventListener('click', mostrar_fecha)
async function mostrar_fecha() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let fecha = document.getElementById('fecha')
            if (fecha) {
                resolve(document.getElementById('respuesta').innerHTML = "La fecha ingresada es: " + fecha.value + "<br> Clima : " + getRandomWords(1, 1) + "<br> Temperatura : " + getRandomArbitrary(5, 30))
            } else {
                reject(Error('Fecha incorrecta'))
            }
        }, 3000)
    })
}

op_dos.addEventListener('click', mostrar_hoy)
async function mostrar_hoy() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById('respuesta').innerHTML = "El clima de hoy es: <br>Por la mañana será: " + getRandomWords(1, 1) + "<br> Por la tarde será : " + getRandomWords(1, 1) + "<br> Por la noche será : " + getRandomWords(1, 1);
        }, 3000)
    })
}

var clima = new Array("Despejado ", "Nublado", "Lluvioso");

function getRandomWords(min, max) {
    //Obtiene numero aleatorio entre 3 y 10.
    var n = Math.floor(Math.random() * (max - min + 1)) + min;
    var words = "";
    //Obtiene palabras del array de acuerdo al valor obtenido como n.
    for (i = 0; i < n; i++) {
        words += clima[Math.floor(Math.random() * clima.length)];
    }
    return words;
}
function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var id=window.location.pathname.slice(9)
console.log('entró')

fetch('https://hernadar.pythonanywhere.com/novedades/'+ id)
    .then(response => response.json())
    .then(respuesta => {
        dato=respuesta;

let fecha = document.getElementById("fecha")
let lugar = document.getElementById("lugar")
let titulo = document.getElementById("titulo")
let intro = document.getElementById("intro")
let info = document.getElementById("info")
let imagen = document.getElementById("imagen")
fecha.value=dato.fecha
lugar.value=dato.lugar
titulo.value=dato.titulo
intro.value=dato.intro
info.value=dato.info
imagen.files[0]=`../static/img/imgNovedades/` + dato.imagen

let divImagen = document.getElementById("divImagen")
console.log(divImagen)   

divImagen.innerHTML +=
`
<img width="100" src="../static/img/imgNovedades/` + dato.imagen +`" alt="">
`


// Acá cierro el fecth que busca datos
})


.catch((err) => {
    console.log(err)
})
    
fetch('https://hernadar.pythonanywhere.com/novedades')
    .then(response => response.json())
    .then(respuesta => {
        datos=respuesta;

let tabla = document.querySelector("#tabla")


datos.forEach(dato => {
tabla.innerHTML +=
`
<tr class="" >
                <td>` + dato.id +`</td>
                <td>` + dato.fecha +`</td>
                <td>` + dato.lugar +`</td>
                <td>` + dato.titulo +`</td>
                <td>` + dato.intro +`</td>
                <td>` + dato.info +`</td>
                <td>
                    <img width="60" src="../static/img/imgNovedades/` + dato.imagen +`" alt="">
                </td>
                </td>
                <td>
                    <a class="btn btn-primary" href="/edicion/` + dato.id +`">Editar</a>
                    <button class="btn btn-danger" onClick="eliminar(` + dato.id +`)">Eliminar</button>

                </td>
    </tr>
`

})

// Acá cierro el fecth que busca datos
})


.catch((err) => {
    console.log(err)
})
const eliminar=(id)=>{
    fetch('https://hernadar.pythonanywhere.com/eliminar/' + id,
    {method: 'DELETE'})
    .then(response => response.json())
    .then(respuesta => {
        datos=respuesta;
        location.reload();
    })
    .catch((err) => {
         console.log(err)
        })
}
/* Script nav menu responsive */

let openMenu = document.querySelector("#open-menu");
let closeMenu = document.querySelector("#close-menu");
let navList = document.querySelector("#nav-list");
let navLinks = document.querySelectorAll(".nav-list");


openMenu.addEventListener("click", () => {
    navList.classList.add("active");
})

closeMenu.addEventListener("click", () => {
    navList.classList.remove("active");
})

navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        navList.classList.remove("active");
    })
})
// section quienes somos

var btnAbrirPopupQuienes = document.getElementById('btn-abrir-popup-quienes'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('popup');

    btnAbrirPopupQuienes.addEventListener('click', function(){
        let detalle = document.querySelector("#popup")
        detalle.innerHTML += 
        `<div id="novedad" class="scroll">
                    <h3>Un poco de Historia del Tiro Federal Trelew Arqueria </h3>
                    <p>En Trelew, la arquería como actividad organizada reciente, comenzó con las clases que dictaba la escuela de arquería Otendor aproximadamente en el  año 2005, en el teatro español de nuestra Ciudad. 
                    En nuestra Institución -Tiro Federal Trelew -, el inicio lo podemos situar en el año 2007 .a través de un hecho fortuito (participación en un torneo aniversario en Bahía Blanca).  Posteriormente  esta semilla encuentra terreno fértil, en entusiastas aprendices de arquería  y  germina en nuestra institución “Tiro Federal Trelew”.
                    Como cualquier actividad nueva el entusiasmo que provoca esta actividad, se comienzan las prácticas con mucho entusiasmo pero sin la debida preparación técnica y profesional necesaria. El siguiente período, es un tiempo de transición,  hasta que se forma la subcomisión de arquería de la institución Tiro Federal Trelew.  Comienza asimismo la participación formal de algunos arqueros, en los torneos organizados por la Federación Argentina de Tiro Con Arco (FATARCO). Posteriormente, al observar  que la actividad seguía en auge y que la institución Tiro Federal Trelew cuenta con la  estructura administrativa que requiere FATARCO para asociarse  adherimos nuestra institución a la Federación Nacional. 
                    El 16 de noviembre de 2012, se crea la subcomisión de arquería y se comienza también a pensar, la forma de dar curso a las demandas de los socios e interesados en realizar prácticas regulares y más formales de arquería. 
                    En Julio de 2014, se logra finalmente que nuestro Tiro Federal Trelew, se encuentre afiliado a la Federación Argentina de Tiro con Arco, (FATARCO) con todos los beneficios derivados de la integración a una institución Nacional.
                    En el mes de octubre de 2014, tres integrantes de la institución realizan un curso de entrenadores, organizado por la Asociación de Amigos del Tiro Con Arco (ATAC), comodoro Rivadavia, con la anuencia y uno de los principales entrenadores de FATARCO, obteniendo entonces, la capacitación necesaria como entrenadores para poder transmitir las técnicas que FATARCO ha considerado las mejores para el aprendizaje de esta actividad.
                    En el año 2019 se incorporan dos entrenadores más a la oferta institucional. 
                    En lo referente a la actuación deportiva, representantes de nuestra institución han participado dentro de la zona  patagónica y a nivel nacional en un sinnúmero de torneos oficiales, homologatorios, nacionales y ranqueables. Se obtuvieron importantes logros deportivos en las finales regionales y nacionales en las modalidades Juego de Campo,  Sala, 70/70 y 3D. </p>
                    
                    <p>Practicamos arquería básicamente por que nos gusta pero además podemos enumerar que </p>
                    
                    <p>1- El arco favorece la coordinación óculo-motriz.</p>
                    
                    <p>2- Genera una placentera mejoría de la condición física del practicante, proporcional a la asiduidad en la práctica del deporte en sí y de otros asociados. Por tanto, ayuda al control de los factores de riesgo cardiovascular (hipertensión arterial, tabaquismo, diabetes, obesidad, hipercolesterolemia).</p>
                    
                    <p>3- Potencia enormemente la capacidad de concentración y el autocontrol.</p>
                    
                    <p>4- Genera inclusión social de niños, jóvenes, adultos, ancianos y personas con algún tipo de discapacidad en un mismo entorno.</p>
                    
                    <p>5- Control y liberación del estrés diario, en contacto con la naturaleza o dentro de sus múltiples modalidades.</p>
                    
                    <p>6- Socialización. El deporte y las competiciones deportivas desarrollan valores y actitudes que moldean el espíritu y el carácter de las personas. Crea individuos con mentalidad positiva, cultivados en el esfuerzo personal y la superación, respetuosos, justos y disciplinados.</p>
                    
                    <p>7- Diversión y desafío personal inagotables ¡Es practicable de 9 a 90 años y con casi cualquier condición física de base!</p>
                    
                    <p>8- Recreación ancestral en la belleza del instrumento, en el vuelo de la flecha, en la fabricación de la misma y de otros complementos como las cuerdas. </p>
                    
                    </p>
        </div>`
        overlay.classList.add('active');
        popup.classList.add('active');
       
       
    });
   


/* Script slider novedades */
fetch('https://hernadar.pythonanywhere.com/novedades')
    .then(response => response.json())
    .then(respuesta => {
        datos=respuesta;
        
        
    
    
    

// const datos =
//     [
//         {
//             id:1,
//             imagen:'noved1.jpg',
//             dia: 06,
//             mes: 'Mayo',
//             anio: '2023',
//             lugar: 'tiro federal',
//             titulo: 'Curso de iniciación al tiro con arco de Mayo',
//             intro: '',
//             info: 'Este sábado dimos inicio al esperado curso de arquería en el Club Tiro Federal Trelew. Durante la primera clase, nuestros aspirantes pudieron disfrutar de una experiencia única, aprendiendo las técnicas básicas para comenzar a practicar este deporte tan apasionante. Mientras tanto, nuestros arqueros más avanzados continuaron con sus prácticas y otros se dedicaron al armado de las contenciones para garantizar la seguridad de todos. ¡Estamos muy felices de haber comenzado este nuevo ciclo de aprendizaje y esperamos verlos pronto en nuestra próxima clase!'
//         },
//         {
//             id:2,
//             imagen:'noved2.jpg',
//             dia: 26,
//             mes: 'Marzo',
//             anio: '2023',
//             lugar: 'tiro federal',
//             titulo: 'Torneo Social Fundación Ceferino Puerto Madryn',
//             intro: '',
//             info: 'Este domingo, participamos en el Torneo 3D Social de Arquería de la Fundación Ceferino Namuncurá y tuvimos el agrado de compartir una jornada agradable junto a arqueros de diversos clubes. Felicitamos a Romina, @LaPeque, miembro de nuestro club, Tiro Federal Trelew, quien en su primer torneo obtuvo el primer puesto en la categoría tradicional escuela. Esperamos que este triunfo sea el primero de muchos más. Agradecemos a la Fundación Ceferino Namuncurá por organizar este torneo y los esperamos el próximo 8 de abril en el JJCC que organizamos en Trelew.'
//         },
//         {
//             id:3,
//             imagen:'noved3.jpg',
//             dia: 12,
//             mes: 'Abril',
//             anio: '2023',
//             lugar: 'tiro federal',
//             titulo: 'Juego de campo rankeable zona patagónica  en el Tiro Federal Trelew',
//             intro: '',
//             info: '¡Hola arqueros! 🎯 Queremos contarles que el sábado pasado tuvimos una increíble competencia de juego de campo en el Tiro Federal Trelew. ¡Y fue todo un éxito gracias a la participación de 57 arqueros provenientes de diferentes localidades y provincias aledañas! Queremos felicitar especialmente a los arqueros de nuestro club que participaron en la competencia, Además, queremos agradecer a todos los colaboradores que nos ayudaron tanto en la preparación de las deliciosas pizzas como en la organización del campo. También queremos agradecer a @canal12trelew por la cobertura que nos brindaron.'
//         },
//         {
//             id:4,
//             imagen:'noved4.jpg',
//             dia: 06,
//             mes: 'Diciembre',
//             anio: '2022',
//             lugar: 'tiro federal',
//             titulo: 'Cena Fin de año',
//             intro: '',
//             info: 'Este sábado se llevó a cabo la cena anual, de cierre de actividades. Dónde fueron distinguidos algunos de nuestros arqueros, por su gran participación en competencias de la Federación Argentina de tiro con Arco. Hemos tenido un gran 2022....y esperamos tener un 2023 aún mejor, con muchos más desafíos.'
//         },
//         {
//             id:5,
//             imagen:'noved5.jpg',
//             dia: 18,
//             mes: 'Febrero',
//             anio: '2023',
//             lugar: 'tiro federal',
//             titulo: '¡Seguimos Avanzando!',
//             intro: '',
//             info: 'Muy felices por la nueva adquisición de figuras 3D para arquería. Muy pronto podremos comenzar con los torneos en la modalidad 3D. ¡Seguimos Avanzando!'
//         },
//     ]



let carrusel = document.querySelector("#grande")

datos.forEach(dato => {
const fecha = new Date(dato.fecha)
const dia=fecha.getDate()
const mes=fecha.getMonth()
const anio=fecha.getFullYear()

carrusel.innerHTML += 
`<div class="news-grid">
    <div class="news-grid-image">
        <img src="../static/img/imgNovedades/` + dato.imagen +`" alt="">
        <div class="news-grid-box">
            <h1>`+ dia + `</h1>
            <p>`+ mes + `</p>
        </div>
    </div>
        <div class="news-grid-txt">
            <span>`+ dato.lugar + `</span>
            <h2>`+ dato.titulo + `</h2>
            <ul>
                <li><i class="fa fa-calendar" aria-hidden="true"></i>` + dia + `-`+ mes +`-` + anio +`</li>
            </ul>
            <p>`+ dato.intro + `</p>
            <a id="btn-abrir-popup" class="btn-abrir-popup">Ver mas...</a>

        </div>
</div>`;

})



let puntos = document.querySelector("#puntos");

for (i=0; i<datos.length; i++){
    if (i==0){
        puntos.innerHTML +=`<li class="punto activo"></li>`;
    } else{
    puntos.innerHTML +=`<li class="punto"></li>`;
}
}

// nuevo carrusel  

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

if(screen.width<480){
    grande.style.width = (datos.length)*100 +`%`
    puntos.classList.add('invisible')
} else {
grande.style.width = (datos.length/2)*100 +`%` 
puntos.classList.remove('invisible')
}

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -(100/(datos.length));

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})





var btnAbrirPopup = document.getElementsByClassName('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('popup');
 


datos.forEach( dato =>{
btnAbrirPopup[dato.id-1].addEventListener('click', function(){
    let detalle = document.querySelector("#popup")
    detalle.innerHTML += 
    `<div id="novedad">
                <h3>`+ dato.titulo +`</h3>
                <p >`+ dato.info +`<p>
    </div>`
	overlay.classList.add('active');
	popup.classList.add('active');
   
   
});

})


btnCerrarPopup.addEventListener('click', function(){
    let novedad = document.querySelector("#novedad")
    $('#novedad').remove();
    
   
    overlay.classList.remove('active');
    popup.classList.remove('active');
})

// Acá cierro el fecth que busca datos
})


.catch((err) => {
    console.log(err)
})



//mover slider con dispositivos moviles
if(screen.width<720){
const carousel = document.querySelector(".carrousel"),
firstBox = carousel.querySelectorAll(".news-grid")[0]

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const dragStart = (e) => {
    // updatating global variables value on mouse down event
   
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
  
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
   
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
}
//-------------------------


/* Validacion formulario bootstrap */ // Example starter JavaScript for disabling form submissions if there are invalid fields

(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

fetch('https://apis.datos.gob.ar/georef/api/provincias')
    .then(response => response.json())
    .then(respuestaApi => {
        let provincias = respuestaApi.provincias;

        const $select = document.getElementById("provincia")
        //empty option
        const $option = document.createElement("option")
        $option.value = ""
        $option.innerHTML = "Seleccione una provincia"
        $select.appendChild($option)
        provincias.forEach(provincia => {
            const $option = document.createElement("option")
            $option.value = provincia.nombre
            $option.innerHTML = provincia.nombre
            $select.appendChild($option)
        })




    })
    .catch((err) => {
        console.log(err)
    })

   
/* ocultar - mostrar formulario */

let btnCursos = document.querySelector("#btn-cursos");


btnCursos.addEventListener("click", () => {
    formulario.classList.add("active");
})
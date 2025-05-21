const text = document.getElementById('Texto');

//op1
const op1 = document.getElementById('op1');
const btn1 = document.getElementById('btn1');
const img1 = document.getElementById('img1');

let textoExtra = null;
let textoExtra2 = null;
let imagen1 = null;

let textoExtra3 = null;
let textoExtra4 = null;
let imagen2 = null;

let textoExtra5 = null;
let textoExtra6 = null;
let imagen3 = null;

let textoExtra7 = null;
let textoExtra8 = null;
let imagen4 = null;
let e1 = null;

let t = document.getElementById("t")
let inf = document.getElementById("Inf")

//op2
const op2 = document.getElementById('op2');
const btn2 = document.getElementById('btn2');
const img2 = document.getElementById("img2");

let textoExtraA = null;

let e2 = null;

let t2 = document.getElementById("t2")
let inf2 = document.getElementById("inf2")

//op3
const op3 = document.getElementById('op3');
const btn3 = document.getElementById('btn3');
const img3 = document.getElementById("img3");

let e3 = null;
let textoExtraB = null;

let t3 = document.getElementById("t3")
let inf3 = document.getElementById("inf3")

const pie = document.getElementById("pie")
//---------------------------------------------------BOTON #1


btn1.addEventListener("click", function() {

    t.textContent = "";
    inf.textContent = "";
    img1.style.display = "none";
    text.style.display = 'none';
    op2.style.display = 'none';
    op3.style.display = 'none'; 
    btn1.style.display = "none";
    pie.style.display = "none";

    op1.style.width = "90%";
    
    op1.style.marginTop = "2500px"; // Ajusta este valor para bajar el cuadro más o menos

    op1.style.borderRadius = "10px";

    op1.style.gap = "20px"



    // Crea el nuevo párrafo
    // Crear un contenedor div
    const contenedor = document.createElement("div");
    contenedor.style.display = "flex";
    contenedor.style.flexDirection = "column";
    contenedor.style.alignItems = "center";
    contenedor.style.justifyContent = "center";
    contenedor.style.gap = "1rem";
    contenedor.style.marginBottom = "5px";
    contenedor.style.marginTop = "-60px";
    contenedor.style.fontFamily = "'Lobster', cursive, sans-serif";
    contenedor.style.fontSize = "15px";


//-------------------------------------------------------------------------------#1    
    // Título
    textoExtra = document.createElement("h1");
    textoExtra.textContent = "¿Qué es el analfabetismo?";
    contenedor.appendChild(textoExtra);

    // Nueva línea de texto
    textoExtra2 = document.createElement("p");
    textoExtra2.innerHTML = "El analfabetismo se refiere a la incapacidad de una persona para leer y escribir. Según la Real Academia Española,<br> es la falta de instrucción elemental en un país, referida especialmente al número de sus ciudadanos que no saben leer.<br> La UNESCO amplía esta definición al considerar analfabetas a quienes no pueden comprender un texto sencillo ni<br> expresar de forma elemental hechos de su vida.";
    contenedor.appendChild(textoExtra2);

    // Imagen
    imagen1 = document.createElement("img");
    imagen1.src = "https://estudiarlo.com/wp-content/uploads/2024/03/%C2%BFQue-es-el-analfabetismo_-Explora-sus-diferentes-formas-y-causas.webp";
    imagen1.style.display = "block";
    imagen1.style.margin = "2rem auto 0 auto";
    imagen1.style.maxWidth = "50%";
    imagen1.style.borderRadius = "8px";
    contenedor.appendChild(imagen1);
//-------------------------------------------------------------------------------#2
    // Título
    textoExtra3 = document.createElement("h1");
    textoExtra3.textContent = "Estadísticas de analfabetismo en Cobán, Alta Verapaz";
    contenedor.appendChild(textoExtra3);

    // Informacion
    textoExtra4 = document.createElement("p");
    textoExtra4.innerHTML = "Un dato muy relevante es que Alta Verapaz tiene uno de los índices más altos de analfabetismo en Guatemala<br> que oscila entre el 33% al 28%. El 36% de la población adulta (entre 30 a 59 años) de Cobán no sabe leer<br> ni escribir, lo que limita significativamente su desarrollo personal, social y económico.";
    contenedor.appendChild(textoExtra4);

    // Imagen
    imagen2 = document.createElement("img");
    imagen2.src = "https://www.agenciaocote.com/wp-content/uploads/2024/01/conalfa.png";
    imagen2.style.display = "block";
    imagen2.style.margin = "2rem auto 0 auto";
    imagen2.style.maxWidth = "50%";
    imagen2.style.borderRadius = "8px";
    contenedor.appendChild(imagen2);
//-------------------------------------------------------------------------------#3
// Título
    textoExtra5 = document.createElement("h1");
    textoExtra5.textContent = "Factores que influyen en el analfabetismo en Cobán";
    contenedor.appendChild(textoExtra5);

    // Informacion
    textoExtra6 = document.createElement("p");
    textoExtra6.innerHTML = `
        <div style="text-align: center;">
        <div>
        Diversos factores contribuyen al elevado índice de analfabetismo en Cobán:
        </div>
            <ul style="display: inline-block; text-align: left; margin-left: 0; padding-left: 1.5em;">
                <li><strong>Pobreza:</strong> El 78.97% de la población de Cobán vive en condiciones de pobreza,<br> y el 25.52% en pobreza extrema .</li>
                <li><strong>Barreras lingüísticas:</strong>  La presencia de comunidades indígenas que hablan idiomas como Q'eqchí y Poqomchi'<br> enfrenta desafíos debido a la falta de materiales educativos en su lengua materna .</li>
                <li><strong>Acceso limitado a la educación:</strong> La escasez de escuelas y maestros en áreas rurales dificulta la alfabetización .</li>
            </ul>
        </div>

    `;
    contenedor.appendChild(textoExtra6);

    // Imagen
    imagen3 = document.createElement("img");
    imagen3.src = "https://www.prensalibre.com/wp-content/uploads/2018/12/76da4cd4-f424-4c3d-8e99-fc0a6fc08dae.jpg?quality=52";
    imagen3.style.display = "block";
    imagen3.style.margin = "2rem auto 0 auto";
    imagen3.style.maxWidth = "50%";
    imagen3.style.borderRadius = "8px";
    contenedor.appendChild(imagen3);

//-------------------------------------------------------------------------------#4
// Título
    textoExtra7 = document.createElement("h1");
    textoExtra7.textContent = "Impacto del analfabetismo en la vida cotidiana de Cobán";
    contenedor.appendChild(textoExtra7);

    // Informacion
    textoExtra8 = document.createElement("p");
    textoExtra8.innerHTML = `
        <div style="text-align: center;">
            <ul style="display: inline-block; text-align: left; margin-left: 0; padding-left: 1.5em;">
                <li><strong>Limitaciones laborales:</strong> Las personas analfabetas enfrentan dificultades para acceder a empleos bien remunerados.</li>
                <li><strong>Participación ciudadana reducida:</strong> La incapacidad para leer o escribir limita la participación<br> en procesos democráticos y el acceso a información esencial.</li>
                <li><strong>Acceso restringido a servicios:</strong> Dificultades para comprender instrucciones médicas o utilizar<br> servicios bancarios afectan la calidad de vida.</li>
            </ul>
            <div>
                Además, el analfabetismo perpetúa ciclos de pobreza y exclusión social, afectando no solo a individuos<br> sino también al desarrollo de la comunidad en su conjunto.
            </div>
        </div>
    `;
    textoExtra8.style.textAlign = "left";
    contenedor.appendChild(textoExtra8);
    // Imagen
    imagen4 = document.createElement("img");
    imagen4.src = "https://blog.corporacionbi.com/hubfs/LP%20-%20Fernando%20Silva%20FRCL/24_ENERO_Guatemala,-uno-de-los-pai%CC%81ses-con-mayor-i%CC%81ndice-de-analfabetismo-de-Ame%CC%81rica.jpeg";
    imagen4.style.display = "block";
    imagen4.style.margin = "2rem auto 0 auto";
    imagen4.style.maxWidth = "50%";
    imagen4.style.borderRadius = "8px";
    contenedor.appendChild(imagen4);
//-------------------------------------------------------------------------------#Boton
    // Nuevo boton de volver (después de la imagen)
    e1 = document.createElement("button");
    e1.textContent = "Volver";
    e1.style.display = "block";
    e1.style.margin = "2rem auto 0 auto";
    e1.style.padding = "0.5rem 1rem";
    contenedor.appendChild(e1);

    // Agregar el contenedor al op1
    op1.appendChild(contenedor);
    
    e1.style.border = "none";
    e1.style.cursor = "pointer";
    e1.style.fontWeight = "bold";

    e1.addEventListener("click", function ex1() {
        op1.style = "Users/jdcam/OneDrive/Escritorio/Computacion%20C4E/Colegio/Superaccion%202025/proyeccion2022.pdf";
        t.textContent = "Información";
        t.style.display = 'block';
        inf.textContent = "En esta sección encontrará más información acerca del analfabetismo en Cobán junto con gráficas e imágenes.";
        inf.style.display = 'block';
        img1.style.display='block'
        text.style.display = 'block';
        op2.style.display = '';
        op3.style.display = '';
        btn1.style.display = "";
        pie.style.display = "block";

        if (contenedor && op1.contains(contenedor)) {
            op1.removeChild(contenedor);
        }

        textoExtra = null;
        textoExtra2 = null;
        imagen1 = null;

        textoExtra3 = null;
        textoExtra4 = null;
        imagen2 = null;

        textoExtra5 = null;
        textoExtra6 = null;
        imagen3 = null;

        textoExtra7 = null;
        textoExtra8 = null;
        imagen4 = null;

        e1 = null;
});});

// Desaparecer la informacion inicial







//------------------------------------BOTOTN #2------------------------------------
btn2.addEventListener("click", function() {
    // Ocultar elementos principales
    t2.textContent = "";
    inf2.textContent = "";
    img2.style.display = "none";
    text.style.display = 'none';
    op1.style.display = 'none';
    op3.style.display = 'none'; 
    btn2.style.display = "none";

    op2.style.width = "90%";
    op2.style.borderRadius = "10px";
    op2.style.gap = "20px";
    op2.style.flex = "none" 
    

    // Crear contenedor
    const contenedor2 = document.createElement("div");
    contenedor2.style.fontFamily = "'Lobster', cursive, sans-serif";
    contenedor2.style.fontSize = "15px";
    contenedor2.style.marginTop = "-70px";
    

    // Título
    textoExtraA = document.createElement("h1");
    textoExtraA.textContent = "Teoría y Práctica:";
    contenedor2.appendChild(textoExtraA);

    // Botón 1
    const boton1 = document.createElement("button");
    boton1.textContent = "Lección 1";
    boton1.style.margin = "1rem";
    boton1.style.padding = "0.5rem 1rem";
    boton1.style.border = "none";
    boton1.style.cursor = "pointer";
    boton1.style.fontWeight = "bold";
    contenedor2.appendChild(boton1);

    boton1.addEventListener("click", function() {
        textoExtraA.textContent = "Lección 1: Lectura y Escritura Básica";
        


        // Ocultar los botones de lecciones
        boton1.style.display = "none";
        boton2.style.display = "none";
        boton3.style.display = "none";
        boton4.style.display ="none";
        e2.style.display = "none";
        
        // Crear los tres nuevos botones
        const btnVocales = document.createElement("button");
        btnVocales.textContent = "Vocales";
        btnVocales.style.margin = "1rem";
        btnVocales.style.padding = "0.5rem 1rem";
        btnVocales.style.border = "none";
        btnVocales.style.cursor = "pointer";
        btnVocales.style.fontWeight = "bold";

        const btnAbecedario = document.createElement("button");
        btnAbecedario.textContent = "Abecedario";
        btnAbecedario.style.margin = "1rem";
        btnAbecedario.style.padding = "0.5rem 1rem";
        btnAbecedario.style.border = "none";
        btnAbecedario.style.cursor = "pointer";
        btnAbecedario.style.fontWeight = "bold";

        const btnregresar = document.createElement("button");
        btnregresar.textContent = "Regresar";
        btnregresar.style.margin = "1rem";
        btnregresar.style.padding = "0.5rem 1rem";
        btnregresar.style.border = "none";
        btnregresar.style.cursor = "pointer";
        btnregresar.style.fontWeight = "bold";

        // Agregar en orden: Vocales, Abecedario, Regresar
     

        btnVocales.addEventListener("click", function() {
            textoExtraA.textContent = "Las Vocales";
            btnVocales.style.display = "none";
            btnAbecedario.style.display = "none";
            btnregresar.style.display = "none";


            // Botones de letras
            const btnLink1 = document.createElement("button");
            btnLink1.textContent = "La letra A";
            btnLink1.style.margin = "1rem";
            btnLink1.style.padding = "0.5rem 1rem";
            btnLink1.style.border = "none";
            btnLink1.style.cursor = "pointer";
            btnLink1.style.fontWeight = "bold";
            btnLink1.addEventListener("click", function() {
                window.open("https://youtu.be/K9SHmcYPyhI?si=20Uvu0XLlU601q1p", "_blank");
            });
            contenedor2.appendChild(btnLink1);

            const btnLink2 = document.createElement("button");
            btnLink2.textContent = "La letra E";
            btnLink2.style.margin = "1rem";
            btnLink2.style.padding = "0.5rem 1rem";
            btnLink2.style.border = "none";
            btnLink2.style.cursor = "pointer";
            btnLink2.style.fontWeight = "bold";
            btnLink2.addEventListener("click", function() {
                window.open("https://youtu.be/adAv_t913UY?si=XZyndNgVn87ePQnt", "_blank");
            });
            contenedor2.appendChild(btnLink2);

            const btnLink3 = document.createElement("button");
            btnLink3.textContent = "La letra I";
            btnLink3.style.margin = "1rem";
            btnLink3.style.padding = "0.5rem 1rem";
            btnLink3.style.border = "none";
            btnLink3.style.cursor = "pointer";
            btnLink3.style.fontWeight = "bold";
            btnLink3.addEventListener("click", function() {
                window.open("https://youtu.be/lHKT5QCqjGk?si=kkMgTj0M7h9MsBax", "_blank");
            });
            contenedor2.appendChild(btnLink3);

            const btnLink4 = document.createElement("button");
            btnLink4.textContent = "La letra O";
            btnLink4.style.margin = "1rem";
            btnLink4.style.padding = "0.5rem 1rem";
            btnLink4.style.border = "none";
            btnLink4.style.cursor = "pointer";
            btnLink4.style.fontWeight = "bold";
            btnLink4.addEventListener("click", function() {
                window.open("https://youtu.be/HtFvNUnopKE?si=n7xQFhvby11AzekZ", "_blank");
            });
            contenedor2.appendChild(btnLink4);

            const btnLink5 = document.createElement("button");
            btnLink5.textContent = "La letra U";
            btnLink5.style.margin = "1rem";
            btnLink5.style.padding = "0.5rem 1rem";
            btnLink5.style.border = "none";
            btnLink5.style.cursor = "pointer";
            btnLink5.style.fontWeight = "bold";
            btnLink5.addEventListener("click", function() {
                window.open("https://youtu.be/FIEmBKNdC68?si=lrcJSwIkKWOE9jOZ&t=1", "_blank");
            });
            contenedor2.appendChild(btnLink5);
            const btnPractica = document.createElement("button");
            btnPractica.textContent = "Práctica";
            btnPractica.style.margin = "1rem";
            btnPractica.style.padding = "0.5rem 1rem";
            btnPractica.style.border = "none";
            btnPractica.style.cursor = "pointer";
            btnPractica.style.fontWeight = "bold";
            btnPractica.style.backgroundColor = "#7ecbff"; // azul celeste
            btnPractica.style.color = "black";
            btnPractica.addEventListener("click", function() {
                window.open("https://create.kahoot.it/share/practica-de-vocales/028b39d9-b424-4672-989a-a84103236fbc", "_blank");
            });
            contenedor2.appendChild(btnPractica);
            // Botón para regresar a "Vocales" y "Abecedario"
            const btnRegresarVocales = document.createElement("button");
            btnRegresarVocales.textContent = "Regresar";
            btnRegresarVocales.style.margin = "1rem";
            btnRegresarVocales.style.padding = "0.5rem 1rem";
            btnRegresarVocales.style.border = "none";
            btnRegresarVocales.style.cursor = "pointer";
            btnRegresarVocales.style.fontWeight = "bold";
            btnRegresarVocales.addEventListener("click", function() {
                btnLink1.remove();
                btnLink2.remove();
                btnLink3.remove();
                btnLink4.remove();
                btnLink5.remove();
                btnPractica.remove();
                btnRegresarVocales.remove();
                textoExtraA.textContent = "Lección 1: Lectura y Escritura Básica";
                btnVocales.style.display = "inline-block";
                btnAbecedario.style.display = "inline-block";
                btnregresar.style.display = "inline-block";
            });
            contenedor2.appendChild(btnRegresarVocales);
        });

        btnAbecedario.addEventListener("click", function() {
            textoExtraA.textContent = "Abecedario";
            btnVocales.style.display = "none";
            btnAbecedario.style.display = "none";
            btnregresar.style.display = "none";

            // Aquí puedes agregar el contenido del abecedario
            const abecedarioInfo = document.createElement("div");
            abecedarioInfo.textContent = "Aquí irá el contenido del abecedario.";
            abecedarioInfo.style.margin = "1rem";
            contenedor2.appendChild(abecedarioInfo);

            // Botón para regresar a "Vocales" y "Abecedario"
            const btnRegresarAbecedario = document.createElement("button");
            btnRegresarAbecedario.textContent = "Regresar";
            btnRegresarAbecedario.style.margin = "1rem";
            btnRegresarAbecedario.style.padding = "0.5rem 1rem";
            btnRegresarAbecedario.style.border = "none";
            btnRegresarAbecedario.style.cursor = "pointer";
            btnRegresarAbecedario.style.fontWeight = "bold";
            btnRegresarAbecedario.addEventListener("click", function() {
                abecedarioInfo.remove();
                btnRegresarAbecedario.remove();
                textoExtraA.textContent = "Lección 1: Lectura y Escritura Básica";
                btnVocales.style.display = "inline-block";
                btnAbecedario.style.display = "inline-block";
                btnregresar.style.display = "inline-block";
            });
            contenedor2.appendChild(btnRegresarAbecedario);
        });

        btnregresar.addEventListener("click", function() {
            textoExtraA.textContent = "Teoría y Práctica:";
            btnVocales.remove();
            btnAbecedario.remove();
            btnregresar.remove();
            boton1.style.display = "inline-block";
            boton2.style.display = "inline-block";
            boton3.style.display = "inline-block";
            boton4.style.display = "inline-block";
            e2.style.display = "block";
        });
        
        
        contenedor2.appendChild(btnVocales);
        contenedor2.appendChild(btnAbecedario);
        contenedor2.appendChild(btnregresar);

        

        // Opcional: puedes agregar eventos a los nuevos botones aquí
    });


    // Botón 2
    const boton2 = document.createElement("button");
    boton2.textContent = "Lección 2";
    boton2.style.margin = "1rem";
    boton2.style.padding = "0.5rem 1rem";
    boton2.style.border = "none";
    boton2.style.cursor = "pointer";
    boton2.style.fontWeight = "bold";
    contenedor2.appendChild(boton2);

    boton2.addEventListener("click", function() {
        textoExtraA.textContent = "Lección 2: Habilidades cotidianas";
        // Ocultar los botones de lecciones
        boton1.style.display = "none";
        boton2.style.display = "none";
        boton3.style.display = "none";
        boton4.style.display ="none";
        e2.style.display = "none";

        // Crear los tres nuevos botones
        const btnTeoria = document.createElement("button");
        btnTeoria.textContent = "Números";
        btnTeoria.style.margin = "1rem";
        btnTeoria.style.padding = "0.5rem 1rem";
        btnTeoria.style.border = "none";
        btnTeoria.style.cursor = "pointer";
        btnTeoria.style.fontWeight = "bold";
        

        const btnPractica = document.createElement("button");
        btnPractica.textContent = "Señales";
        btnPractica.style.margin = "1rem";
        btnPractica.style.padding = "0.5rem 1rem";
        btnPractica.style.border = "none";
        btnPractica.style.cursor = "pointer";
        btnPractica.style.fontWeight = "bold";

        const btnvolver = document.createElement("button");
        btnvolver.textContent = "Regresar";
        btnvolver.style.margin = "1rem";
        btnvolver.style.padding = "0.5rem 1rem";
        btnvolver.style.border = "none";
        btnvolver.style.cursor = "pointer";
        btnvolver.style.fontWeight = "bold";

        btnvolver.addEventListener("click", function() {
            textoExtraA.textContent = "Teoría y Práctica:";
            btnTeoria.remove();
            btnPractica.remove();
            btnvolver.remove();
            boton1.style.display = "inline-block";
            boton2.style.display = "inline-block";
            boton3.style.display = "inline-block";
            boton4.style.display ="inline-block";
            e2.style.display = "block";
        });           
        contenedor2.appendChild(btnTeoria);
        contenedor2.appendChild(btnPractica);
        contenedor2.appendChild(btnvolver);
        });

 // Botón 3
    const boton3 = document.createElement("button");
    boton3.textContent = "Lección 3";
    boton3.style.margin = "1rem";
    boton3.style.padding = "0.5rem 1rem";
    boton3.style.border = "none";
    boton3.style.cursor = "pointer";
    boton3.style.fontWeight = "bold";
    contenedor2.appendChild(boton3);

    boton3.addEventListener("click", function() {
        textoExtraA.textContent = "Lección 3: Cultura general útil";
        // Ocultar los botones de lecciones
        boton1.style.display = "none";
        boton2.style.display = "none";
        boton3.style.display = "none";
        boton4.style.display ="none";
        e2.style.display = "none";

        // Crear los tres nuevos botones
        const btnTeoria = document.createElement("button");
        btnTeoria.textContent = "Países";
        btnTeoria.style.margin = "1rem";
        btnTeoria.style.padding = "0.5rem 1rem";
        btnTeoria.style.border = "none";
        btnTeoria.style.cursor = "pointer";
        btnTeoria.style.fontWeight = "bold";

        const btnPractica = document.createElement("button");
        btnPractica.textContent = "Comida";
        btnPractica.style.margin = "1rem";
        btnPractica.style.padding = "0.5rem 1rem";
        btnPractica.style.border = "none";
        btnPractica.style.cursor = "pointer";
        btnPractica.style.fontWeight = "bold";

        const btnvolver = document.createElement("button");
        btnvolver.textContent = "Regresar";
        btnvolver.style.margin = "1rem";
        btnvolver.style.padding = "0.5rem 1rem";
        btnvolver.style.border = "none";
        btnvolver.style.cursor = "pointer";
        btnvolver.style.fontWeight = "bold";

        btnvolver.addEventListener("click", function() {
            textoExtraA.textContent = "Teoría y Práctica:";
            btnTeoria.remove();
            btnPractica.remove();
            btnvolver.remove();
            boton1.style.display = "inline-block";
            boton2.style.display = "inline-block";
            boton3.style.display = "inline-block";
            boton4.style.display ="inline-block";
            e2.style.display = "block";
        });           
        contenedor2.appendChild(btnTeoria);
        contenedor2.appendChild(btnPractica);
        contenedor2.appendChild(btnvolver);
        });

// Botón 4
    const boton4 = document.createElement("button");
    boton4.textContent = "Lección 4";
    boton4.style.margin = "1rem";
    boton4.style.padding = "0.5rem 1rem";
    boton4.style.border = "none";
    boton4.style.cursor = "pointer";
    boton4.style.fontWeight = "bold";
    contenedor2.appendChild(boton4);

    boton4.addEventListener("click", function() {
        textoExtraA.textContent = "Lección 4: Comprensión Lectora";
        // Ocultar los botones de lecciones
        boton1.style.display = "none";
        boton2.style.display = "none";
        boton3.style.display = "none";
        boton4.style.display ="none";
        e2.style.display = "none";

        // Crear los tres nuevos botones
        const btnTeoria = document.createElement("button");
        btnTeoria.textContent = "Lectura";
        btnTeoria.style.margin = "1rem";
        btnTeoria.style.padding = "0.5rem 1rem";
        btnTeoria.style.border = "none";
        btnTeoria.style.cursor = "pointer";
        btnTeoria.style.fontWeight = "bold";

        const btnPractica = document.createElement("button");
        btnPractica.textContent = "Historia";
        btnPractica.style.margin = "1rem";
        btnPractica.style.padding = "0.5rem 1rem";
        btnPractica.style.border = "none";
        btnPractica.style.cursor = "pointer";
        btnPractica.style.fontWeight = "bold";

        const btnvolver = document.createElement("button");
        btnvolver.textContent = "Regresar";
        btnvolver.style.margin = "1rem";
        btnvolver.style.padding = "0.5rem 1rem";
        btnvolver.style.border = "none";
        btnvolver.style.cursor = "pointer";
        btnvolver.style.fontWeight = "bold";

        btnvolver.addEventListener("click", function() {
            textoExtraA.textContent = "Teoría y Práctica:";
            btnTeoria.remove();
            btnPractica.remove();
            btnvolver.remove();
            boton1.style.display = "inline-block";
            boton2.style.display = "inline-block";
            boton3.style.display = "inline-block";
            boton4.style.display = "inline-block";
            e2.style.display = "block";
        });           
        contenedor2.appendChild(btnTeoria);
        contenedor2.appendChild(btnPractica);
        contenedor2.appendChild(btnvolver);
        });
    // Botón Volver
    const e2 = document.createElement("button");
    e2.textContent = "Volver";
    e2.style.display = "block";
    e2.style.margin = "2rem auto 0 auto";
    e2.style.padding = "0.5rem 1rem";
    e2.style.border = "none";
    e2.style.cursor = "pointer";
    e2.style.fontWeight = "bold";
    contenedor2.appendChild(e2);

    // Agregar el contenedor al op2
    op2.appendChild(contenedor2);

    e2.addEventListener("click", function() {
        op2.style = "";
        t2.textContent = "Lecciones";
        t2.style.display = 'block';
        inf2.textContent = "En esta sección podrá realizar ejercicios de escritura, lectura y comprensión para aprender a leer y a comprender el significado de palabras.";
        inf2.style.display = 'block';
        img2.style.display = 'block';
        text.style.display = 'block';
        op1.style.display = '';
        op3.style.display = '';
        btn2.style.display = "";

        if (contenedor2 && op2.contains(contenedor2)) {
            op2.removeChild(contenedor2);
        }
    });
});

btn3.addEventListener("click", function () {


    img3.style.display = "none";
    inf3.style.display = "none";
    t3.style.display = "none";
    text.style.display = 'none';
    op2.style.display = 'none';
    op1.style.display = 'none'; 
    btn3.style.display = "none";

    op3.style.width = "100%"
    op3.style.height = "100%"
    op3.style.marginTop = "10%"

    const contenedor3 = document.createElement("div"); // Crea un div contenedor principal para la sección de contacto
    contenedor3.style.display = "flex"; // Usa flexbox para alinear los elementos hijos
    contenedor3.style.alignItems = "center"; // Centra verticalmente los elementos dentro del contenedor
    contenedor3.style.gap = "2rem"; // Espacio entre los elementos hijos
    contenedor3.style.fontFamily = "'Lobster', cursive, sans-serif"; // Fuente personalizada
    contenedor3.style.fontSize = "15px"; // Tamaño de fuente
    contenedor3.style.marginTop = "-60px"; // Margen superior negativo para ajustar la posición

    // Imagen al lado del texto (ahora primero)
    const imagenLado = document.createElement("img"); // Crea un elemento img para mostrar una imagen de contacto
    imagenLado.src = "https://cdn-icons-png.flaticon.com/512/747/747376.png"; // Asigna la URL de la imagen
    imagenLado.alt = "Contacto"; // Texto alternativo para la imagen
    imagenLado.style.maxWidth = "120px"; // Limita el ancho máximo de la imagen
    imagenLado.style.borderRadius = "8px"; // Bordes redondeados para la imagen
    // Crear el QR y colocarlo debajo de la imagen principal
    const qr = document.createElement("img");
    qr.src = "Image_qr.png"; // Asigna la URL de la imagen QR aquí
    qr.alt = "Contacto QR";
    qr.style.maxWidth = "120px";
    qr.style.borderRadius = "8px";
    qr.style.display = "block";
    qr.style.margin = "1rem auto 0 auto";
    const tex = document.createElement("p");
    tex.textContent = "Si estas interesado escanea el codigo QR:";
    tex.style.textAlign = "center";
    tex.style.fontWeight = "bold";
    tex.style.fontSize = "10px";
    tex.style.margin = "3rem 0 0 0";
    // Crear un contenedor para imagen y QR en columna
    const imgColumna = document.createElement("div");
    imgColumna.style.display = "flex";
    imgColumna.style.flexDirection = "column";
    imgColumna.style.alignItems = "center";
    imgColumna.appendChild(imagenLado);
    imgColumna.appendChild(tex);
    imgColumna.appendChild(qr);
    contenedor3.appendChild(imgColumna);

    // Contenedor para el texto (h1 y p)
    const textoContenedor = document.createElement("div"); // Crea un div para agrupar el título y el párrafo
    textoContenedor.style.display = "flex"; // Usa flexbox para el texto
    textoContenedor.style.flexDirection = "column"; // Apila los elementos verticalmente
    textoContenedor.style.gap = "0.5rem"; // Espacio entre el título y el párrafo
    textoContenedor.style.marginTop = "3rem"; // Aumenta este valor para bajar más el texto

    // Título
    textoExtraB = document.createElement("h1"); // Crea un elemento h1 para el título
    textoExtraB.textContent = "Sobre nosotros:"; // Asigna el texto al título
    textoContenedor.appendChild(textoExtraB); // Agrega el título al contenedor de texto

    // Párrafo debajo del h1
    const parrafo = document.createElement("p"); // Crea un elemento p para el párrafo
    parrafo.innerHTML = "Somos el grupo 1 del grado C4E del Colegio Suizo Americano San Cristóbal.<br>Esta iniciativa fue pensada para nuestro proyecto de Superacción 2025 sin fines de lucro."; // Asigna el texto al párrafo
    parrafo.style.fontSize = "20px";
    textoContenedor.appendChild(parrafo); // Agrega el párrafo al contenedor de texto

    const textoExtraC = document.createElement("h1"); // Crea un elemento h1 para el título
    textoExtraC.textContent = "Nuestro objetivo"; // Asigna el texto al título
    textoContenedor.appendChild(textoExtraC); // Agrega el título al contenedor de texto

    // Párrafo debajo del h1
    const parrafo2 = document.createElement("p");
    parrafo2.innerHTML = "Buscamos implementar nuestro proyecto “Luz en Cobán” para contrarrestar el analfabetismo en Cobán,<br>Alta Verapaz. El propósito es reducir el analfabetismo y mejorar la calidad de vida de la población, y en un<br>futuro, ampliar este proyecto para personas de todas las edades. Nosotros esperamos que con nuestro<br>proyecto, para el próximo censo en 2028, el analfabetismo en personas adultas disminuya a menos del 8%.";
    parrafo2.style.textAlign = "justify"; // Justifica el texto
    parrafo2.style.textAlign = "center";
    parrafo2.style.fontSize = "20px";
    textoContenedor.appendChild(parrafo2); // Agrega el párrafo al contenedor de texto

    const redesText = document.createElement("p");
    redesText.textContent = "Si quieres saber más, contáctanos por nuestras redes sociales:";
    redesText.style.textAlign = "center";
    redesText.style.fontSize = "10px";
    redesText.style.fontWeight = "bold";
    redesText.style.margin = "1rem 0 0 0";

    textoContenedor.appendChild(redesText);

    const redes = document.createElement("div");
    redes.style.display = "flex";
    redes.style.justifyContent = "center";
    redes.style.gap = "1.5rem";
    redes.style.margin = "2rem 0";

    
    // Imagen 1
    const imgA = document.createElement("img");
    imgA.src = "https://cdn-icons-png.flaticon.com/512/733/733547.png"; // Ejemplo: icono de Facebook
    imgA.alt = "Facebook";
    imgA.style.width = "60px";
    imgA.style.height = "60px";
    imgA.style.borderRadius = "8px";
 

    // Imagen 2
    // Imagen 2 con enlace
    const linkB = document.createElement("a");
    linkB.href = "https://www.instagram.com/sal_mon659/?utm_source=ig_web_button_share_sheet;" // Cambia la URL al perfil real si lo tienes
    linkB.target = "_blank";
    const imgB = document.createElement("img");
    imgB.src = "https://cdn-icons-png.flaticon.com/512/733/733558.png"; // Ejemplo: icono de Instagram
    imgB.alt = "Instagram";
    imgB.style.width = "60px";
    imgB.style.height = "60px";
    imgB.style.borderRadius = "8px";

    // Imagen 3
    const imgC = document.createElement("img");
    imgC.src = "https://cdn-icons-png.flaticon.com/512/733/733579.png"; // Ejemplo: icono de Twitter
    imgC.alt = "Twitter";
    imgC.style.width = "60px";
    imgC.style.height = "60px";
    imgC.style.borderRadius = "8px";
    

    redes.appendChild(imgA);
    linkB.appendChild(imgB);
    redes.appendChild(linkB);
    redes.appendChild(imgC);
    textoContenedor.appendChild(redes);
    contenedor3.appendChild(textoContenedor); // Agrega el contenedor de texto al contenedor principal
    op3.appendChild(contenedor3);
    // Crear el botón "Volver"
    const contn = document.createElement("div");
    e3 = document.createElement("button");
    e3.textContent = "Volver";
    e3.style.display = "block";
    e3.style.margin = "1rem auto 0 auto";
    e3.style.padding = "0.5rem 1rem";
    e3.style.border = "none";
    e3.style.cursor = "pointer";
    e3.style.fontWeight = "bold";
    contn.appendChild(e3);
    op3.appendChild(contn);

    // Agregar el contenedor al op3
    

    e3.addEventListener("click", function () {
        op3.style = "";
        t3.textContent = "Contáctanos";
        t3.style.display = 'block';
        inf3.textContent = "Si tienes alguna duda o pregunta acerca del proyecto, puedes contactarnos a través de nuestras redes sociales.";
        inf3.style.display = 'block';
        textoExtraB.style.display = 'block';
        img3.style.display = 'block';
        text.style.display = 'block';
        op1.style.display = '';
        op2.style.display = '';
        btn3.style.display = "";

        if (contenedor3 && op3.contains(contenedor3)) {
            op3.removeChild(contenedor3);
            op3.removeChild(contn);
        }
        e3 = null;
    });
});
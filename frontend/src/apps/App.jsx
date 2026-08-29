import { useEffect, useState } from "react";
import '../components/App.css';
import paisaje from "../assets/lugares/paisaje.jpg";
import teotihuacan from "../assets/lugares/Teotihuacán.png";
import matematicas from "../assets/materias/matemáticas.jpg";
import banana from "../assets/frutas/banana.jpg";
import fresa from "../assets/frutas/fresa.jpg";
import manzana from "../assets/frutas/manzana.jpg";
import naranja from "../assets/frutas/naranja.jpg";
import uva from "../assets/frutas/uva.jpg";
import fantasy from "../assets/fondos/fantasy.png";
import pug from "../assets/animales/pug.jpg";

import {
    Section,
    Container,
    ClickContainer,
    Image,
    ImgHeader,
    ToggleContent,
    ImgContainer,
    ButtonX
} from "./Primitive";


//Tabulador sencillo de funciones
function Tabulador() {
    const [arrayX, setArrayX] = useState([]);

    function oneToTen() {
        setArrayX([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }

    function addFirst() {
        const x = document.getElementById("x").value;
        setArrayX([x, ...arrayX]);
    }


    function addLast() {
        const x = document.getElementById("x").value;
        setArrayX([...arrayX, x]);
    }

    function deleteElement() {
        const x = document.getElementById("x").value;
        setArrayX(arrayX.filter((item) => item != x));
    }

    function deleteAll() {
        setArrayX([]);
    }

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    return (
        <>
            <Container width="80%" color="transparent" layoutClasses={"equalFlex childPaddingS"}>
                <div>
                    Valores de x: <input type="number" id="x"></input><br />
                    <button onClick={addFirst}>Agregar al inicio</button><br />
                    <button onClick={addLast}>Agregar al final</button><br />
                    <button onClick={deleteElement}>Borrar elemento</button><br />
                    <button onClick={deleteAll}>Borrar todo</button><br />
                    <button onClick={oneToTen}>1 al 10</button><br />

                    Función f(x):
                    <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))}></input>x +
                    <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))}></input>
                </div>
                <Container width="100%" color="transparent" layoutClasses={"flexH"}>
                    <div style={{ flex: 1 }}>
                        <Section content="x" layoutClasses={"center border"}></Section>
                        {arrayX.map((x, index) => (
                            <Section key={index} content={x} layoutClasses={"center border"}></Section>
                        ))}
                    </div>
                    <div style={{ flex: 4 }}>
                        <Section content="f(x)" layoutClasses={"center border"}></Section>
                        {arrayX.map((x, index) => (
                            <Section key={index} content={a * x + b} layoutClasses={"center border"}></Section>
                        ))}
                    </div>
                </Container>
            </Container>

        </>
    )

}

//Acomodador de arreglos
function ArrayP() {
    const nombres = ["Ana", "Bety", "Carlos", "Diego", "Elena", "Fer", "Gloria", "Hugo"];
    return (
        <>
            <Container width="300px" height="700px" radius="30px" color="#7BE0AD" layoutClasses={"flexV childPaddingS justifyEvenly alignCenter border center"}>
                {nombres.map((nombre) => {
                    return <Container width="70%" radius="30px" color={"yellow"} layoutClasses={"border center"} key={nombre}>
                        {nombre}
                    </Container>
                })}
            </Container>
        </>
    )
}


//Login controlado
function LoginControlado() {

    //Filtros de input
    class Filtro {
        constructor(nombre, regex, mensaje) {
            this.nombre = nombre;
            this.regex = regex;
            this.mensaje = mensaje;
        }
    }

    const soloMinusculas = new Filtro(
        "soloMinusculas",
        /^[a-z]+$/,
        "El campo debe contener solo minúsculas"
    );

    const soloMayusculas = new Filtro(
        "soloMayusculas",
        /^[A-Z]+$/,
        "El campo debe contener solo mayúsculas"
    );

    const soloLetras = new Filtro(
        "soloLetras",
        /^[A-Za-z]+$/,
        "El campo debe contener solo letras"
    );

    const soloNumeros = new Filtro(
        "soloNumeros",
        /^[0-9]+$/,
        "El campo debe contener solo números"
    );

    const contieneNumero = new Filtro(
        "contieneNumero",
        /[0-9]/,
        "El campo debe contener al menos un número"
    );

    const sinCaracteresEspeciales = new Filtro(
        "sinCaracteresEspeciales",
        /^[A-Za-z0-9]+$/,
        "El campo no debe contener caracteres especiales"
    );

    const iniciaMayuscula = new Filtro(
        "iniciaMayuscula",
        /^[A-Z]/,
        "El campo debe iniciar con una letra mayúscula"
    );

    const correoElectronico = new Filtro(
        "correoElectronico",
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "El campo debe contener un correo electrónico válido"
    );

    const fechaDDMMAAAA = new Filtro(
        "fechaDDMMAAAA",
        /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/,
        "El campo debe tener el formato DD/MM/AAAA"
    );

    const unaMayuscula = new Filtro(
        "unaMayuscula",
        /[A-Z]/,
        "El campo debe contener al menos una mayúscula"
    );

    const unoEspecial = new Filtro(
        "unoEspecial",
        /[^A-Za-z0-9]/,
        "El campo debe contener al menos un carácter especial"
    );

    const iniciaConA = new Filtro(
        "iniciaConA",
        /^A/,
        "El campo debe iniciar con la letra A mayúscula"
    );

    const curp = new Filtro(
        "curp",
        /^[A-Z]{4}[0-9]{6}[A-Z]{6}[A-Z0-9][0-9]$/,
        "El campo debe tener un formato CURP válido"
    );

    const [nombre, setNombre] = useState("");
    const [nombreValido, setNombreValido] = useState(true);

    const [contra, setContra] = useState("");
    const [contraValido, setContraValido] = useState(true);

    //Restricciones de nombre
    function validateNombre(nombre) {
        return (iniciaMayuscula.regex).test(nombre);
    }

    //Restricciones de contraseña
    function validateContra(contra) {
        return contra.length > 8 &&
            (unaMayuscula.regex).test(contra) &&
            (unoEspecial.regex).test(contra) &&
            (contieneNumero.regex).test(contra);
    }


    //input -> handle -> setNombre guarda el input -> validateNombre lo checa y manda true -> setNombreValido cambia a true
    function handleNombreChange(e) {
        const valor = e.target.value;

        setNombre(valor);
        setNombreValido(validateNombre(valor));
    }

    function handleContraChange(e) {
        const valor = e.target.value;

        setContra(valor);
        setContraValido(validateContra(valor));
    }


    return (
        <>
            <div className="formSection">
                <h4>Iniciar sesión</h4>
                <form id="formIniciarSesión">
                    <label htmlFor="nombre">Nombre:
                        <input value={nombre} type="text" id="nombre" name="nombre" onChange={handleNombreChange} /><br />
                    </label>
                    <label htmlFor="contra">Contraseña:
                        <input value={contra} type="password" id="contra" name="contra" onChange={handleContraChange} /><br />
                    </label>
                    <Container layoutClasses={"fontRed"}>
                        {!nombreValido && <p>El nombre debe iniciar con mayúscula.</p>}
                        {!contraValido && <p>La contraseña debe contener mínimo 8 caracteres, una mayúscula, un número y un caracter especial.</p>}
                    </Container>
                </form>
            </div>
        </>
    )
}

//Formulario
function Formulario() {

    return (
        <>
            <h1>Pregunta de opción múltiple</h1>
            <form id="formMultiple">


                <label>
                    <input type="radio" name="color" value="rojo" />
                    Rojo
                </label>

                <label>
                    <input type="radio" name="color" value="azul" />
                    Azul
                </label>

                <label>
                    <input type="radio" name="color" value="verde" />
                    Verde
                </label>


            </form>
        </>
    )

}

/*
function App9() {
    const [usuarios, setUsuarios] = useState([]);

    async function getUsuarios() {
        const respuesta = await fetch("http://localhost:3000/usuarios");
        const datos = await respuesta.json();
        setUsuarios(datos);
    }

    function init() {
        getUsuarios();
    }

    useEffect(init, []);

    return (
        <div>
            <h1>Usuarios</h1>
            {usuarios.map((usuario) => (
                <p key={usuario._id}>
                    {usuario.correo}
                </p>
            ))}
        </div>
    );
}
    */

//Pop-up window
function PopupWindow({ title, subtitle, content }) {
    const [visible, setVisible] = useState(true);
    return (
        <>
            {visible && (
                <Container width="50%" radius="20px" color="#7BE0AD" layoutClasses={"flexV popUp padding childPaddingS"}>
                    <Section title={title} subtitle={subtitle} content={content} layoutClasses="center" />
                    <ButtonX onClick={() => setVisible(false)}
                        width="100px" color="green" radius="20px" layoutClasses={"center centerButton"}
                    >Cerrar</ButtonX>
                </Container>
            )}
        </>
    );
}



//NAVBAR HORIZONTAL
//Función utilizada en App: setDynamic
function NavBarH({ nombre, colorHover, layoutClasses, clickFunction }) {
    return (
        <Container height="100px" color="#231651" layoutClasses={`equalFlex fontWhite center ${layoutClasses}`}>
            <ClickContainer clickFunction={clickFunction} state={0}>
                <Section height="100%" title="Componentes primitivos" layoutClasses={"hover flexH justifyCenter alignCenter"} />
            </ClickContainer>

            <ClickContainer clickFunction={clickFunction} state={1}>
                <Section height="100%" title="Componentes sencillos" layoutClasses={"hover flexH justifyCenter alignCenter"} />
            </ClickContainer>

            <ClickContainer clickFunction={clickFunction} state={2}>
                <Section height="100%" title="Componentes complejos" layoutClasses={"hover flexH justifyCenter alignCenter"} />
            </ClickContainer>
        </Container>

    );
}

//NAVBAR VERTICAL
//Función utilizada en App: N.A.
function NavBarV({ nombre, colorHover, width, layoutClasses, clickFunction }) {
    return (
        <Container height="400px" color="#FF8484" layoutClasses={`flexV equalFlex center ${layoutClasses}`}>
            <ClickContainer clickFunction={clickFunction} state={0}>
                <Section height="100%" title="Elemento 1" layoutClasses={"hover flexH justifyCenter alignCenter"} />
            </ClickContainer>

            <ClickContainer clickFunction={clickFunction} state={1}>
                <Section height="100%" title="Elemento 2" layoutClasses={"hover flexH justifyCenter alignCenter"} />
            </ClickContainer>

            <ClickContainer clickFunction={clickFunction} state={2}>
                <Section height="100%" title="Elemento 3" layoutClasses={"hover flexH justifyCenter alignCenter"} />
            </ClickContainer>

            <ClickContainer clickFunction={clickFunction} state={3}>
                <Section height="100%" title="Elemento 4" layoutClasses={"hover flexH justifyCenter alignCenter"} />
            </ClickContainer>

            <ClickContainer clickFunction={clickFunction} state={4}>
                <Section height="100%" title="Elemento 5" layoutClasses={"hover flexH justifyCenter alignCenter"} />
            </ClickContainer>
        </Container>
    );
}

function MainContainer0() {
    return (
        <>
            <Container layoutClasses={"padding flexV"}>
                <Section title="Componentes primitivos" />
                <Section
                    subtitle="Container"
                    
                    content="Contenedor reutilizable que permite definir dimensiones, color, bordes redondeados, clases de distribución y contenido mediante children."
                />

                <Container
                    width="80%"
                    height="150px"
                    radius="20px"
                    color="#7BE0AD"
                    layoutClasses={"center flexH justifyCenter alignCenter"}
                >
                    <h2>Ejemplo de Container</h2>
                </Container>


                <Section
                    subtitle="Section"
                    
                    content="Componente utilizado para mostrar un título, subtítulo y contenido."
                />

                <Section
                    width="80%"
                    height="150px"
                    title="Ejemplo de Section"
                    subtitle="Este es el subtítulo"
                    content="Este es el contenido de la sección."
                    layoutClasses={"center"}
                />


                <Section
                    subtitle="ClickContainer"
                    
                    content="Contenedor que permite ejecutar una función al hacer clic sobre él."
                />

                <ClickContainer
                    width="80%"
                    height="100px"
                    radius="15px"
                    color="#FF8484"
                    layoutClasses={"center"}
                    clickFunction={(state) => alert(`Estado seleccionado: ${state}`)}
                    state={1}
                >
                    <Section
                        title="Haz clic aquí"
                        subtitle="ClickContainer"
                        content="Este contenedor ejecuta una función al hacer clic."
                    />
                </ClickContainer>


                <Section
                    subtitle="Image"
                    
                    content="Componente utilizado para mostrar imágenes con dimensiones y bordes personalizados."
                />

                <Image
                    src={manzana}
                    alt="Manzana"
                    width="250px"
                    height="200px"
                    radius="25px"
                />
                
                <Image
                    src={naranja}
                    alt="Naranja"
                    width="150px"
                    radius="0"
                />

                <Image
                    src={uva}
                    alt="Uva"
                    width="300px"
                    height="150px"
                    radius="100%"
                />

                <Section
                    subtitle="ImgContainer"
                    
                    content="Contenedor que utiliza una imagen como fondo y permite colocar contenido dentro de ella."
                />

                <ImgContainer
                    src={fantasy}
                    width="80%"
                    height="250px"
                    radius="20px"
                    layoutClasses={"flexV justifyCenter alignCenter fontWhite"}
                >
                    <Section
                        title="Contenido sobre una imagen"
                        subtitle="ImgContainer"
                        content="El contenido se muestra sobre la imagen de fondo."
                        layoutClasses={"center"}
                    />
                </ImgContainer>


                <Section
                    subtitle="ImgHeader"
                    
                    content="Componente utilizado para crear encabezados con una imagen de fondo."
                />

                <ImgHeader src={fantasy}>
                    <Section
                        title="Mi encabezado"
                        subtitle="Ejemplo de ImgHeader"
                        content="Este contenido se encuentra dentro del encabezado."
                        layoutClasses={"fontWhite center fontM"}
                    />
                </ImgHeader>


                <Section
                    subtitle="ToggleContent"
                    
                    content="Componente que permite mostrar u ocultar contenido mediante un clic."
                />

                <ToggleContent title="Mostrar contenido">
                    <Container
                        width="80%"
                        height="100px"
                        radius="15px"
                        color="#7BE0AD"
                        layoutClasses={"center"}
                    >
                        <Section
                            title="Contenido visible"
                            content="Este contenido aparece y desaparece al hacer clic."
                        />
                    </Container>
                </ToggleContent>


                <Section
                    subtitle="ButtonX"
                    
                    content="Componente utilizado para crear botones reutilizables a partir de un Container."
                />

                <ButtonX
                    width="200px"
                    radius="15px"
                    color="#231651"
                    layoutClasses={"fontWhite center"}
                    onClick={() => alert("Botón presionado")}
                >
                    <Section title="Aceptar" />
                </ButtonX>

            </Container>
        </>
    )
}

function MainContainer1() {
    return (
        <>
            <Container layoutClasses={"padding flexV"}>
                <Section title="Componentes sencillos" />
                <Section subtitle="1. Etiqueta simple con imagen" />
                <Container width="300px" radius="30px" color="#7BE0AD" layoutClasses={"flexV padding equalFlex center"}>
                    <Section title="TEOTIHUACÁN" subtitle="La ciudad de los Dioses"
                        content="Explora una de las ciudades más impresionantes del México antiguo y maravíllate con sus enormes pirámides, templos y antiguos murales." />
                    <Image src={teotihuacan} alt="Paisaje" width="70%" radius="30px" />
                </Container>

                <Section subtitle="2. Etiqueta escolar" />
                <Container width="500px" radius="30px" color="#F2C14E" layoutClasses={"flex33_66 alignCenter childPaddingS"}>
                    <Image src={matematicas} alt="Paisaje" width="100%" height="auto" radius="30px" />
                    <Section title="Matemáticas" subtitle="Alumno: José Rodrigo Benítez Rivera" content="Maestra: Ana Laura Rivera López" />
                </Container>

                <Section subtitle="3. Reel de 5 imágenes" />
                <Container width="100%" radius="0" color="#7BE0AD" layoutClasses={"equalFlex childPaddingS"}>
                    <Image src={banana} alt="Banana" width="100%" height="100%" radius="0" />
                    <Image src={fresa} alt="Fresa" width="100%" height="100%" radius="0" />
                    <Image src={manzana} alt="Manzana" width="100%" height="100%" radius="0" />
                    <Image src={naranja} alt="Naranja" width="100%" height="100%" radius="0" />
                    <Image src={uva} alt="Uva" width="100%" height="100%" radius="0" />
                </Container>

                <Section subtitle="4. Separador de libros" />
                <ImgContainer src={fantasy} width="800px" height="200px" radius="250px" layoutClasses={"flexH justifyCenter alignCenter childPaddingS"}>
                    <Section content="Cada línea de código te acerca a tu meta" layoutClasses={"fontM"} />
                </ImgContainer>
                <Section title="Más componentes serán agregado con el tiempo" />
            </Container>
        </>
    );
}


function MainContainer2() {
    return (
        <>
            <Container layoutClasses={"padding flexV"}>
                <Section title="Componentes dinámicos" />

                <Section subtitle="1. Sección activada al dar clic" />
                <ToggleContent title="Da clic aquí para mostrar un perrito adorable">
                    <Image src={pug} alt="Paisaje" width="70%" radius="30px" />
                </ToggleContent>

                <Section subtitle="2. Mostrador de arreglo" />
                <ArrayP />

                <Section subtitle="3. Tabulador de funciones lineales" />
                <Tabulador />

                <Section subtitle="4. Login controlado con restriciones en inputs" />
                <LoginControlado />
                <Section title="Más componentes serán agregado con el tiempo" />
            </Container>
        </>
    );
}



function App() {

    //Función de navBarH
    const containersArray = [MainContainer0, MainContainer1, MainContainer2];
    const [dynamic, setDynamic] = useState(0);

    function DynamicContainer({ width, height, radius, color, children, layoutClasses }) {
        const Dynamic = containersArray[dynamic];

        return <Dynamic />;
    }

    return (
        <>
            <PopupWindow title="Bienvenido" 
            subtitle="Este portafolio contiene una colección de pequeños proyectos y trabajos realizados con React" 
            content="Con el paso del tiempo se irán agregando nuevos proyectos y evidencias. Haz clic en Aceptar para cerrar esta ventana emergente." />

            <ImgHeader src={paisaje}>
                <Container color="transparent fontM">
                    <Section
                        title="Portafolio de React"
                        content="Creador: José Rodrigo Benítez Rivera" />
                </Container>
            </ImgHeader>

            <NavBarH layoutClasses={"sticky"} clickFunction={setDynamic} />

            <Container color="#D6FFF6" layoutClasses={"flex25_75 justifyCenter"}>
                <NavBarV/>
                <DynamicContainer />
            </Container>
        </>
    );
}

export default App;

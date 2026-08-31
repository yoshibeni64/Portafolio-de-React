import { useEffect, useState } from "react";
import '../components/App.css';

//Sección simple
function Section({width, height, title, subtitle, content, layoutClasses}) {
    return (
        <>
        <div className={layoutClasses}
        style={{width: width, height: height}}
        >
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <span>{content}</span>
        </div>
        </>
    )
}

//Contenedor sencillo
function Container({width, height, radius, color, children, layoutClasses}) {
    return (
        <div
            className={`flex ${layoutClasses}`}
            style={{width: width, height:height, borderRadius: radius, backgroundColor: color}}
                
        >
            {children}
        </div>
    )
}

//Contenedor clickeable
function ClickContainer({width, height, radius, color, children, layoutClasses, clickFunction, state}) {
    return (
        <div
            className={`flex hover ${layoutClasses}`}
            style={{width: width, height:height, borderRadius: radius, backgroundColor: color}}
            onClick={() => clickFunction(state)}
        >
            {children}
        </div>
    )
}




//Imagen
function Image({src, alt, width, height, radius}) {
    return (
        <div>        
            <img src={src} width={width} height={height}
            style={{ borderRadius: radius }}
            ></img>
        </div>
    )
}


//Encabezado
function ImgHeader({ src, children }) {
    return (
        <ImgContainer src={src} width="100%" height="300px" radius="0" layoutClasses={"flexV justifyCenter fontL center alignCenter childPaddingL"}>
            {children}
        </ImgContainer>
    );
}

//Apartado con propiedades de toggle
function ToggleContent({title, children}) {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className="hover" onClick={() => setVisible(!visible)}>
                {title}
            </div>

            {visible && children}
        </>
    )
}

//Fondo con imagen de fondo
function ImgContainer({src, width, height, radius, children, layoutClasses}) {
    return (
        <div
            className={layoutClasses}
            style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: width,
                height: height,
                borderRadius: radius
            }}
        >
            {children}
        </div>
    );
}

function ButtonX({children, onClick, 
    width, radius, color, layoutClasses}) {
    return (
        <Container width={width} radius={radius} color={color} layoutClasses={layoutClasses}>
            <div onClick={onClick}>
                {children}
            </div>
        </Container>
    )
}


export {
    Section,
    Container,
    ClickContainer,
    Image,
    ImgHeader,
    ToggleContent,
    ImgContainer,
    ButtonX
};
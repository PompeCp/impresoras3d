import { Navbar } from "../shared";
import Footer from "../shared/Footer";
import { default as _ReactPlayer } from "react-player/youtube";
import { ReactPlayerProps } from "react-player/types/lib";
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

import Flor from "../assets/flor.png";
import Fine from "../assets/fine.png";
import D20 from "../assets/d20.png";
import Herramienta from "../assets/herramienta.png";
import Cluts from "../assets/cult.png";
import Cura from "../assets/cura.png";

const diseño = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <img src={Flor} className="container__flor" />
        <img src={Fine} className="container__fine" />
        <h1 className="container__title">Preparacion de diseño</h1>
      </div>
      <div className="concep">
        <p className="concep__par">
          Para realizar nuestro diseño necesitamos una herramienta de modelado
          3D, permite moldear y diseñar una figura geométrica para convertirlo
          en lo que nosotros queramos como lo puede ser una pieza de ingeniería,
          una figura, un personaje o souvenir. El abanico de posibilidades es
          muy grande, hay diferentes tipos de programas para diseño 3D
        </p>
      </div>
      <div className="herramienta">
        <div className="container-info__sub">
          <h1 className="container-info__sub__title">Herramientas 3D</h1>
        </div>
      </div>
      <div className="herramienta center">
        <div className="herramienta__img">
          <p>
            Aquí hay unos cuantos software de modelado 3D, todos son de uso
            gratuito y cada uno se usa en diferentes hábitos:
          </p>
          <img className="herramienta__img__on" src={Herramienta} alt="" />
        </div>
      </div>

      <div className="container">
        <img src={Flor} className="container__flor" />
        <img src={D20} className="container__D20" />
        <h1 className="container__title">Uso basico de Blender</h1>
      </div>
      <div className=" herramienta__bg center">
        <div className="herramienta__bg__vid">
          <p>
            en este video se explica cada uno de las herramientas basicas de
            blender como lo son seleccionar, el cursos, mover, rotar,
            redimencionar, transformar, anotaciones, medicion y el agregar cubos
            ademas del uso de la camara los diferentes modos y modos del modo
            edicion
          </p>
          <ReactPlayer
            height="100%"
            width="100%"
            url="https://www.youtube.com/watch?v=3b9ImRXvI1Y"
          />
        </div>
      </div>
      <div className="herramienta"></div>
      <div className="contpro">
        <div className="contpro__int">
          <div className="container-info__subb">
            <h1 className="container-info__sub__title">Plataformas de STL</h1>
          </div>
          <div className="contpro__int__1">
            <p>
              Uno de los formatos más utilizados para representar modelos
              tridimensionales es el STL, cuyas siglas significan 'Standard
              Triangle Language'. Este formato emplea una malla compuesta por
              triángulos, en la que cada triángulo contiene información sobre su
              ubicación y está definido tanto en su interior como en su
              exterior. En comparación con otros formatos, como los utilizados
              en software de diseño asistido por computadora (CAD), que suelen
              guardar principalmente información externa, el STL proporciona
              detalles más completos y detallados para la representación de
              modelos tridimensionales. Existen una cantidad grande de
              plataformas donde se pueden subir y descargar modelos stl estas
              son Culst, Free3D o MyMiniFactory, estas tiene una gran variedad
              de modelos stl para descargar de manera gratuita todos estos stl
              se podran utilizar
            </p>
            <img src={Cluts} className="" />
          </div>

          <div className="herramienta__bg__vid">
            <p>
              aqui se puede ver como se usa la plataforma y como se descargarn
              los archivos stl para seguidamente ser procesado en el Slicer
            </p>
            <ReactPlayer
              height="100%"
              width="100%"
              url="https://youtu.be/9XTz6HMqmSs"
            />
          </div>
          <div>
            <div
              className="container-info__subb"
              style={{ paddingTop: "20px" }}
            >
              <h1 className="container-info__sub__title">Plataforma Cura</h1>
            </div>
            <div className="contpro__int__1">
              <p>
                El programa a utilizar es llamado Ultimake Cura este nos servira
                para convertir de stl a el formato que lee nuestra impresora
                permite importar modelos 3D, ajustar la configuración de
                impresión (como la calidad de la impresión, el relleno, la
                velocidad de impresión, etc.) y generar instrucciones de
                impresión en formato G-code, que es el lenguaje que entienden
                las impresoras 3D. su uso es muy sencillo en el vide siguiente
                podremos visualisar el como ingresar nuestro modelo y prepararlo
                para imprimir
              </p>
              <img src={Cura} className="" />
            </div>
            <div className="herramienta__bg__vid">
              <ReactPlayer
                height="100%"
                width="100%"
                url="https://youtu.be/hbZfENZ4BhA"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default diseño;

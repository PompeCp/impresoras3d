import { Navbar } from "../shared";
import Footer from "../shared/Footer";
import { default as _ReactPlayer } from "react-player/youtube";
import { ReactPlayerProps } from "react-player/types/lib";
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

import Flor from "../assets/flor.png";

import Capi from "../assets/capi.png";
import Acabados from "../assets/acabados.png";

const Pos = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <img src={Flor} className="container__flor" />
        <img src={Capi} className="container__impresora2" />
        <h1 className="container__title">Post- impresion</h1>
      </div>
      <div className="containerpos">
        <p className="containerpos__par">
          Retirar pieza <br /> Después de finalizar la impresión debemos de
          esperar a que se enfríe nuestra figura para luego proceder a retirarlo
          con ayuda de herramientas como una espátula o unas pinzas para que
          salga con facilidad todo esto con cuidado de no dañar nuestra pieza a
          continuacion hay un video que muestra como podemos retirarlo
        </p>
        <div className="herramienta__bg__vid">
          <ReactPlayer
            height="100%"
            width="100%"
            url="https://youtu.be/uPJJjyjYUDc"
          />
        </div>
      </div>
      <div className="herramienta">
        <div className="container-info__sub">
          <h1 className="container-info__sub__title">Acabados esteticos</h1>
        </div>
      </div>
      <div className=" herramienta__bg center ">
        <div className="herramienta__img  center ">
          <p>
            en este video se explica cada uno de las herramientas basicas de
            blender como lo son seleccionar, el cursos, mover, rotar,
            redimencionar, transformar, anotaciones, medicion y el agregar cubos
            ademas del uso de la camara los diferentes modos y modos del modo
            edicion
          </p>
          <img src={Acabados} className="herramienta__img__on" />
        </div>
      </div>
      <div className="container">
        <img src={Flor} className="container__flor" />
        <h1 className="container__title">cuidado de la impresora</h1>
      </div>
      <div className="containerpos2">
        <div className="herramienta__bg__vid2">
          <p className="containerpos2__par">
            Para el cuidado de nuestra impresora es recomendable mantener limpia
            la cama de impresion 3D para esto debemos tener la cama de impresion
            completamente fria para ahcer esta limpieza para esto usaremos una
            espatula para retirar los residuos que quedan de la impresora
            pegados en la cama de impresion de manera suave sin dañar la
            superficie de la cama acto seguido aplicaremos alcohol 
            en un paño para limpiar  la superficie de la cama de
            impresion para eliminar cualquier residuo de ella
          </p>
          <ReactPlayer
            height="100%"
            width="100%"
            url="https://youtu.be/tWIMXRyY8Y4"
          />
          <p className="containerpos2__par2">
            En el caso de tener una impresora con una cama especial o diferente
            lo mejor es seguir las recomendaciones del fabricante para realizar
            su limpieza
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pos;

import { Navbar } from "../shared";
import Footer from "../shared/Footer";
import { default as _ReactPlayer } from "react-player/youtube";
import { ReactPlayerProps } from "react-player/types/lib";
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

import Impresora from "../assets/impresora-3d-2.png";
import Flor from "../assets/flor.png";

const configuracion = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <img src={Flor} className="container__flor" />
        <img src={Impresora} className="container__impresora2" />
        <h1 className="container__title">Configuracion e impresion</h1>
      </div>
      <div className="concepcon">
        <p className="concepcon__par">
          Para empezar con nuestra impresión debemos primero escoger el tipo de
          filamento que usaremos, cuál no comience más, para lo que necesitamos,
          para esto podemos ir a la sección anterior y ver las características
          de los filamentos que admite nuestra impresora <br />
          como ejemplo yo seleccionare el pla debido a que es muy accesible y es
          bueno para realizar prototipos así como el dado que se realizará para
          esta guía.
        </p>
      </div>
      <div className="herramienta">
        <div className="container-info__sub">
          <h1 className="container-info__sub__title">Nivelacion de cama</h1>
        </div>
      </div>
      <div className="concepcon">
        <p className="concepcon__par2">
          Antes de comenzar a imprimir debemos de nivelar la cama para no tener
          ningún problema de adherencia, ya que si la cama no está correctamente
          nivelada, nuestro modelo no tendrá una base adecuada para la impresión
          y tendera a desprenderse además de al no estás bien nivelada es
          posible que el material no se distribuya adecuadamente en las primeras
          capas y esto afecte a nuestra impresión 3D.
        </p>
        <div className="herramienta__bg__vid">
          <ReactPlayer
            height="100%"
            width="100%"
            url="https://youtu.be/3IySg5j7KFo"
          />
        </div>
      </div>
      <div className="container">
        <img src={Flor} className="container__flor" />
        <h1 className="container__title">Inicio de impresion</h1>
      </div>
      <div className="concepcon">
        <p className="concepcon__par2">
          Ya preparada la cama de impresion y nuestro modelo previamente
          prcesado por el software Cura podremos pasar a ingresar la usb al pc
          para retirar el modelo y ponerlo en la impresora 3D en el video
          siguiente veremos el como pasar el modelo a la sd y cargarlo desde la
          impresora y unas cuantas recomendaciones de supervicion de nuestra
          impresion
        </p>
        <div className="herramienta__bg__vid">
          <ReactPlayer
            height="100%"
            width="100%"
            url="https://youtu.be/nJWaVWO1JpM"
          />
          </div>
      </div>
      <Footer />
    </>
  );
};

export default configuracion;

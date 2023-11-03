import { Navbar, Listimpresoras, Listfilamento, Footer } from "../shared";
import Flor from "../assets/flor.png";
import Impresora3d from "../assets/impresora-3d.png";
import Concept from "../assets/concept.png";

import Filamento from "../assets/filamento.png";

import TipoImpresora3d1 from "../assets/tipo_impresora3d1.png";
import TipoImpresora3d2 from "../assets/tipo_impresora3d2.png";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <img src={Flor} className="container__flor" />
        <img src={Impresora3d} className="container__impresora" />
        <h1 className="container__title">
          Guía de uso y aprendizaje para impresoras 3D
        </h1>
      </div>
      <div className="container-info">
        <div className="container-info__description">
          <p>¿Qué es una impresora 3D?</p>
          <p>
            Una impresora 3D, como su nombre indica, es una máquina capaz de
            fabricar objetos tridimensionales a partir de un modelo digital
            diseñado previamente en un software de modelado 3D. Este proceso se
            basa en la técnica de 'fabricación aditiva', en la cual se añaden
            capas sucesivas de material, como plástico o resina, para crear el
            objeto de manera gradual y precisa. Las impresoras 3D son
            herramientas revolucionarias porque permiten la fabricación y diseño
            de prototipos y souvenirs, entre otros objetos, de manera eficiente
            y versátil.
          </p>
        </div>
        <div className="container-info__funciona">
          <div>
            <img src={Concept} />
          </div>
          <div className="como-funciona">
            <p>¿Comó funciona?</p>
            <p>
              Desde nuestro computador, diseñamos un modelo 3D utilizando
              nuestro programa de modelado de preferencia. Luego, transferimos
              este modelo a la impresora 3D utilizando una tarjeta SD u otro
              medio de transferencia de datos. La impresora 3D fundirá el
              material seleccionado y creará nuestro modelo capa por capa,
              siguiendo las instrucciones precisas del modelo digital que hemos
              proporcionado. Este proceso se basa en la técnica de 'fabricación
              aditiva', en la cual se añaden capas sucesivas de material, como
              plástico o resina, para construir el objeto de manera gradual y
              precisa. Las impresoras 3D han revolucionado la forma en que
              fabricamos objetos, permitiéndonos crear prototipos y diseños con
              eficiencia y versatilidad.
            </p>
          </div>
        </div>
        <div className="container-info__sub">
          <h1 className="container-info__sub__title">Herramientas 3D</h1>
        </div>
        <div className="center">
          <div className="container-info__impresoras" style={{}}>
            <Listimpresoras />
          </div>
        </div>
      </div>
      <div className="container">
        <img src={Flor} className="container__flor" />
        <img src={Filamento} className="container__filamento" />
        <h1 className="container__title">Tipos de filamento</h1>
      </div>
      <div className="container__fil">
        <div className="container__fil__text">
          <Listfilamento />
        </div>
      </div>

      <div className="container-info" style={{ position: "relative" }}>
        <div className="container-info__sub">
          <h1 className="container-info__sub__title">
            Partes de la impresora 3d
          </h1>
        </div>
        <div className="container-info__tipo-impresora">
          <div>
            <img
              src={TipoImpresora3d1}
              className="container-info__tipo-impresora__1"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1em",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="container-info__partes">
              <div>
                <p>1. Ranura sd y puerto usb</p>
                <p>2. Caja de control</p>
                <p>3. Cama de impresion</p>
                <p>4. Pantalla</p>
                <p>5. Perilla de control</p>
                <p>6. Extrusor</p>
              </div>
              <div>
                <p>7. Conjunto de boquilla</p>
                <p>8. Fuente de poder</p>
                <p>9. Motor y sensor</p>
                <p>10. Motor y sensor Z</p>
                <p>11.Motor y sensor X</p>
                <p>12.Soporte de carrete</p>
              </div>
            </div>
            <img
              src={TipoImpresora3d2}
              className="container-info__tipo-impresora__2"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

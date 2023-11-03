import Slogan from "../assets/slogan.png";
import Phone from "../assets/phone.png";
import Time from "../assets/time.png";
import Location from "../assets/location.png";

export default function Footer() {
  return (
    <div className="footer">
      <img className="footer__slogan" alt="" src={Slogan} />

      <div className="footer__ContainerMain">
        <div className="footer__ContainerMain__Container">
          <img
            className="footer__ContainerMain__container__icons"
            alt=""
            src={Phone}
            width="21"
            height="21"
          />
          <p className="footer__ContainerMain__Container__text">
            Llamadas Teléfono: 608 868 8745 Celular: 310 804 8743
          </p>
        </div>
        <div className="footer__ContainerMain__Container">
          <img
            className="footer__ContainerMain__container__icons"
            alt=""
            src={Time}
            width="21"
            height="21"
          />
          <p className="footer__ContainerMain__Container__text">
            Horario de atención Lunes a viernes 7 AM a 12 PM y 2 PM a 5 PM
            Sábados de 7 AM a 12 PM
          </p>
        </div>
        <div className="footer__ContainerMain__Container">
          <img
            className="footer__ContainerMain__container__icons"
            alt=""
            src={Location}
            width="21"
            height="21"
          />
          <p className="footer__ContainerMain__Container__text">
            Dirección Calle 22 Sur No. 34 A - 01 Manzanares V Etapa Neiva, Huila
          </p>
        </div>
      </div>
    </div>
  );
}

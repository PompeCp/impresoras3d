import { useState, useEffect } from "react";
import { getImpresoras,api } from "../servicios/index";

const Listimpresoras = () => {
  const [impresoras, setImpresoras] = useState([]);
  useEffect(() => {
    //loadTipoSolicitud es una función que se ejecuta cuando el componente se renderiza
    const loadImpresoras = async () => {
      const datos = await getImpresoras();
      console.log(datos);
      if (datos?.status === 200) {
        setImpresoras(datos.data.impresoras);
      }
    };
    loadImpresoras();
  }, []);

  // useEffect es un hook que se ejecuta cuando el componente se renderiza
  //useEffect es un hook que se ejecuta cuando el componente se renderiza

  return (
    <>
      {impresoras.map((item:any) => (
        <div
          key={item.id_impresoras}
          className="container-info__impresoras__item"
        >
          <div className="container-info__impresoras__item__content">
            <p style={{ padding: "20px" }}>{item.nombre} </p>
            <img alt="" src={api+"upload/" + item.imagen} />
            <p style={{ textAlign: "left", padding: "20px" }}>
              {item.descripcion}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
export default Listimpresoras;

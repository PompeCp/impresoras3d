import { useState, useEffect } from "react";
import { getFilamentos } from "../servicios/index";

const Listfilamento = () => {
  const [filamento, setFilamento] = useState([]);
  useEffect(() => {
    //loadTipoSolicitud es una función que se ejecuta cuando el componente se renderiza
    const loadFilamento = async () => {
      const datos = await getFilamentos();
      console.log(datos);
      if (datos?.status === 200) {
        setFilamento(datos.data.filamento);
      }
    };
    loadFilamento();
  }, []);

  // useEffect es un hook que se ejecuta cuando el componente se renderiza
  //useEffect es un hook que se ejecuta cuando el componente se renderiza

  return (
    <>
      {filamento.map((item: any) => (
        <div key={item.id_filamento} style={{ textAlign: "center" }}>
          <h3>{item.nombre}</h3>
          {item.descripcion}
        </div>
      ))}
    </>
  );
};
export default Listfilamento;

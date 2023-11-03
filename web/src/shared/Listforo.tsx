import { useState, useEffect } from "react";
import { getForos } from "../servicios/index";
import axios from "axios";
import fileDownload from "js-file-download";
axios.defaults.baseURL = "http://localhost:4000";
const Listforo = () => {
  const [foro, setForo] = useState([]);
  useEffect(() => {
    //loadTipoSolicitud es una función que se ejecuta cuando el componente se renderiza
    const loadImpresoras = async () => {
      const datos = await getForos();
      console.log(datos);
      if (datos?.status === 200) {
        setForo(datos.data.comunidad);
      }
    };
    loadImpresoras();
  }, []);

  return (
    <>
      {foro.map((item: any) => (
        <div key={item.id_comu} className="container-info__foro__item">
          <div className="container-info__foro__item__content"  >
            <p style={{ padding: "20px" }}>{item.nombre} </p>
            <img alt="" src={"http://localhost:4000/upload/" + item.imagen} />
            <p style={{ textAlign: "left", padding: "20px" }}>
              {item.descripcion}
            </p>

            <button
              onClick={() => {
                axios({
                  url: "/download/" + item.link,
                  responseType: "arraybuffer",
                }).then((response: any) => {
                  fileDownload(response.data, item.link);
                });
              }}
              style={{
                padding: "8px",
                borderRadius: "20px",
                background: "#2a1570",
                color: "white",
                border: "none",
                cursor: "pointer",
                transition: "0.3s ease all"    
              }}
            >
              descargar
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default Listforo;

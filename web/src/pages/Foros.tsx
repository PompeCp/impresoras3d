import styled from "styled-components";
import { Navbar, Modal, Footer, Listforo } from "../shared";
import Flor from "../assets/flor.png";
import { useState } from "react";
import { addForos } from "../servicios/index";

const Foros = () => {
  const [file, setFile] = useState(null);
  const selectedHandler = (e: any) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const [file2, setFile2] = useState(null);
  const selectedHandler2 = (e: any) => {
    console.log(e.target.files[0]);
    setFile2(e.target.files[0]);
  };

  const [modal1, setModal1] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    imagen: "",
    descripcion: "",
    link: "",
  });

  const changeForm = (field: any, value: any) => {
    setForm({ ...form, [field]: value });
  };
  const sendHandler = () => {
    if (!file || !file2) {
      alert("Debes seleccionar un archivo");
      return;
    }

    // Genera el nombre de la imagen aquí
    const now = new Date();
    now.setMilliseconds(0); // Establece los milisegundos en 0
    const fechaHora = now.getTime(); // Obtiene la fecha y hora en milisegundos
    const nombreimg = `${fechaHora}-${file.name}`;
    const nombreStl = `${fechaHora}-${file2.name}`;

    const updatedForm = { ...form }; // Crea una copia del objeto form
    updatedForm.imagen = nombreimg; // Asigna el valor de nombreimg al campo "imagen"
    updatedForm.link = nombreStl; // Asigna el valor de nombreimg al campo "link"
    setForm(updatedForm); // Actualiza el estado del formulario con los nuevos valores

    console.log(nombreimg);
    console.log(nombreStl);

    // Envía solo la imagen utilizando FormData
    const formData = new FormData();

    formData.append('archivo', file); 
    formData.append('archivo', file2);


    fetch("http://localhost:4000/comunidad/images/post", {
      method: "POST",
      body: formData,
    })
      .then((res: any) => res.text())
      .then((res: any) => console.log(res))
      .catch((err: any) => {
        console.error(err);
      });

    document.getElementById("fileinput").value = null;
    
  };

  const submit = async (event: any) => {
    if (!file || !file2) {
      alert("Debes seleccionar un archivo");
      return;
    }
    event.preventDefault(); // evita que se recargue la página
    await addForos(form);
    setModal1(!modal1);
    setFile(null);
    setFile2(null);
    window.location.reload();
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <img src={Flor} className="container__flor" />
        <h1 className="container__title">foros y comunidad</h1>
      </div>
      <div className="containerforo">
        <div className="containerforo__di">
          <p className="containerforo__di__p">
            Aqui los usuarios pueden compartir sus creaciones 3d y sus STL para
            que otras personas los usen
          </p>
          <ContenedorBotones>
            <Boton onClick={() => setModal1(!modal1)}>crear aporte</Boton>
          </ContenedorBotones>
          <Modal
            State={modal1}
            setModal1={setModal1}
            titulo={"Crear aporte "}
            showHeader={true}
            showOverlay={true}
          >
            <Contenido>
              <Formulario onSubmit={submit}>
                <input
                  className="form-item"
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  onChange={(event) => {
                    changeForm(
                      "nombre",
                      event.target.value // le pasamos el valor
                    );
                  }}
                  require autocomplete="off"/>
                <input
                  onChange={selectedHandler}
                  className="form-item"
                  type="file"
                  name="imagenfile"
                />
                <input
                  className="form-item"
                  type="text"
                  name="descripcion"
                  id="fileinput"
                  onChange={(event) => {
                    changeForm(
                      "descripcion",
                      event.target.value // le pasamos el valor
                    );
                  }}
                  placeholder="descripcion"
                  require autocomplete="off"/>
                <input
                  onChange={selectedHandler2}
                  className="form-item"
                  type="file"
                  name="linkfile"
                />
                <button onClick={sendHandler}>enviar</button>
              </Formulario>
            </Contenido>
          </Modal>
        </div>
      </div>
      <div className="container-info">
        <div className="container-info__foro">
          <Listforo />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Foros;

const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Boton = styled.button`
  display: block;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #392287;
  cursor: pointer;
  font-family: "poppins", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;

  &:hover {
    background: #51408d;
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
`;

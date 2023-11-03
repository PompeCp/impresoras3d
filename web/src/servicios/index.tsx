import axios from "axios";
export const api = `http://localhost:4000/`;

export async function getContenidosmult() {
  try {
    const response = await axios({
      url: api + `contenidomult`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getContenidomult() {
  try {
    const response = await axios({
      url: api + `contenidomult/:id`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getFilamentos() {
  try {
    const response = await axios({
      url: api + `filamento`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getFilamento() {
  try {
    const response = await axios({
      url: api + `filamento/:id`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getImpresoras() {
  try {
    const response = await axios({
      url: api + `impresoras`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getImpresora() {
  try {
    const response = await axios({
      url: api + `impresoras/:id`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}
//COMUNIDAD---------------------------------
export async function getForos() {
  try {
    const response = await axios({
      url: api + `comunidad`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getForo() {
  try {
    const response = await axios({
      url: api + `comunidad/:id`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function addForos(form:any) {
  try {
    const response = await axios({
      url: api + `comunidad`,
      method: "POST",
      data:form,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function Download() {
  try {
    const response = await axios({
      url: api + `contenidomult`,
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
}



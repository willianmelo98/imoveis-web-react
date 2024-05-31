import axios from "axios";

const urlAPI = "https://api-de-imoveis.glitch.me/imoveis";
export function getImoveis() {
  return axios.get(urlAPI).then((response) => {
    return response.data;
  });
}

export function getImoveisPorId(id) {
  return axios.get(urlAPI + "/" + id).then((response) => {
    return response.data;
  });
}

export function postImoveis(imovel) {
  return axios.post(urlAPI, imovel).then((response) => {
    return (response.data);
  });
}

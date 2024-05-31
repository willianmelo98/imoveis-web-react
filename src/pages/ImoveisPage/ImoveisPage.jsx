import { useEffect, useState } from "react";
import { getImoveis } from "../../services/imovelApiService";
import ImovelCard from "../../components/ImovelCard";
import "./ImoveisPage.css";
import { useNavigate } from "react-router-dom";

function ImoveisPage() {
  const [imoveis, SetImoveis] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getImoveis().then((data) => SetImoveis(data));
  }, []);

  function irParaDetalhe(id) {
    navigate(`/imoveis/${id}`);
  }
  return (
    <div className="listaImoveis">
      <h1> Pagina de Imoveis </h1>
      <div>
        {imoveis.map((imovel) => (
          <div
            key={imovel.id}
            onClick={() => irParaDetalhe(imovel.id)}
            className=".listaImoveis imovelCard"
          >
            <ImovelCard imovel={imovel}></ImovelCard>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ImoveisPage;

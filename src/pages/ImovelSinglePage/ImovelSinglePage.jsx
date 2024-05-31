import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ImovelSinglePage.css";
import { CircularProgress } from "@mui/material";
import ImovelCard from "../../components/ImovelCard";
import { getImoveisPorId } from "../../services/imovelApiService";

function ImovelSinglePage() {
  const { id } = useParams();
  const [imovel, setImovel] = useState(null);

  useEffect(() => {
    getImoveisPorId(id).then((data) => setImovel(data));
  }, [id]);

  if (!imovel) {
    return (
      <div>
        Loading...
        <CircularProgress></CircularProgress>
      </div>
    );
  }
  return (
    <div className="imovel">
      <ImovelCard imovel={imovel} />
      <div className="link">
        <Link to="/imoveis">Voltar</Link>
      </div>
    </div>
  );
}
export default ImovelSinglePage;

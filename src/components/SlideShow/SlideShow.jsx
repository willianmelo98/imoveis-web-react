import { CircularProgress, IconButton } from "@mui/material";
import { getImoveis } from "../../services/imovelApiService";
import { useState, useEffect } from "react";
import ImovelCard from "../ImovelCard";
import { SkipNext, SkipPrevious } from "@mui/icons-material";
import "./Slide.css";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

function SlideShow() {
  const query = new URLSearchParams(useLocation().search);
  const navigate = useNavigate();
  const [imoveis, setImoveis] = useState([]);
  const [position, setPosition] = useState(
    parseInt(query.get("position")) ?? 0
  );

  useEffect(() => {
    getImoveis().then((data) => setImoveis(data));
  }, []);

  function moveTo(clickDirection) {
    if (clickDirection === "esquerda" && position !== 0) {
      let positionTemp = position - 1;
      setPosition(positionTemp);
      navigate({ search: `position=${positionTemp}` });
    }

    if (clickDirection === "direita" && position !== imoveis.length - 1) {
      let positionTemp = position + 1;
      setPosition(positionTemp);
      navigate({ search: `position=${positionTemp}` });
    }
  }
  if (imoveis.length === 0) {
    return (
      <div>
        Loading...
        <CircularProgress></CircularProgress>
      </div>
    );
  }
  function irParaDetalhe(id) {
    navigate(`/imoveis/${id}`);
  }

  return (
    <div className="slide">
      <IconButton onClick={() => moveTo("esquerda")}>
        <SkipPrevious />
      </IconButton>
      <div onClick={() => irParaDetalhe(imoveis[position].id)}>
        <ImovelCard imovel={imoveis[position]}></ImovelCard>
      </div>
      <IconButton onClick={() => moveTo("direita")}>
        <SkipNext />
      </IconButton>
    </div>
  );
}
export default SlideShow;

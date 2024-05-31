import { Button, Card, TextField } from "@mui/material";
import "./FormCadastro.css";
import ImovelModel from "../../model/ImovelModel";
import { postImoveis } from "../../services/imovelApiService";
import { useState } from "react";
import ImovelCard from "../../components/ImovelCard";

function FormCadastro() { 
  const [imovelCadastrado, setImovelCadastrado] = useState(null);

  function submitPost( ) {
     
    let owner = document.getElementById("owner").value;
    let image = document.getElementById("image").value;
    let price = document.getElementById("price").value;
    let type = document.getElementById("type").value;
    let address = document.getElementById("address").value;
    let imovel = new ImovelModel(address, image, owner, price, type);
    postImoveis(imovel).then((data) =>  setImovelCadastrado(data));
  }

  return (
    <>
      {imovelCadastrado ? (
        <div>
          <h1>Imovel cadastrado com sucesso!</h1>
          <ImovelCard imovel={imovelCadastrado}></ImovelCard>
        </div>
      ) : (
        <Card>
          <form onSubmit={() => submitPost()}>
            <TextField required id="owner" label="owner" variant="outlined" />
            <TextField required id="image" label="image" variant="outlined" />
            <TextField required id="price" label="price" variant="outlined" />
            <TextField required id="type" label="type" variant="outlined" />
            <TextField
              required
              id="address"
              label="address"
              variant="outlined"
            />
            <Button type="submit" >
              {" "}
              Cadastrar
            </Button>
          </form>
        </Card>
      )}
    </>
  );
}
export default FormCadastro;

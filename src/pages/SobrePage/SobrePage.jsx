import style from "./SobrePage.module.css";

function SobrePage() {
  const titulo = "Sobre o Imoveis Web";
  const descricao =
    "Aplicação criada em React.js, onde recuperamos dados de uma Web API e realizamos cadastros de imoveis em nossa base de dados. Criada com o intuito de aprimoramento de habilidades em React";

  return (
    <div>
      <div className={style["sobre-page"]}>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </div>
    </div>
  );
}
export default SobrePage;

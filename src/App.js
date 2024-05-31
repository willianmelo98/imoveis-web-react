import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import SobrePage from "./pages/SobrePage"
import "./App.css";
import MenuPageTemplate from "./pageTemplates/MenuPageTemplate";
import ImoveisPage from "./pages/ImoveisPage";
import ImovelSinglePage from "./pages/ImovelSinglePage";
import FormCadastro from "./pages/FormCadastro";

function App() {
  return (
    <BrowserRouter>
      
      <MenuPageTemplate>
        <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/imoveis"  element={<ImoveisPage/>}/>
        <Route path="/sobre" element={<SobrePage/>}/>
        <Route path="/cadastro" element={<FormCadastro/>}/>
        <Route path="/imoveis/:id" element={<ImovelSinglePage/>}/>
        </Routes>
      </MenuPageTemplate>
    </BrowserRouter>
  );
}

export default App;

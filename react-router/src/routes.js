import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";


function AppRoutes() {
  return (
      <div>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="sobremim" element={<SobreMim/>}/>
            <Route path="*" element="Pagina nao Encontrada"/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default AppRoutes;

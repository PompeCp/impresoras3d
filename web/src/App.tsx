import { HashRouter, Routes, Route } from "react-router-dom"

import { HomePage, DiseñoPage ,ConfiguracionPage, PosPage , ForosPage} from "./pages"

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/prepdiseño" element={<DiseñoPage />}></Route>
        <Route path="/configuracion" element={<ConfiguracionPage />}></Route>
        <Route path="/Post" element={<PosPage />}></Route>
        <Route path="/foros" element={<ForosPage />}></Route>

      </Routes>
    </HashRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"

import { HomePage, DiseñoPage ,ConfiguracionPage, PosPage , ForosPage} from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/prepdiseño" element={<DiseñoPage />}></Route>
        <Route path="/configuracion" element={<ConfiguracionPage />}></Route>
        <Route path="/Post" element={<PosPage />}></Route>
        <Route path="/foros" element={<ForosPage />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

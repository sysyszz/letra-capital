
import Rutas from './Modulos/Routes/Routes'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './Modulos/Context/AuthContext';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Rutas />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

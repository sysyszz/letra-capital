import { Routes, Route } from "react-router-dom";
import Layout from "../Layaout/Pages/Layaout";
import Home from "../Home/Pages/Home";
import Login from "../Auth/Pages/Login";
import Registro from "../Auth/Pages/Registro";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Dashboard/Pages/Dashboard";
import LibrosPage from "../Libros/Pages/LibrosPage";
import ClientesPage from "../Clientes/Pages/ClientesPage";
import VentasPage from "../Ventas/Pages/VentasPage";

const Rutas = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />

                <Route path="/dashboard" element={
                    <PrivateRoute><Dashboard /></PrivateRoute>
                } />
                <Route path="/libros" element={
                    <PrivateRoute><LibrosPage /></PrivateRoute>
                } />
                <Route path="/clientes" element={
                    <PrivateRoute><ClientesPage /></PrivateRoute>
                } />
                <Route path="/ventas" element={
                    <PrivateRoute><VentasPage /></PrivateRoute>
                } />

            </Route>
        </Routes>
    )
}

export default Rutas;
import Navbar from "../Componentes/Navbar";
import Footer from "../Componentes/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return(
        <div className="layout-container">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;
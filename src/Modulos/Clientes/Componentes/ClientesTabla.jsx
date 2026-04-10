import { IconPencil, IconTrash } from '../../Componentes/Icons';
import './ClientesTabla.css';

const ClientesTabla = ({ clientes, onEditar, onEliminar }) => {
    if (clientes.length === 0) {
        return <p className="tabla-empty">No hay clientes registrados. Añade el primero desde el botón superior.</p>;
    }

    return (
        <div className="tabla-wrapper">
            <table className="modulo-tabla">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Ciudad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente, i) => (
                        <tr key={cliente.id}>
                            <td>{i + 1}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefono}</td>
                            <td><span className="badge">{cliente.ciudad}</span></td>
                            <td className="acciones">
                                <button type="button" className="btn-editar" onClick={() => onEditar(cliente)}>
                                    <IconPencil size={16} aria-hidden />
                                    Editar
                                </button>
                                <button type="button" className="btn-eliminar" onClick={() => onEliminar(cliente.id)}>
                                    <IconTrash size={16} aria-hidden />
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClientesTabla;

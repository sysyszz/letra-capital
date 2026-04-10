import { IconPencil, IconTrash } from '../../Componentes/Icons';
import './LibrosTabla.css';

const formatCOP = (valor) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(valor);
};

const LibrosTabla = ({ libros, onEditar, onEliminar }) => {
    if (libros.length === 0) {
        return <p className="tabla-empty">No hay libros registrados. Añade el primero desde el botón superior.</p>;
    }

    return (
        <div className="tabla-wrapper">
            <table className="modulo-tabla">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Género</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map((libro, i) => (
                        <tr key={libro.id}>
                            <td>{i + 1}</td>
                            <td>{libro.titulo}</td>
                            <td>{libro.autor}</td>
                            <td><span className="badge">{libro.genero}</span></td>
                            <td className="precio">{formatCOP(libro.precio)}</td>
                            <td>
                                <span className={`stock-badge ${Number(libro.stock) === 0 ? 'sin-stock' : ''}`}>
                                    {libro.stock}
                                </span>
                            </td>
                            <td className="acciones">
                                <button type="button" className="btn-editar" onClick={() => onEditar(libro)}>
                                    <IconPencil size={16} aria-hidden />
                                    Editar
                                </button>
                                <button type="button" className="btn-eliminar" onClick={() => onEliminar(libro.id)}>
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

export default LibrosTabla;
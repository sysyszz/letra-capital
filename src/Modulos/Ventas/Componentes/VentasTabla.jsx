import { IconPencil, IconTrash } from '../../Componentes/Icons';
import { formatMoneyDisplay } from '../../utils/formatMoney';
import './VentasTabla.css';

const VentasTabla = ({ ventas, onEditar, onEliminar }) => {
    if (ventas.length === 0) {
        return <p className="tabla-empty">No hay ventas registradas. Registra la primera desde el botón superior.</p>;
    }

    return (
        <div className="tabla-wrapper">
            <table className="modulo-tabla">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fecha</th>
                        <th>Cliente</th>
                        <th>Libro</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((venta, i) => (
                        <tr key={venta.id}>
                            <td>{i + 1}</td>
                            <td>{venta.fecha}</td>
                            <td>{venta.clienteNombre || '—'}</td>
                            <td>{venta.librTitulo || '—'}</td>
                            <td>{venta.cantidad}</td>
                            <td className="precio total">{formatMoneyDisplay(venta.total)}</td>
                            <td className="acciones">
                                <button type="button" className="btn-editar" onClick={() => onEditar(venta)}>
                                    <IconPencil size={16} aria-hidden />
                                    Editar
                                </button>
                                <button type="button" className="btn-eliminar" onClick={() => onEliminar(venta.id)}>
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

export default VentasTabla;

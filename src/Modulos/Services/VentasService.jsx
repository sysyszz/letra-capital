const KEY = 'ventas';

export const getVentas = () => JSON.parse(localStorage.getItem(KEY)) || [];

export const addVenta = (venta) => {
    const ventas = getVentas();
    venta.id = Date.now();
    ventas.push(venta);
    localStorage.setItem(KEY, JSON.stringify(ventas));
};

export const updateVenta = (id, updated) => {
    const ventas = getVentas().map(v => v.id === id ? { ...v, ...updated, id } : v);
    localStorage.setItem(KEY, JSON.stringify(ventas));
};

export const deleteVenta = (id) => {
    const ventas = getVentas().filter(v => v.id !== id);
    localStorage.setItem(KEY, JSON.stringify(ventas));
};

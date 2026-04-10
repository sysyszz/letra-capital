const KEY = 'clientes';

export const getClientes = () => JSON.parse(localStorage.getItem(KEY)) || [];

export const addCliente = (cliente) => {
    const clientes = getClientes();
    cliente.id = Date.now();
    clientes.push(cliente);
    localStorage.setItem(KEY, JSON.stringify(clientes));
};

export const updateCliente = (id, updated) => {
    const clientes = getClientes().map(c => c.id === id ? { ...c, ...updated, id } : c);
    localStorage.setItem(KEY, JSON.stringify(clientes));
};

export const deleteCliente = (id) => {
    const clientes = getClientes().filter(c => c.id !== id);
    localStorage.setItem(KEY, JSON.stringify(clientes));
};

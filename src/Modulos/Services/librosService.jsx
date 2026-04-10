import { formatMoney } from '../utils/formatMoney';

const KEY = 'libros';

const normalizeLibro = (libro) => ({
  ...libro,
  precio: formatMoney(libro.precio),
  stock: String(Math.max(0, Math.floor(Number(libro.stock) || 0))),
});

export const getLibros = () => JSON.parse(localStorage.getItem(KEY)) || [];

export const addLibro = (libro) => {
  const libros = getLibros();
  const row = normalizeLibro(libro);
  row.id = Date.now();
  libros.push(row);
  localStorage.setItem(KEY, JSON.stringify(libros));
};

export const updateLibro = (id, updated) => {
  const libros = getLibros().map(l =>
    l.id === id ? { ...normalizeLibro({ ...l, ...updated }), id } : l
  );
  localStorage.setItem(KEY, JSON.stringify(libros));
};

export const deleteLibro = (id) => {
  const libros = getLibros().filter(l => l.id !== id);
  localStorage.setItem(KEY, JSON.stringify(libros));
};

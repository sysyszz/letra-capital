import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    const { nombre, email, password, confirmPassword } = formData;

    if (nombre.trim().length < 3) {
      setError('El nombre debe tener al menos 3 caracteres.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    try {
      register({ nombre, email, password });
      setSuccess(true);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.message || 'Error al registrar');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    fontSize: '0.9rem',
    color: '#1a1a1a',
    background: '#fafaf8',
    border: '1px solid rgba(0,0,0,0.12)',
    borderRadius: '8px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: '500',
    color: '#1a1a1a',
    letterSpacing: '0.3px',
    textTransform: 'uppercase',
    marginBottom: '0.5rem'
  };

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fafaf8',
      padding: '2rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: '12px',
        padding: '3rem 2.5rem',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)'
      }}>

        {/* Título */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{
            fontSize: '1.1rem',
            fontWeight: '600',
            letterSpacing: '-0.02em',
            color: '#1a1a1a',
            marginBottom: '0.5rem'
          }}>
            Letra Capital
          </h1>
          <h2 style={{
            fontSize: '0.9rem',
            fontWeight: '500',
            color: '#666',
            letterSpacing: '0.3px',
            textTransform: 'uppercase'
          }}>
            Crear Cuenta
          </h2>
          <div style={{
            width: '32px',
            height: '1px',
            background: 'hsl(30, 60%, 55%)',
            margin: '1rem auto 0'
          }} />
        </div>

        {/* Formulario */}
        <form onSubmit={handleRegister}>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={labelStyle}>Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = 'hsl(30, 60%, 55%)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
            />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="correo@ejemplo.com"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = 'hsl(30, 60%, 55%)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
            />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={labelStyle}>Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Mínimo 6 caracteres"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = 'hsl(30, 60%, 55%)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={labelStyle}>Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Repite tu contraseña"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = 'hsl(30, 60%, 55%)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.85rem',
              fontSize: '0.85rem',
              fontWeight: '500',
              letterSpacing: '0.3px',
              textTransform: 'uppercase',
              color: '#ffffff',
              background: 'hsl(30, 60%, 55%)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.background = 'hsl(30, 60%, 45%)'}
            onMouseOut={(e) => e.target.style.background = 'hsl(30, 60%, 55%)'}
          >
            Registrarse
          </button>

        </form>

        {/* Mensajes */}
        {error && (
          <p style={{
            marginTop: '1rem',
            fontSize: '0.85rem',
            color: '#c0392b',
            textAlign: 'center'
          }}>
            {error}
          </p>
        )}

        {success && (
          <p style={{
            marginTop: '1rem',
            fontSize: '0.85rem',
            color: 'hsl(30, 60%, 45%)',
            textAlign: 'center'
          }}>
            ¡Cuenta creada! Redirigiendo al login...
          </p>
        )}

        {/* Link a login */}
        <p style={{
          marginTop: '2rem',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: '#666'
        }}>
          ¿Ya tienes cuenta?{' '}
          <Link to="/Login" style={{
            color: 'hsl(30, 60%, 55%)',
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Iniciar Sesión
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
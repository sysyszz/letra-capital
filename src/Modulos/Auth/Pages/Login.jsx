import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!email.includes('@')) {
      setError('Por favor, ingresa un email válido.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      login(email, password);
      setSuccess(true);
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch {
      setError('Credenciales incorrectas. Intenta de nuevo.');
    }
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
            Iniciar Sesión
          </h2>
          <div style={{
            width: '32px',
            height: '1px',
            background: 'hsl(30, 60%, 55%)',
            margin: '1rem auto 0'
          }} />
        </div>

        {/* Formulario */}
        <form onSubmit={handleLogin}>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.8rem',
              fontWeight: '500',
              color: '#1a1a1a',
              letterSpacing: '0.3px',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="correo@ejemplo.com"
              style={{
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
              }}
              onFocus={(e) => e.target.style.borderColor = 'hsl(30, 60%, 55%)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.8rem',
              fontWeight: '500',
              color: '#1a1a1a',
              letterSpacing: '0.3px',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Mínimo 6 caracteres"
              style={{
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
              }}
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
            Ingresar
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
            ¡Éxito! Redirigiendo...
          </p>
        )}

        {/* Link a registro */}
        <p style={{
          marginTop: '2rem',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: '#666'
        }}>
          ¿No tienes cuenta?{' '}
          <Link to="/Registro" style={{
            color: 'hsl(30, 60%, 55%)',
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Registrarse
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
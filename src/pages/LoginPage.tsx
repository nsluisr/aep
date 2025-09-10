
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Input from '../components/form/Input';
import Button from '../components/form/Button';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call for a standard login
    setTimeout(() => {
      setLoading(false);
      // On success, you might navigate to a general dashboard or back home
      alert('Inicio de sesión exitoso (simulación)');
      navigate('/');
    }, 1500);
  };

  return (
    <div className="StandardLoginPage">
      <div className="StandardLoginCard">
        <div className="StandardLoginCard-header">
          <h1 className="StandardLoginCard-title">Iniciar Sesión</h1>
          <p className="StandardLoginCard-subtitle">Accede a tu cuenta de Netheron</p>
        </div>
        <form onSubmit={handleLogin}>
          <Input
            id="email"
            label="Correo Electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            id="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" loading={loading}>
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

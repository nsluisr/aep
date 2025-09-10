import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DraxionLoginPage.css';
import Input from '../components/form/Input';
import Button from '../components/form/Button';

const DraxionLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!username) {
      newErrors.username = 'El nombre de usuario es requerido.';
    }
    if (!password) {
      newErrors.password = 'La contraseña es requerida.';
    } else if (password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres.';
    }
    return newErrors;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigate('/draxion/dashboard');
    }, 2000);
  };

  return (
    <div className="LoginPage">
      <div className="LoginCard">
        <div className="LoginCard-header">
          {/* TODO: Replace with actual Draxion logo */}
          <div className="DraxionLogo">Draxion</div>
          <h2 className="LoginCard-title">Acceso Seguro</h2>
        </div>
        <form onSubmit={handleLogin} className="Login-form">
          <Input
            id="username"
            label="Nombre de Usuario"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={errors.username}
            required
          />
          <Input
            id="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            required
          />
          <Button type="submit" loading={loading}>
            Iniciar Sesión
          </Button>
        </form>
        <div className="LoginCard-footer">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  );
};

export default DraxionLoginPage;
import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...props }) => {
  return (
    <button {...props} className={`Button ${props.className || ''}`} disabled={loading}>
      {loading ? <div className="ButtonSpinner" /> : children}
    </button>
  );
};

export default Button;
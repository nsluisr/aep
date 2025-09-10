import React from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className="InputGroup">
      <label htmlFor={props.id}>{label}</label>
      <input {...props} />
      {error && <span className="InputError">{error}</span>}
    </div>
  );
};

export default Input;
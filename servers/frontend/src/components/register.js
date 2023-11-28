// Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isPasswordMatching, setPasswordMatching] = useState(true);

  async function sendRegisterData() {
    try {
      const response = await axios.post('URL_DO_SERVIDOR/register', formData);
      // Trate a resposta do servidor, se necessário
    } catch (error) {
      // Trate erros, se necessário
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handlePasswordChange(event) {
    setFormData({ ...formData, password: event.target.value });
  }

  function handleConfirmPasswordChange(event) {
    setFormData({ ...formData, confirmPassword: event.target.value });
    setPasswordMatching(formData.password === event.target.value);
  }

  return (
    <div className='Register-form-div'>
      <label>Nome:</label>
      <input
        type='text'
        name='name'
        placeholder='Seu nome'
        onChange={handleChange}
      ></input>
      <label>Email:</label>
      <input
        type='text'
        name='email'
        placeholder='email@example.com'
        onChange={handleChange}
      ></input>
      <label>Senha:</label>
      <input
        type='password'
        name='password'
        placeholder='Senha'
        onChange={handlePasswordChange}
      ></input>
      <label>Confirme a Senha:</label>
      <input
        type='password'
        name='confirmPassword'
        placeholder='Confirme a senha'
        onChange={handleConfirmPasswordChange}
      ></input>
      {!isPasswordMatching && <p className='red-warning'>As senhas não coincidem.</p>}
      <button className='btn-l-r' onClick={sendRegisterData}>Registrar</button>
    </div>
  );
}

export default Register;

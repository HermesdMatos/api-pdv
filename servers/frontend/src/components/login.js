// Login.js
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginMessage, setLoginMessage] = useState('');

  async function sendLoginData() {
    try {
      const response = await axios.post('URL_DO_SERVIDOR/login', formData);

      if (response.status === 200) {
        setLoginMessage('Parabéns, logado com sucesso!');
      } else if (response.status === 404) {
        setLoginMessage('Erro 404: Usuário não encontrado');
      } else if (response.status === 401) {
        setLoginMessage('Senha incorreta, tente novamente');
      }
    } catch (error) {
      // Trate erros, se necessário
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className='Login-form-div'>
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
        onChange={handleChange}
      ></input>
      <button className='btn-l-r' onClick={sendLoginData}>Entrar</button>
      <p>{loginMessage}</p>
    </div>
  );
}

export default Login;

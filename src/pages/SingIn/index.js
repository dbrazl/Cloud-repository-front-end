import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

export default function SingIn() {
  const [singUp, setSingUp] = useState({
    redirect: false,
  });

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }

  function handleSingUp() {
    setSingUp({ redirect: true });
  }

  return (
    <>
      <img src={logo} alt="Logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="text" placeholder="Informe seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Informe sua senha"
        />

        <div>
          <button id="singin" type="submit">
            Entrar
          </button>
          <button id="singup" type="button" onClick={handleSingUp}>
            Cadastrar
          </button>
        </div>

        {singUp.redirect && <Redirect to="/register" />}

        <Link to="/restore">
          Esqueceu sua senha? Clique aqui para recupera-la!
        </Link>
      </Form>
    </>
  );
}

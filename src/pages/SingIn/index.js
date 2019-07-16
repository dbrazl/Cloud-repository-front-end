import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';

export default function SingIn() {
  const [singUp, setSingUp] = useState({
    redirect: false,
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

      <Form onSubmit={handleSubmit}>
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

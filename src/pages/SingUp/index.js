import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import user from '~/assets/user.svg';

export default function SingUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={user} alt="SingUp user logo" />

      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Informe seu nome." />
        <Input name="email" type="text" placeholder="Informe seu email." />
        <Input
          name="password"
          type="password"
          placeholder="Informe sua senha."
        />

        <button type="submit" id="singup">
          Cadastrar
        </button>

        <Link to="/">Voltar</Link>
      </Form>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import user from '~/assets/user.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SingUp() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'O nome deve ter no mínimo 3 caracteres')
      .required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('o e-mail é obrigatório'),
    password: Yup.string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('A senha é obrigatória'),
  });

  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={user} alt="SingUp user logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
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

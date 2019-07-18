import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import restore from '~/assets/restore.svg';

import { restoreAccountRequest } from '~/store/modules/auth/actions';

export default function RestoreAccount() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('O e-mail é obrigatório'),
  });

  const dispatch = useDispatch();

  function handleSubmit({ email }) {
    dispatch(restoreAccountRequest(email));
  }

  return (
    <>
      <img src={restore} alt="Restore logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="text" placeholder="Informe seu email." />

        <button type="submit" id="restore">
          Recuperar
        </button>
        <Link to="/">Voltar</Link>
      </Form>
    </>
  );
}

import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import * as Yup from 'yup';
import restore from '~/assets/restore.svg';

export default function RestoreAccount() {
  const [restoreConfirm, setRestoreConfirm] = useState({
    redirect: false,
  });

  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('O e-mail é obrigatório'),
  });

  function handleSubmit(data) {
    setRestoreConfirm({ redirect: true });
    console.tron.log(data);
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

      {restoreConfirm.redirect && <Redirect to="/restore/confirm" />}
    </>
  );
}

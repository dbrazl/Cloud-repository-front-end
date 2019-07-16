import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import restore from '~/assets/restore.svg';

export default function RestoreAccount() {
  const [restoreConfirm, setRestoreConfirm] = useState({
    redirect: false,
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }

  function handleConfirmRedirect() {
    setRestoreConfirm({ redirect: true });
  }

  return (
    <>
      <img src={restore} alt="Restore logo" />

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="text" placeholder="Informe seu email." />

        <button type="submit" id="restore" onClick={handleConfirmRedirect}>
          Recuperar
        </button>
        <Link to="/">Voltar</Link>
      </Form>

      {restoreConfirm.redirect && <Redirect to="/restore/confirm" />}
    </>
  );
}

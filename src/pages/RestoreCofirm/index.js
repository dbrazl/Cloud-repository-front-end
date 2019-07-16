import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import restoreConfirm from '~/assets/restoreConfirm.svg';

export default function RestoreCofirm() {
  const [redirect, setRedirect] = useState({
    redirect: false,
  });

  function handleRedirectToHome() {
    setRedirect({ redirect: true });
  }

  return (
    <>
      <img src={restoreConfirm} alt="Restore confirm logo" />

      <form>
        <p>Uma nova senha foi enviada para o seu email!</p>
        <button type="button" onClick={handleRedirectToHome}>
          Voltar
        </button>
      </form>

      {redirect.redirect && <Redirect to="/" />}
    </>
  );
}

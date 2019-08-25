import { takeLatest, put, call, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSucess, signFailure } from './actions';

export function* singIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSucess(token, user));

    history.push('/repository');
  } catch (err) {
    toast.error('Usuário inválido!');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    history.push('/');
    toast.success('Cadastro efetuado!');
  } catch (err) {
    toast.error(
      'Falha no cadastro! Usuário existente ou os dados estão incorretos.'
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function* restoreAccount({ payload }) {
  try {
    const { email } = payload;

    yield call(api.put, 'restore', {
      email,
    });

    history.push('/restore/confirm');
    toast.success('Senha redefinida');
  } catch (err) {
    toast.error(
      'Falha no envio de e-mail! Verifique se o e-mail está correto!'
    );
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', singIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/RESTORE_ACCOUNT', restoreAccount),
]);

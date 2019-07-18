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
  } catch (err) {
    toast.error('Falaha no cadastro! Verifique seus dados.');
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', singIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);

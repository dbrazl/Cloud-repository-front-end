import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, ProfileMenu } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <header>
        <ProfileMenu>
          <img src="" alt="Foto de perfil" />
          <Link to="/profile" id="profile">
            Nome
          </Link>
          <Link to="/repository" id="repository">
            REPOSITORY
          </Link>
        </ProfileMenu>

        <button type="button" onClick={handleSignOut}>
          Sair
        </button>
      </header>
    </Container>
  );
}

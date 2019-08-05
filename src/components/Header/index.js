import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, ProfileMenu } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  const avatar = useSelector(state => state.user.profile.avatar.url);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <header>
        <ProfileMenu>
          <img
            src={avatar || 'http://localhost:80/file/profile-empty.png'}
            alt="Foto de perfil"
          />
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

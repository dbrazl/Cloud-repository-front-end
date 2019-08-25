import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, ProfileMenu } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  const [name] = profile.name.split(' ');

  return (
    <Container>
      <header>
        <ProfileMenu>
          <Link to="/profile">
            <img
              src={
                profile.avatar.url ||
                'http://localhost:80/file/profile-empty.png'
              }
              alt="Foto de perfil"
            />
          </Link>
          <Link to="/profile" id="profile">
            {name}
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

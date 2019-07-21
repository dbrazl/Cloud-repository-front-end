import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdNavigateBefore, MdDeleteForever } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  BoxContainer,
  OldPassword,
  Modal,
  ModalContainer,
} from './styles';

import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const [password, setPassword] = useState({
    password: '',
  });

  const [modal, setModal] = useState({
    modal: false,
  });

  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    setPassword('');
    setModal(false);
  }, []);

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function showModalView() {
    setModal(true);
  }

  function hideModalView(e) {
    if (e.target.id === 'modal-container') {
      setModal(false);
    }

    if (e.target.id === 'cancel') {
      setModal(false);
    }
  }

  function handleSubmit(data) {
    const { name, email, oldPassword } = data;

    const completData = Object.assign(
      { name, email },
      oldPassword ? { password, oldPassword } : {}
    );

    dispatch(updateProfileRequest(completData));
  }

  return (
    <Container>
      <BoxContainer>
        <Link to="/repository">
          <MdNavigateBefore />
          Voltar ao repositório
        </Link>
        <img src="" alt="Foto de perfil" />

        <Form initialData={profile} onSubmit={handleSubmit}>
          <div>
            <Input name="name" type="text" id="name" placeholder="Nome" />
            <FaEdit />
          </div>
          <div>
            <Input name="email" type="text" placeholder="E-mail" />
            <FaEdit />
          </div>
          <div>
            <input
              name="password"
              type="password"
              onChange={handlePassword}
              placeholder="Senha"
            />
            <FaEdit />
          </div>
          <OldPassword visible={password !== '' ? 1 : 0}>
            <Input
              name="oldPassword"
              type="password"
              placeholder="Forneça a senha antiga"
            />
            <FaEdit />
          </OldPassword>
          <button type="submit">Salvar</button>
          <button type="button" id="delete" onClick={showModalView}>
            <MdDeleteForever />
            Deletar conta
          </button>
        </Form>
      </BoxContainer>

      <ModalContainer onClick={hideModalView} modal={modal ? 1 : 0}>
        <Modal>
          <p>
            Você tem certeza que deseja excluir a sua conta? Todos os seus
            arquivos na nuvem seram excluidos permanentemente!
          </p>
          <div>
            <button type="button" id="confirm">
              <MdDeleteForever />
              Confirmar
            </button>
            <button type="button" id="cancel" onClick={hideModalView}>
              Cancelar
            </button>
          </div>
        </Modal>
      </ModalContainer>
    </Container>
  );
}

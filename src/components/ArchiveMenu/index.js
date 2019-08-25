import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';
import { Form, Input } from '@rocketseat/unform';

import { useDispatch } from 'react-redux';
import { updateListOfFiles } from '~/store/modules/file/actions';

import api from '~/services/api';

import { Container, ModalContainer, Modal } from './styles';

export default function ArchiveMenu({
  id,
  name,
  positionX,
  positionY,
  url,
  path,
  type,
  hideModalArchiveMenu,
}) {
  const [modal, setModal] = useState({
    modal: false,
  });

  const [nameFormatted] = name.split('.');

  const initialData = {
    newName: nameFormatted,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setModal(false);
  }, []);

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

  async function handleRename(data) {
    const { newName } = data;
    const [, extension] = name.split('.');

    const newNameWithExtension = `${newName}.${extension}`;

    await api.put('file', { id, name: newNameWithExtension });

    setModal(false);

    const response = await api.get('file');

    dispatch(updateListOfFiles(response.data));
    hideModalArchiveMenu();
  }

  async function handleDownload() {
    const response = await api.get(`download?name=${name}&path=${path}`, {
      responseType: 'arraybuffer',
    });
    const data = new Blob([response.data], { type });

    const urlDownload = window.URL.createObjectURL(data);

    saveAs(urlDownload, name);
    hideModalArchiveMenu();
  }

  async function handleDelete() {
    await api.delete(`file/${path}`);

    const response = await api.get('file');

    dispatch(updateListOfFiles(response.data));
    hideModalArchiveMenu();
  }

  return (
    <>
      <Container positionX={positionX} positionY={positionY}>
        <h1>{nameFormatted}</h1>

        <a href={url} target="__blank">
          Abrir
        </a>
        <button type="button" onClick={handleDownload}>
          Download
        </button>
        <button type="button" onClick={showModalView}>
          Renomear
        </button>
        <button type="button" onClick={handleDelete}>
          Excluir
        </button>
      </Container>

      <ModalContainer onClick={hideModalView} modal={modal ? 1 : 0}>
        <Modal>
          <Form initialData={initialData} onSubmit={handleRename}>
            <div id="input-field">
              <p>Renomear</p>
              <Input
                name="newName"
                type="text"
                placeholder="Escreva o novo nome do arquivo"
                onClick={e => e.target.select()}
              />
            </div>
            <div id="buttons">
              <button type="button" id="cancel" onClick={hideModalView}>
                Cancelar
              </button>
              <button type="submit" id="confirm">
                Confirmar
              </button>
            </div>
          </Form>
        </Modal>
      </ModalContainer>
    </>
  );
}

ArchiveMenu.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hideModalArchiveMenu: PropTypes.func.isRequired,
};

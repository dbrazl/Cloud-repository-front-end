import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';
import api from '~/services/api';

import { Container } from './styles';

export default function ArchiveMenu({
  name,
  positionX,
  positionY,
  url,
  path,
  type,
}) {
  const [nameFormatted] = name.split('.');

  async function handleDownload() {
    const response = await api.get(`download?name=${name}&path=${path}`, {
      responseType: 'arraybuffer',
    });
    const data = new Blob([response.data], { type });

    const urlDownload = window.URL.createObjectURL(data);

    saveAs(urlDownload, name);
  }

  return (
    <Container positionX={positionX} positionY={positionY}>
      <h1>{nameFormatted}</h1>

      <a href={url} target="__blank">
        Abrir
      </a>
      <a href="#" onClick={handleDownload}>
        Download
      </a>
      <a href="#">Renomear</a>
      <a to="#">Excluir</a>
    </Container>
  );
}

ArchiveMenu.propTypes = {
  name: PropTypes.string.isRequired,
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

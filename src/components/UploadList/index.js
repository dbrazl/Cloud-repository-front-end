import React, { useState, useEffect } from 'react';

import {
  MdClose,
  MdExpandMore,
  MdExpandLess,
  MdError,
  MdCheckCircle,
} from 'react-icons/md';
import { CircularProgressbar } from 'react-circular-progressbar';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { useSelector } from 'react-redux';

import word from '~/assets/word.svg';
import fileSVG from '~/assets/file.svg';
import presentation from '~/assets/presentation.svg';
import image from '~/assets/image.svg';
import pdf from '~/assets/pdf.svg';
import video from '~/assets/video.svg';
import audio from '~/assets/audio.svg';
import spreadsheet from '~/assets/excel.svg';
import zip from '~/assets/zip.svg';

import { Container, UploadFile, Hide, Close } from './styles';

export default function UploadList() {
  const uploaded = useSelector(state => state.file.uploaded);

  const [hide, setHide] = useState(false);
  const [close, setClose] = useState(false);

  function handlePreview(file) {
    const { type } = file;

    const fileTypes = {
      word,
      presentation,
      spreadsheet,
      pdf,
      image,
      video,
      audio,
      zip,
      fileSVG,
    };

    const match = Object.keys(fileTypes).map(key => {
      return type.indexOf(key) > -1 && key;
    });

    match.forEach(element => {
      if (element === false) {
        const index = match.indexOf(false);
        match.splice(index, 1);
      }
    });

    return fileTypes[match[0]] !== undefined
      ? fileTypes[match[0]]
      : fileTypes.fileSVG;
  }

  function hideUploadList() {
    if (hide === false) {
      setHide(true);
    } else {
      setHide(false);
    }
  }

  function closeUploadList() {
    if (close === false) {
      setClose(true);
    } else {
      setClose(false);
    }
  }

  useEffect(() => {
    setClose(false);
    setHide(false);
  }, [uploaded]);

  return (
    <Container hide={hide ? 1 : 0} close={close ? 1 : 0}>
      <div id="menu">
        <Hide type="button" onClick={hideUploadList}>
          {hide ? <MdExpandLess /> : <MdExpandMore />} Esconder
        </Hide>
        <Close type="button" onClick={closeUploadList}>
          <MdClose />
        </Close>
      </div>

      <ul>
        <PerfectScrollbar>
          {uploaded.map(file => {
            const [name] = file.name.split('.');

            return (
              <UploadFile key={file.id}>
                <div>
                  <img src={handlePreview(file)} alt="" />
                  <div>
                    <p>{name}</p>
                    <p>{file.readableSize}</p>
                  </div>
                </div>

                <div>
                  {file.sucess && (
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Abrir
                    </a>
                  )}

                  {file.sucess && (
                    <MdCheckCircle style={{ color: '#5fd38d' }} size={24} />
                  )}
                  {file.error && (
                    <MdError style={{ color: '#ff5555' }} size={24} />
                  )}

                  {file.progress !== 100 && (
                    <CircularProgressbar
                      styles={{
                        root: { width: 24 },
                        path: { stroke: '#2a77ff' },
                      }}
                      strokeWidth={10}
                      value={file.progress}
                    />
                  )}
                </div>
              </UploadFile>
            );
          })}
        </PerfectScrollbar>
      </ul>
    </Container>
  );
}

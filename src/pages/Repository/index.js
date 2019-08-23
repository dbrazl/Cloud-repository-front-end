import React, { useEffect, useState } from 'react';

import Dropzone from 'react-dropzone';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { uniqueId } from 'lodash';
import filesize from 'filesize';
import { useDispatch } from 'react-redux';

import {
  fileUploadRequest,
  fileUploadSucess,
  fileUploadFailure,
  updateProgressBar,
} from '~/store/modules/file/actions';

import word from '~/assets/word.svg';
import fileSVG from '~/assets/file.svg';
import presentation from '~/assets/presentation.svg';
import image from '~/assets/image.svg';
import pdf from '~/assets/pdf.svg';
import video from '~/assets/video.svg';
import audio from '~/assets/audio.svg';
import spreadsheet from '~/assets/excel.svg';
import zip from '~/assets/zip.svg';

import ArchiveMenu from '~/components/ArchiveMenu';
import { DropContainer, Archive, Container } from './styles';

import api from '~/services/api';

export default function Repository() {
  const dispatch = useDispatch();
  // const sucessed = useSelector(state => state.file.sucessed);

  const [list, setList] = useState([]);
  const [modal, setModal] = useState({
    display: false,
    mouseX: 0,
    mouseY: 0,
    file: {},
  });
  // const [added, setAdded] = useState([]);

  useEffect(() => {
    async function findArchives() {
      const response = await api.get('file');

      setList(response.data);
    }

    findArchives();
  }, []);

  /** Error: Only atualize when second archive is uploaded */
  //
  // useEffect(() => {
  //   added.forEach(archiveAdded => {
  //     sucessed.forEach(file => {
  //       if (file.id !== archiveAdded.id) {
  //         setList([...list, file]);
  //       }
  //     });
  //   });

  //   setAdded(sucessed);
  // }, [sucessed]);

  async function uploadToServer(file) {
    try {
      const formData = new FormData();
      formData.append('file', file.file, file.name);

      const response = await api.post('file', formData, {
        onUploadProgress: async e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total), 10);

          dispatch(updateProgressBar(file.id, progress));
        },
      });

      const uploadId = file.id;
      const data = Object.assign(response.data, { uploadId });

      await dispatch(fileUploadSucess(data));

      // Will remove when React Hook problem is resolved
      const files = await api.get('file');
      setList(files.data);
    } catch (err) {
      await dispatch(fileUploadFailure());
    }
  }

  function handleUpload(files) {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      loading: false,
      sucess: false,
      error: false,
      url: null,
      type: file.type,
    }));

    uploadedFiles.map(file => dispatch(fileUploadRequest(file)));

    uploadedFiles.forEach(file => {
      uploadToServer(file);
    });
  }

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

  function showModal(e, file) {
    setModal({
      display: true,
      mouseX: e.pageX,
      mouseY: e.pageY,
      file,
    });
  }

  function hideModal(e) {
    if (e.target.id === 'workbench') {
      setModal({
        display: false,
        mouseX: modal.mouseX,
        mouseY: modal.mouseY,
        file: modal.file,
      });
    }
  }

  return (
    <>
      <Dropzone onDropAccepted={handleUpload} noKeyboard noClick>
        {({ getRootProps, getInputProps, isDragActive }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            onClick={hideModal}
            id="workbench"
          >
            <input {...getInputProps()} />
            <Container id="workbench">
              <ul id="workbench">
                <PerfectScrollbar>
                  {list.map(file => {
                    const [name] = file.name.split('.');

                    return (
                      <li key={file.id}>
                        <Archive onClick={e => showModal(e, file)}>
                          <img src={handlePreview(file)} alt="arquivo" />
                          <p>{name}</p>
                        </Archive>
                      </li>
                    );
                  })}
                </PerfectScrollbar>

                {modal.display && (
                  <ArchiveMenu
                    name={modal.file.name}
                    positionX={modal.mouseX}
                    positionY={modal.mouseY}
                    url={modal.file.url}
                    path={modal.file.path}
                    type={modal.file.type}
                  />
                )}
              </ul>
            </Container>
          </DropContainer>
        )}
      </Dropzone>
    </>
  );
}

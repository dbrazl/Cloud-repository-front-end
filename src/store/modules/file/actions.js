export function fileUploadRequest(data) {
  return {
    type: '@file/UPLOAD_REQUEST',
    payload: data,
  };
}

export function fileUploadSucess(data) {
  return {
    type: '@file/UPLOAD_SUCESS',
    payload: data,
  };
}

export function fileUploadFailure() {
  return {
    type: '@file/UPLOAD_FAILURE',
  };
}

export function updateProgressBar(id, progress) {
  return {
    type: '@file/UPDATE_PROGRESSBAR',
    payload: { id, progress },
  };
}

export function updateListOfFiles(files) {
  return {
    type: '@file/UPDATE_LIST_OF_FILES',
    payload: { files },
  };
}

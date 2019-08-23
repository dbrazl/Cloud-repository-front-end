import produce from 'immer';

const INITIAL_STATE = {
  uploaded: [],
  sucessed: [],
};

export default function file(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@file/UPLOAD_REQUEST': {
        draft.uploaded = draft.uploaded.concat(action.payload);

        draft.uploaded.forEach(element => {
          if (!(element.sucess || element.error)) {
            element.loading = true;
          }
        });
        break;
      }
      case '@file/UPLOAD_SUCESS': {
        draft.sucessed = draft.sucessed.concat(action.payload);

        draft.uploaded.forEach(uploaded => {
          draft.sucessed.forEach(sucessed => {
            if (uploaded.id === sucessed.uploadId) {
              uploaded.sucess = true;
              uploaded.url = sucessed.url;
            }
          });

          uploaded.loading = false;
        });
        break;
      }
      case '@file/UPLOAD_FAILURE': {
        draft.uploaded.forEach(uploaded => {
          uploaded.error = true;
          uploaded.loading = false;
        });
        break;
      }
      case '@file/UPDATE_PROGRESSBAR': {
        draft.uploaded.forEach(element => {
          if (element.id === action.payload.id) {
            element.progress = action.payload.progress;
          }
        });
        break;
      }
      default:
    }
  });
}

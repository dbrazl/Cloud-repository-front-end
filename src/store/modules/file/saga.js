// import { all, call, put, takeEvery } from 'redux-saga/effects';
// import api from '~/services/api';

// import {
//   fileUploadSucess,
//   fileUploadFailure,
//   // updateProgressBar,
// } from './actions';

// export function* upload({ payload }) {
//   const { id: uploadId, file, name } = payload;

//   try {
//     const formData = new FormData();
//     formData.append('file', file, name);

//     const response = yield call(api.post, 'file', formData, {
//       // onUploadProgress: async e => {
//       //   const progress = parseInt(Math.round((e.loaded * 100) / e.total), 10);
//       //
//       //   Not working - don't dispatch reducer
//       //   await put(updateProgressBar(uploadId, progress));
//       // },
//     });

//     const data = Object.assign(response.data, { uploadId });
//     yield put(fileUploadSucess(data));
//   } catch (err) {
//     yield put(fileUploadFailure());
//   }
// }

// export default all([takeEvery('@file/UPLOAD_REQUEST', upload)]);

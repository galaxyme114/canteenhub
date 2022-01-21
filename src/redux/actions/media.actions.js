/* eslint-disable no-console */
import axios from 'axios';
import { headersMedia } from '@configs/apiHeaders.js';
// import { getUsers } from './user.actions';

// ** Upload File
export const addMedia = (mediaFile, resourceObjId, resourceType, resourceField) => async (dispatch, getState) => {
  const formData = new FormData();
  formData.append('mediaFile', mediaFile[0].file);
  formData.append('resourceObjId', resourceObjId);
  formData.append('resourceType', resourceType);
  formData.append('resourceField', resourceField);

  await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/media/upload/`, formData, {
    headersMedia,
  })
    .then((response) => {
      console.log('Media Upload Resp');

      // Upload

      // dispatch({
      //   type: 'ADD_MEDIA',
      //   mediaFile,
      // });
    })
    // .then(() => {
    //   dispatch(getStores(getState().users.params));
    //   dispatch(getUsers());
    // })
    .catch((err) => {
      console.log('Media Upload Error');
      console.log(err);

      if (err.response) {
        console.log(err.response.data);
        // console.log(err.response.status);
      } else {
        console.log('Error', err.message);
      }
      throw err;
    });
};

// ** Delete Store
// export const deleteStore = (id) => async (dispatch, getState) => {
//   console.log('delete store');
//   // await axios
//   //   .delete(`${process.env.REACT_APP_SERVER_URL}/api/users/delete/${id}`, {
//   //     headers,
//   //   })
//   //   .then((response) => {
//   //     dispatch({
//   //       type: 'DELETE_USER',
//   //     });
//   //   })
//   //   .then(() => {
//   //     dispatch(getStoreUsers(getState().users.params));
//   //     // dispatch(getUsers());
//   //   }).catch((err) => {
//   //     if (err.response) {
//   //       console.log(err.response.data);
//   //     } else {
//   //       console.log('Error', err.message);
//   //     }
//   //     throw err;
//   //   });
// };

// ** Get Store Users
// export const getStoreUsers = (params) => async (dispatch) => {
//   axios.get(`${process.env.REACT_APP_SERVER_URL}/api/storeUsers/list/`,
//     {
//       headers,
//       params,
//     }).then((response) => {
//     console.log('response', response);
//     dispatch({
//       type: 'GET_DATA',
//       data: response.data.results,
//       totalCount: response.data.totalCount,
//       filteredCount: response.data.filteredCount,
//       params,
//     });
//   }).catch((e) => {
//     console.log(e);
//   });
// };

// ** Get Store User
// export const getStoreUser = (id) => async (dispatch) => {
//   axios.get(`${process.env.REACT_APP_SERVER_URL}/api/storeUsers/user/${id}`,
//     {
//       headers,
//     }).then((response) => {
//     console.log(response);
//     dispatch({
//       type: 'GET_USER',
//       selectedUser: response.data,
//     });
//   }).catch((e) => {
//     console.log(e);
//   });
// };

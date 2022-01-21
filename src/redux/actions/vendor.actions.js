/* eslint-disable no-console */
import axios from 'axios';
import { headers } from '@configs/apiHeaders.js';
import { addMedia } from '@store/actions/media.actions';
import { getUsers } from './user.actions';

// ** Get Stores
export const getStores = (params) => async (dispatch) => {
  axios.get(`${process.env.REACT_APP_SERVER_URL}/api/stores/`,
    {
      headers,
      params,
    }).then((response) => {
    dispatch({
      type: 'GET_STORES',
      data: response.data.results,
      totalCount: response.data.totalCount,
      filteredCount: response.data.filteredCount,
      params,
    });
  }).catch((e) => {
    console.log(e);
  });
};

// ** Get Store
export const getStore = (id) => async (dispatch) => {
  await axios
    .get(`${process.env.REACT_APP_SERVER_URL}/api/stores/${id}`, { headers })
    .then((response) => {
      console.log('store response', response);
      dispatch({
        type: 'GET_STORE',
        selectedStore: response.data,
      });
    })
    .catch((err) => console.log(err));
};

// ** Add Store
export const addStore = (store) => async (dispatch, getState) => {
  const storeLogo = store.storeLogo ? store.storeLogo : '';
  delete (store.storeLogo);

  await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/stores/create/`, store, {
    headers,
  })
    .then(async (response) => {
      const storeObjId = response.data.store._id;
      dispatch({
        type: 'ADD_STORE',
        selectedStore: response.data.store,
      });

      // Add Logo if Populated
      console.log('storeLogo', storeLogo, storeObjId);
      if (storeLogo) {
        await dispatch(addMedia(storeLogo, storeObjId, 'Store', 'storeLogo'));
      }
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data);
      } else {
        console.log('Error', err.message);
      }
      throw err;
    });
};

// ** Delete Store
export const deleteStore = (id) => async (dispatch, getState) => {
  console.log('delete store');
  // await axios
  //   .delete(`${process.env.REACT_APP_SERVER_URL}/api/users/delete/${id}`, {
  //     headers,
  //   })
  //   .then((response) => {
  //     dispatch({
  //       type: 'DELETE_USER',
  //     });
  //   })
  //   .then(() => {
  //     dispatch(getStoreUsers(getState().users.params));
  //     // dispatch(getUsers());
  //   }).catch((err) => {
  //     if (err.response) {
  //       console.log(err.response.data);
  //     } else {
  //       console.log('Error', err.message);
  //     }
  //     throw err;
  //   });
};

// ** Add Store User
export const addStoreUser = (user) => async (dispatch, getState) => {
  // console.log(user);
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/storeUsers/create/`, user, {
    headers,
  })
    .then((response) => {
      dispatch({
        type: 'ADD_USER',
        user,
      });
    })
    .then(() => {
      dispatch(getUsers(getState().users.params));
      // dispatch(getUsers());
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data);
        // console.log(err.response.status);
      } else {
        console.log('Error', err.message);
      }
      throw err;
    });
};

// ** Get Store Users
export const getStoreUsers = (params) => async (dispatch) => {
  axios.get(`${process.env.REACT_APP_SERVER_URL}/api/storeUsers/list/`,
    {
      headers,
      params,
    }).then((response) => {
    console.log('response', response);
    dispatch({
      type: 'GET_DATA',
      data: response.data.results,
      totalCount: response.data.totalCount,
      filteredCount: response.data.filteredCount,
      params,
    });
  }).catch((e) => {
    console.log(e);
  });
};

// ** Get Store User
export const getStoreUser = (id) => async (dispatch) => {
  axios.get(`${process.env.REACT_APP_SERVER_URL}/api/storeUsers/user/${id}`,
    {
      headers,
    }).then((response) => {
    console.log(response);
    dispatch({
      type: 'GET_USER',
      selectedUser: response.data,
    });
  }).catch((e) => {
    console.log(e);
  });
};

// ** Delete user
export const deleteStoreUser = (id) => async (dispatch, getState) => {
  await axios
    .delete(`${process.env.REACT_APP_SERVER_URL}/api/storeUsers/delete/${id}`, {
      headers,
    })
    .then((response) => {
      dispatch({
        type: 'DELETE_USER',
      });
    })
    .then(() => {
      dispatch(getStoreUsers(getState().users.params));
      // dispatch(getUsers());
    }).catch((err) => {
      if (err.response) {
        console.log(err.response.data);
      } else {
        console.log('Error', err.message);
      }
      throw err;
    });
};

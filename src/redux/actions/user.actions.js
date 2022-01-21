/* eslint-disable no-console */
import axios from 'axios';
import { headers } from '@configs/apiHeaders.js';
import { handleLogin } from '@store/actions/auth';

// ** Get all Data
export const getUsers = (params) => async (dispatch) => {
  axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/`,
    {
      headers,
      params,
    }).then((response) => {
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

// ** Get data on page or row change (DEPRECATE THIS IS POSSIBLE)
export const getData = (params) => async (dispatch) => {
  await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/`, { params, headers }).then((response) => {
    dispatch({
      type: 'GET_DATA',
      data: response.data,
      totalPages: response.data.total,
      params,
    });
  });
};

// ** Get User
export const getUser = (id) => async (dispatch) => {
  await axios
    .get(`${process.env.REACT_APP_SERVER_URL}/api/users/${id}`, { headers })
    .then((response) => {
      dispatch({
        type: 'GET_USER',
        selectedUser: response.data,
      });
    })
    .catch((err) => console.log(err));
};

// ** Get Me
export const getMe = () => async (dispatch) => {
  await axios
    .get(`${process.env.REACT_APP_SERVER_URL}/api/users/user/me`, { headers })
    .then((response) => {
      dispatch(handleLogin(response.data));
      // dispatch({
      //   type: 'GET_ME',
      //   me: response.data,
      // });
    })
    .catch((err) => console.log(err));
};

// ** Add new user
// export const addUser = (user) => async (dispatch, getState) => {
//   axios
//     .post('/apps/users/add-user', user)
//     .then((response) => {
//       dispatch({
//         type: 'ADD_USER',
//         user,
//       });
//     })
//     .then(() => {
//       // dispatch(getData(getState().users.params));
//       dispatch(getUsers());
//     })
//     .catch((err) => console.log(err));
// };

// ** Update user
export const updateUser = (id, data) => async (dispatch, getState) => {
  await axios.patch(`${process.env.REACT_APP_SERVER_URL}/api/users/update/${id}`, data, {
    headers,
  })
    .then((response) => {
      dispatch({
        type: 'UPDATE_USER',
      });
    })
    .then(() => {
      // dispatch(getData(getState().users.params));
      dispatch(getUser(id));
    }).catch((err) => {
      if (err.response) {
        console.log(err.response.data);
      } else {
        console.log('Error', err.message);
      }
      throw err;
    });
};

// ** Delete user
export const deleteUser = (id) => async (dispatch, getState) => {
  await axios
    .delete(`${process.env.REACT_APP_SERVER_URL}/api/users/delete/${id}`, {
      headers,
    })
    .then((response) => {
      dispatch({
        type: 'DELETE_USER',
      });
    })
    .then(() => {
      dispatch(getUsers(getState().users.params));
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

// ** Approve user
export const approveUser = (id) => async (dispatch, getState) => {
  await axios
    .patch(`${process.env.REACT_APP_SERVER_URL}/api/users/approve/${id}`, {
      headers,
    })
    .then((response) => {
      dispatch({
        type: 'UPDATE_USER',
      });
    })
    .then(() => {
      dispatch(getUsers(getState().users.params));
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

// ** Decline user
export const declineUser = (id) => async (dispatch, getState) => {
  await axios
    .patch(`${process.env.REACT_APP_SERVER_URL}/api/users/decline/${id}`, {
      headers,
    })
    .then((response) => {
      dispatch({
        type: 'UPDATE_USER',
      });
    })
    .then(() => {
      dispatch(getUsers(getState().users.params));
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

// ** Add Admin
export const addAdmin = (user) => async (dispatch, getState) => {
  console.log(getState().users.params);
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/administrators/create/`, user, {
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

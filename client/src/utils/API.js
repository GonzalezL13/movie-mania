import axios from "axios";

export const getMe = (token) => {
  return axios('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return axios('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return axios('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};





// export default {

//   getUser: function({params}) {
//     return axios.get("/api/users:id", { _id: params.id } );
//   },

//   createUser: function(userData) {
//     return axios.post("/api/users", userData);
//   }
// };

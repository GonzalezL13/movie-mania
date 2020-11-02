// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};


export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// export const loginUser = (userData) => {
//   return fetch('/api/users/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
// };



// save movie data for a logged in user
export const saveMovie = (movieData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(movieData),
  });
};

// remove saved movie data for a logged in user
export const deleteMovie = (movieId, token) => {
  return fetch(`/api/users/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};



import axios from 'axios';


// const createUser = (userData) => {
//   return axios.post("/api/users", userData);
// };

// const loginUser = ({params}) => {
//   return axios.post("/api/users:id", { _id: params.id } )
// };


export default {

  getUser: function({params}) {
    return axios.get("/api/users:id", { _id: params.id } );
  },

  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  Userlogin: function({params}) {
    return axios.post("/api/users:id", { _id: params.id } )
  },
};


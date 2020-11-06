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
  console.log(userData)
     return axios.post('/api/users', {
       userData
     })
  };

  export const userLogin = (userData) => {
     console.log(userData)
      return axios.post('/api/users/login', {
         userData
       })
    };

// save movie data for a logged in user
export const saveMovie = (movieData, token) => {
  return axios('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(movieData),
  });
};

// remove saved movie data for a logged in user
export const deleteMovie = (movieID, token) => {
  return axios(`/api/users/movies/${movieID}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

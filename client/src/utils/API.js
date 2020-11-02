// export const createUser = (userData) => {
//   return fetch('/api/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
// };

// export const loginUser = (userData) => {
//   return fetch('/api/users/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
// };




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


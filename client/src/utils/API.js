import axios from "axios";

export default {

  getUser: function({params}) {
    return axios.get("/api/users:id", { params: { _id: params.id } });
  },

  createUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};


//Axios examples
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
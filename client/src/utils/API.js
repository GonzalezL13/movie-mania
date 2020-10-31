import axios from "axios";

export default {
  // Gets something

  getSomething: function(query) {
    return axios.get("/api/something", { params: { query: "Thing looking for" } });
  },

  // Saves data to the database
  saveSomething: function(somethingData) {
    return axios.post("/api/something", somethingData);
  }
};
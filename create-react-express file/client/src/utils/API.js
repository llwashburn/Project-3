import axios from "axios";



//methods for interacting with API Auth routes
export default {

// Gets form
sendForm: function(formData) {
    return axios.post("/api/contact", formData);
}

  // login: userData =>
  //   axios.post("/auth/login", userData),
  // signUp: userData =>
  //   axios.post('/auth/signup', userData),
  // dashboard: token =>
  //   axios.get('/api/dashboard', {
  //     headers: {
  //       Authorization: `bearer ${token}`
  //     }
  //   })
};

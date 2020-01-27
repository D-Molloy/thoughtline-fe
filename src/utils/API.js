let API;

if (process.env.REACT_APP_ENV === "production") {
  API = "https://thoughtline-be.herokuapp.com";
} else {
  API = "http://localhost:4000";
}

export default API;

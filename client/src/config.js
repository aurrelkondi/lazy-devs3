const config = {

  model: "dev", // "deploy"
  dev: {
    domain: "http://localhost:5000",
    frontEnd: "http://localhost:3000",
  },
  deploy: {
    domain: "https://lazydevs.onrender.com",
    frontEnd: "https://lazydevs.onrender.com",
  },
};
// "proxy": "http://localhost:5000",
module.exports = config;

const fetch = require("node-fetch");

exports.readJson = () => {
  const data = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
      return json;
    });
  return data;
};

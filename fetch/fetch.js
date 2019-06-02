global.fetch = require("node-fetch");

fetch('my-json-server.typicode.com/user/repo/posts/1')
  .then((response) => {
    return response.json()
  })
  .then((myJson) => {
    console.log(JSON.stringify(myJson))
  })

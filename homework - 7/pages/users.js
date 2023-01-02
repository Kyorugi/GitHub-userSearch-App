import baseUrl from "../utils/baseUrl.js";

async function getUser() {
  const response = await fetch(baseUrl);
  const users = await response.json;
  console.log(response);
  return users;
}

getUser();

fetch(baseUrl)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

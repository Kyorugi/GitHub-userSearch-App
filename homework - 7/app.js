import { getUser } from "./data fetches/UserFetching.js";
const reposContainer = document.querySelector(".repos-container");
let userSearch = document.querySelector(".user-search-input");
let userLogin = "graffiss";

getUser(userLogin);

function displayUser() {
  getUser(this.value);
}

userSearch.addEventListener("change", displayUser);

function removeUser() {
  userSearch.addEventListener("change", () => {
    reposContainer.innerHTML = "";
  });
}
removeUser();

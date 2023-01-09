import { getUser } from "./data fetches/UserFetching.js";
let userSearch = document.querySelector(".user-search-input");
let userLogin = "kyorugi";

getUser(userLogin);

function displayUser() {
  getUser(this.value);
}

userSearch.addEventListener("change", displayUser);

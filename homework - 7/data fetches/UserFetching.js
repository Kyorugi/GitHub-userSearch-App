import { getRepositoryData } from "./UserReposFetching.js";
import { createUser } from "../components/user.js";
import baseUrl from "../utils/baseUrl.js";

export async function getUser(login) {
  const response = await fetch(baseUrl + login);
  if (!response.ok) {
    let userError = "User doesn't exist";
    alert(userError);
    window.location.reload();
  }
  const user = await response.json();
  console.log(user);
  createUser(user);
  getRepositoryData(user.repos_url);
}

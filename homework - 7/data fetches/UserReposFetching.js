import { createRepository } from "../components/userRepos.js";

export async function getRepositoryData(reposUrl) {
  const response = await fetch(reposUrl);
  const userRepos = await response.json();
  createRepository(userRepos);
}

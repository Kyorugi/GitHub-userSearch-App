const reposContainer = document.querySelector(".repos-container");

export const createRepository = (userRepos) => {
  userRepos.slice(0, 8).forEach((repo) => {
    let userPublicRepo = document.createElement("a");
    userPublicRepo.classList.add("user-public-repos");
    userPublicRepo.href = repo.html_url;
    userPublicRepo.target = "_blank";
    userPublicRepo.onclick = repo.html_url;
    userPublicRepo.innerHTML = repo.name;
    reposContainer.appendChild(userPublicRepo);
  });
  console.log(userRepos);
};

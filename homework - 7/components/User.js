import { addUserImage } from "../UI/image.js";
let userProfil = document.querySelector(".user-container");

export const createUser = (user) => {
  if (user.bio === null) {
    user.bio = "Description not provided";
  }
  return (userProfil.innerHTML = `
   <div class="user-image">${addUserImage(user)}</div>
   <div class="user-information">
     <h1 class="userName">${user.name}</h1>
     <h3 class="userDescription">${user.bio}</h3>
     <div class="user-follows-repos"><span class="user-followers">${user.followers} Followers</span> <span class="user-following">${
    user.following
  } Following</span> <span class="user-repos">${user.public_repos} Repos</span></div>
     <div class="repos-container"></div>
   </div>
   `);
};

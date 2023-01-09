import { addUserImage } from "../UI/image.js";
// let userImage = document.querySelector(".user-image");
// let userName = document.querySelector(".userName");
// let userDescription = document.querySelector(".userDescription");
// let userFollowers = document.querySelector(".user-followers");
// let userFollowing = document.querySelector(".user-following");
// let userNumbOfRepos = document.querySelector(".user-repos");
let userProfil = document.querySelector(".user-container");

// export const createUser = (user) => {
//   userImage.innerHTML = addUserImage(user);
//   userName.innerHTML = user.name;
//   userDescription.innerHTML = user.bio;
//   userFollowers.innerHTML = `${user.followers} Followers`;
//   userFollowing.innerHTML = `${user.following} Following`;
//   userNumbOfRepos.innerHTML = `${user.public_repos} Repos`;
//   if (user.bio === null) {
//     userDescription.innerHTML = "Description not provided";
//   }
// };

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

import { addUserImage } from "../UI/image.js";
let userImage = document.querySelector(".user-image");
let userName = document.querySelector(".userName");
let userDescription = document.querySelector(".userDescription");
let userFollowers = document.querySelector(".user-followers");
let userFollowing = document.querySelector(".user-following");
let userNumbOfRepos = document.querySelector(".user-repos");

export const createUser = (user) => {
  userImage.innerHTML = addUserImage(user);
  userName.innerHTML = user.name;
  userDescription.innerHTML = user.bio;
  userFollowers.innerHTML = `${user.followers} Followers`;
  userFollowing.innerHTML = `${user.following} Following`;
  userNumbOfRepos.innerHTML = `${user.public_repos} Repos`;
  if (user.bio === null) {
    userDescription.innerHTML = "Description not provided";
  }
};

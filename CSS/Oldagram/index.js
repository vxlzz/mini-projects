const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postContainer = document.querySelector(".post-container");

for (let i = 0; i < posts.length; i++) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerHTML = `
    <div class="post-header">
      <img src="${posts[i].avatar}" alt="${posts[i].name}" class="avatar" />
      <div class="post-info">
        <h2>${posts[i].name}</h2>
        <p>${posts[i].location}</p>
      </div>
    </div>
    <img src="${posts[i].post}" alt="${posts[i].name}" class="post-image" />
    <div class="post-icons">
        <img src="./images/icon-heart.png" alt="Heart icon">
        <img src="./images/icon-comment.png" alt="Comment icon">
        <img src="./images/icon-dm.png" alt="Share icon">
    </div>
    <div class="post-footer">
      <span class="accent-text">${posts[i].likes} likes</span>
      <p class="post-comment"><span class="accent-text">${posts[i].username}</span> ${posts[i].comment}</p>
    </div>
    <div class="post-break"></div>
  `;

  postContainer.appendChild(post);
}

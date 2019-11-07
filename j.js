var posts = [
  {
    id: 0,
    title: "Photography is amazing!",
    text: "Get out there and shoot!",
    author: "uncommonsight",
    subraddit: "photography",
    likes: 0,
    dislikes: 0
  },
  {
    id: 1,
    title: "Black and White",
    text: "Can you see shades of grey?",
    author: "uncommonsight",
    subraddit: "photography",
    likes: 0,
    dislikes: 0
  },
  {
    id: 2,
    title: "Lets edit!",
    text: "Today we are going to learn some lightroom tricks of the trade.",
    author: "uncommonsight",
    subraddit: "photography",
    likes: 0,
    dislikes: 0
  }
];

function drawPost(post) {
  var element = document.createElement("post");
  element.id = "post" + post.id;
  element.innerHTML = '<div class="post-title">' + post.title + "</div>";
  element.innerHTML +=
    '<div class="post-text">' + post.text.substring(0, 100) + "</div>";
  element.innerHTML += '<div class="post-author">' + post.author + "</div>";
  element.style.display = "flex";
  element.style.flexDirection = "column";

  $("#content").append(element);
}

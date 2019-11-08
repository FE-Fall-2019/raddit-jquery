var posts = [
  {
    id: 0,
    title: "Javascript is fun",
    text: "Not really. I lied.",
    author: "user@test.com",
    subraddit: "programming",
    likes: 0,
    dislikes: 0
  },
  {
    id: 1,
    title: "Some interesting title",
    text: "Not really. I lied",
    author: "user@test.com",
    subraddit: "programming",
    likes: 0,
    dislikes: 0
  },
  {
    id: 2,
    title: "Lorem Epsum",
    text:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    author: "user@test.com",
    subraddit: "programming",
    likes: 0,
    dislikes: 0
  },
  {
    id: 3,
    title: "Fun Times with food",
    text: "I like food. A lot. Obviously.",
    author: "user@test.com",
    subraddit: "food",
    likes: 0,
    dislikes: 0
  },
  {
    id: 4,
    title: "Fun Times with drinking",
    text: "Responsibly. Please.",
    author: "user@test.com",
    subraddit: "drink",
    likes: 0,
    dislikes: 0
  }
];

function drawPosts() {
  $("#content").html("");
  posts.forEach(p => drawPost(p));
}

function drawPost(post) {
  var element = document.createElement("post");
  element.id = "post" + post.id;
  element.innerHTML = printFullHTML(post);

  // element.style.display = "flex";
  // element.style.flexDirection = "column";

  $("#content").append(element);
}

function likePost(id) {
  let post = posts.find(p => p.id === id);
  post.likes++;

  $("#up" + id).addClass("red");
  drawPosts();
}

function dislikePost(id) {
  let post = posts.find(p => p.id === id);
  post.dislikes++;

  $("#down" + id).addClass("blue");
  drawPosts();
}

function printFullHTML(post) {
  var fullHTML = '<div class= "flex row-container">';
  fullHTML += printLeftHTML(post);
  fullHTML += printRightHTML(post);
  fullHTML += "</div>";
  return fullHTML;
}

function printLeftHTML(post) {
  var tempHTML =
    '<div class="flex col-container p20" style="justify-content: space-evenly; border: 1px solid gray">';
  tempHTML += printThumbsUp(post);
  tempHTML += printCount(post);
  tempHTML += printThumbsDown(post);
  tempHTML += "</div>";
  return tempHTML;
}

function printThumbsUp(post) {
  var tempHTML =
    '<div id="up' + post.id + '" onclick="likePost(' + post.id + ')")>';
  tempHTML += '<i class="far fa-thumbs-up"></i>';
  tempHTML += "</div>";
  return tempHTML;
}

function printCount(post) {
  return post.likes - post.dislikes;
}

function printThumbsDown(post) {
  var tempHTML =
    '<div id="down' + post.id + '" onclick="dislikePost(' + post.id + ')">';
  tempHTML += '<i class="far fa-thumbs-down"></i>';
  tempHTML += "</div>";
  return tempHTML;
}

function printRightHTML(post) {
  var tempHTML = '<div class="flex col-container" style="width: 100%">';
  tempHTML += printTitle(post.title);
  tempHTML += printText(post.text);
  tempHTML += printAuthor(post.author);
  tempHTML += "</div>";
  return tempHTML;
}

function printTitle(title) {
  return '<div class="post-title">' + title + "</div>";
}

function printText(text) {
  return '<div class="post-text">' + text.substring(0, 100) + "</div>";
}

function printAuthor(author) {
  return '<div class="post-author">' + author + "</div>";
}

function createNewPost() {
  let title = $("#postTitle").val();
  let text = $("#postText").val();
  let subRaddit = $("#postSubraddit").val();

  let newPost = {
    id: posts.length,
    title: title,
    text: text,
    subRaddit: subRaddit,
    author: "user@test.com",
    likes: 0,
    dislikes: 0
  };

  posts.push(newPost);
  drawPosts();
}

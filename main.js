function drawPost(post) {
    var element = document.createElement('post');
    element.id = 'post' + post.id;

    printFullHTML(post).then(data => {
        element.innerHTML = data;
        $('#content').append(element);
    })
}

function likePost(id) {
    $.ajax({
        url: 'http://api-test.new-labs.co:8080/demo/post/addlike/' + id,
        method: 'POST',
        success: function (data, status) {
            $('#up' + id).addClass('red');
            $('#down' + id).removeClass('blue');
            $('#postCount' + id).html(data.likes - data.dislikes);
        },
        error: function (err, status) {
            console.log(err);
        }
    });

}

function dislikePost(id) {
    $.ajax({
        url: 'http://api-test.new-labs.co:8080/demo/post/unlike/' + id,
        method: 'POST',
        success: function (data, status) {
            $('#down' + id).addClass('blue');
            $('#up' + id).remov\Class('red');
            $('#postCount' + id).html(data.likes - data.dislikes);
        },
        error: function (err, status) {
            console.log(err);
        }
    });
}

async function printFullHTML(post) {
    var fullHTML = '<div class="flex row-container">';
    fullHTML += printLeftHTML(post);
    fullHTML += await printRightHTML(post);
    fullHTML += '</div>';
    return fullHTML;
}

function printCommentHTML(comment) {
    var tempHTML = "<div class='p20' id='comment" + comment.id + "'>";
    tempHTML += "<h4>" + comment.author + "</h4>";
    tempHTML += "<h6>" + comment.body + "</h6>";
    tempHTML += "</div>";
    return tempHTML;
}

function printLeftHTML(post) {
    var tempHTML = '<div class="flex col-container p20" style="justify-content: space-evenly; border: 1px solid gray">';
    tempHTML += printThumbsUp(post);
    tempHTML += printCount(post);
    tempHTML += printThumbsDown(post);
    tempHTML += '</div>';
    return tempHTML;
}

function printThumbsUp(post) {
    var tempHTML = '<div class="' + (post.interaction > 0 ? 'red' : '') + '" id="up' + post.id + '" onclick="likePost(' + post.id + ')">';
    tempHTML += '<i class="far fa-thumbs-up"></i>';
    tempHTML += '</div>';
    return tempHTML;
}

function printCount(post) {
    var tempHTML = '<div id="postCount' + post.id + '">';
    tempHTML += post.likes - post.dislikes;
    tempHTML += '</div>';
    return tempHTML;
}

function printThumbsDown(post) {
    var tempHTML = '<div class="' + (post.interaction < 0 ? 'blue' : '') + '" id="down' + post.id + '" onclick="dislikePost(' + post.id + ')">';
    tempHTML += '<i class="far fa-thumbs-down"></i>';
    tempHTML += '</div>';
    return tempHTML;
}

async function printRightHTML(post) {
    var tempHTML = '<div class="flex col-container" style="width: 100%">';
    tempHTML += printTitle(post.title);
    tempHTML += printText(post.body || '');
    tempHTML += printAuthor(post.author);
    tempHTML += '<div class="p20 cursor" onclick="toggleComments(' + post.id + ')">Show Comments</div>';
    tempHTML += '<div style="display: none" id="commentSection' + post.id + '">';
    let comments = await $.get("http://api-test.new-labs.co:8080/demo/comment/" + post.id);
    comments.forEach(comment => {
        tempHTML += printCommentHTML(comment);
    });
    tempHTML += printNewComment(post);
    tempHTML += '</div>';
    tempHTML += '</div>';
    return tempHTML;
}

function toggleComments(id) {
    $('#commentSection' + id).toggle();
}

function printNewComment(post) {
    var tempHTML = '<div class="p20">';
    tempHTML += '<input type="text" id="commentInput" placeholder="Enter new comment" /><br />';
    tempHTML += '<button onclick="createNewComment(' + post.id + ')">Add Comment</button>';
    tempHTML += '</div>';
    return tempHTML;
}

function printTitle(title) {
    return '<div class="post-title">' + title + '</div>'
}

function printText(text) {
    return '<div class="post-text">' + text.substring(0, 100) + '</div>';
}

function printAuthor(author) {
    return '<div class="post-author">' + author + '</div>';
}

function createNewPost() {
    let title = $('#postTitle').val();
    let text = $('#postText').val();
    let subraddit = $('#postSubraddit').val();

    if (title.trim() === '' || text.trim() === '' || subraddit.trim() === '') {
        alert('don\'t be stupid.');
    }

    let newPost = {
        title: title,
        body: text,
        subraddit: subraddit.toLowerCase(),
        author: 'user@test.com',
    }

    $.ajax({
        url: "http://api-test.new-labs.co:8080/demo/post",
        type: "POST",
        data: JSON.stringify(newPost),
        contentType: "application/json; charset=UTF-8",
        dataType: "json",
        success: function (data, status) {
            $(location).attr("href", "index.html");
        },
        error: function () {
            alert('something bad happened');
        }
    });
}

function createNewComment(id) {
    let body = $('#commentInput').val();

    let newComment = {
        postId: id,
        body: body,
        author: 'user@test.com'
    }

    $.ajax({
        url: "http://api-test.new-labs.co:8080/demo/comment",
        type: "POST",
        data: JSON.stringify(newComment),
        contentType: "application/json; charset=UTF-8",
        dataType: "json",
        success: function (data, status) {
            $(location).attr("href", "index.html");
        },
        error: function () {
            alert('nope');
        }
    })
}
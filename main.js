function drawPost(post) {
    var element = document.createElement('post');
    element.id = 'post' + post.id;

    element.innerHTML = printFullHTML(post);
    $('#content').append(element);
}

function likePost(id) {
    let post = posts.find(p => p.id === id);
    if (post.interaction > 0) {
        return;
    }
    post.likes++;
    post.interaction = 1;
    $('#up' + id).addClass('red');
    drawPosts();
}

function dislikePost(id) {
    let post = posts.find(p => p.id === id);
    if (post.interaction < 0) {
        return;
    }
    post.dislikes++;
    post.interaction = -1;
    $('#down' + id).addClass('blue');
    drawPosts();
}

function printFullHTML(post) {
    var fullHTML = '<div class="flex row-container">';
    fullHTML += printLeftHTML(post);
    fullHTML += printRightHTML(post);
    fullHTML += '</div>';
    return fullHTML;
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
    return post.likes - post.dislikes;
}

function printThumbsDown(post) {
    var tempHTML = '<div class="' + (post.interaction < 0 ? 'blue' : '') + '" id="down' + post.id + '" onclick="dislikePost(' + post.id + ')">';
    tempHTML += '<i class="far fa-thumbs-down"></i>';
    tempHTML += '</div>';
    return tempHTML;
}

function printRightHTML(post) {
    var tempHTML = '<div class="flex col-container" style="width: 100%">';
    tempHTML += printTitle(post.title);
    tempHTML += printText(post.body || '');
    tempHTML += printAuthor(post.author);
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
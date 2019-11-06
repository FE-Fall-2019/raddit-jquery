var posts = [
    {
        id: 0,
        title: 'Javascript is fun',
        text: 'Not really. I lied.',
        author: 'user@test.com',
        subraddit: 'programming',
        likes: 0,
        dislikes: 0,
    },
    {
        id: 1,
        title: 'Some interesting title',
        text: 'Not really. I lied.',
        author: 'user@test.com',
        subraddit: 'programming',
        likes: 0,
        dislikes: 0
    },
    {
        id: 2,
        title: 'Lorem Ipsum',
        text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
        author: 'user@test.com',
        subraddit: 'programming',
        likes: 0,
        dislikes: 0
    },
    {
        id: 3,
        title: 'Fun times with food',
        text: 'I like food. A lot. Obviously.',
        author: 'user@test.com',
        subraddit: 'food',
        likes: 0,
        dislikes: 0
    },
    {
        id: 4,
        title: 'Fun times with drinking',
        text: 'Responsibly. Please.',
        author: 'user@test.com',
        subraddit: 'drink',
        likes: 0,
        dislikes: 0
    }
]

function drawPost(post) {
    var element = document.createElement('post');
    element.id = 'post' + post.id;
    element.innerHTML = '<div class="post-title">' + post.title + '</div>';
    element.innerHTML += '<div class="post-text">' + post.text.substring(0, 100) + '</div>';
    element.innerHTML += '<div class="post-author">' + post.author + '</div>';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';

    $('#content').append(element);
}
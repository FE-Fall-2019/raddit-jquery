let posts = [
    {
        id: 0,
        title: 'Javascript is fun',
        text: 'A blasty blast',
        author: 'user@test.com',
        likes: 0,
        dislikes: 0,
    },
    {
        id: 1,
        title: 'Some Interesting Titles',
        text: 'I am very creative',
        author: 'user@test.com',
        likes: 0,
        dislikes: 0,
    },
    {
        id: 2,
        title: 'Some Interesting Title',
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        author: 'user@test.com',
        subraddit: 'programming',
        likes: 0,
        dislikes: 0
    },
    {
        id: 3,
        title: "Food",
        text: "I like food",
        author: "user@test.com",
        subraddit: "food",
        likes: 0,
        dislikes: 0
    },
    {
        id: 4,
        title: "Drink",
        text: "Responsibly. Please",
        author: "user@test.com",
        subraddit: "drink",
        likes: 0,
        dislikes: 0,
    },
    {
        id: 5,
        title: "Meditation",
        text: "There are many different types of meditaiton, but meditation is a a type of yoga",
        author: "user@test.com",
        subraddit: "yoga",
        likes: 0,
        dislikes: 0,
    },
    {
        id: 6,
        title: "Yoga",
        text: "Responsibly. Please",
        author: "user@test.com",
        subraddit: "yoga",
        likes: 0,
        dislikes: 0,
    },
]



function drawPost(post) {
    // console.log(post.title)
    let element = document.createElement('post');
    element.id = 'post' + post.id;
    element.innerHTML = '<div class="post-title">' + post.title + '</div>';
    element.innerHTML += '<div class="post-text">' + post.text.substring(0 , 100) + '</div>';
    element.innerHTML += '<div class="post-author">' + post.author + '</div>';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';

    $('#content').append(element)
} 
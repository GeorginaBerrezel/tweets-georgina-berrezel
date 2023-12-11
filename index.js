const tweets = [
    {
        id: 1,
        content: 'Lorem ipsum',
        author: 'Ada',
        likes: 10
    },
    {
        id: 2,
        content: 'Dolor sit amet',
        author: 'Steve',
        likes: 8
    },
    {
        id: 3,
        content: 'Consectetur adipiscing elit',
        author: 'Grace',
        likes: 12
    },
    {
        id: 4,
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        author: 'Alan',
        likes: 2
    },
    {
        id: 5,
        content: 'Ut enim ad minim veniam',
        author: 'Ada',
        likes: 20
    }
]

const tweetsList = document.getElementById('tweets-list');

tweets.forEach((tweet) => {
    const createTweetElement = document.createElement('li');
    createTweetElement.classList.add('tweet');

    if (tweet.likes > 10) {
        createTweetElement.classList.add('favorite');
    }

    // If the number of likes in the tweet is greater than 10,
    // use the 'fa-solid fa-bolt' BOOST icon class, otherwise I use 'fa-solid fa-heart':)
    const likeIconClass = tweet.likes > 10 ? 'fa-solid fa-bolt' : 'fa-solid fa-heart';

    createTweetElement.innerHTML = `
  <p class="content">${tweet.content}</p>
  <p class="likes"><i class="${likeIconClass}"></i>${tweet.likes} likes</p>
  <p class="author">${tweet.author}</p>
`;

    tweetsList.appendChild(createTweetElement);
})
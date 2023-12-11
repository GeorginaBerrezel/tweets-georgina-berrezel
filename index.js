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

const firstTweet = tweets[0];
const tweetsList = document.getElementById('tweets-list');

const createTweetElement = document.createElement('li');
createTweetElement.classList.add('tweet');

createTweetElement.innerHTML = `
  <p class="content">${firstTweet.content}</p>
  <p class="likes">${firstTweet.likes} likes</p>
  <p class="author">${firstTweet.author}</p>
`;

tweetsList.appendChild(createTweetElement);
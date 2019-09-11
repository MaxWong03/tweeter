/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];
  
  
  const renderTweets = (tweets) => {
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').append($tweet);
    }
  };
  
  
  const createTweetElement = (tweetObj) => {
    const {name, avatars, handle} = tweetObj.user;
    const {text} = tweetObj.content;
    const timeStamp = tweetObj.created_at;
    return `<article class="tweet">
    <header>
      <img class="avatar light" src=${avatars}>
      <div class="userInfo">
        <span class="light">${name}</span>
        <small class="user-handle hide">${handle}</small>
      </div>
    </header>
    <div class="tweet-text">
      <p class="light">${text}</p>
    </div>
    <footer>
      <small class=light>${Math.round((Date.now() - new Date(timeStamp)) / (1000 * 60 * 60 * 24))} Days Ago</small>
      <span class="reaction light">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
  
      </span>
    </footer>
  </article>`;
  };

  const loadTweets = (tweet) => {
    
  };

  renderTweets(data);
});
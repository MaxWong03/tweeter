/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

/**
 * <article class="tweet">
       <header>
         <img class="avatar" src="/images/profile-hex.png">
         <div class="userInfo">
           <span>name</span>
           <small class="user-handle hide">@maxtweet</small>
         </div>
       </header>
       <div class="tweet-text">
         <p>OMG I made this tweet</p>
       </div>
       <footer>
         <small class=>10 days ago</small>
         <span class="reaction">
           <i class="fas fa-flag"></i>
           <i class="fas fa-retweet"></i>
           <i class="fas fa-heart"></i>

         </span>
       </footer>
     </article>
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

/**
 * 
 * @param {Object} tweetObj 
 * @return tweet <article> element  containing the entire HTML structure of the tweet
 */
const createTweetElement = (tweetObj) => {
  const {name, avatars, handle} = tweetObj.user;
  const {text} = tweetObj.content;
  const timeStamp = tweetObj.created_at;
  return `<article class="tweet">
  <header>
    <img class="avatar" src="${avatars}">
    <div class="userInfo">
      <span>${name}</span>
      <small class="user-handle hide">${handle}</small>
    </div>
  </header>
  <div class="tweet-text">
    <p>${text}</p>
  </div>
  <footer>
    <small class=>${timeStamp}</small>
    <span class="reaction">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>

    </span>
  </footer>
</article>`;
};


const $tweet = createTweetElement(tweetData);
$(document).ready(function() {
  $('#tweet-container').append($tweet);
  $('#tweet-container').append($tweet);

});
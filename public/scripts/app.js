/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(() => {
  const validateForm = (formText) => {
    if (!formText.length) {
      alert('Don\'t try to submit a empty tweet 🙄');
      return false;
    }
    if (formText.length > 140) {
      alert('Your tweet is wayyyyyy too long 😓');
      return false;
    }
    return true;
  };

  const renderTweets = (tweets) => {
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').append($tweet);
    }
  };

  const createTweetElement = (tweetObj) => {
    const { name, avatars, handle } = tweetObj.user;
    const { text } = tweetObj.content;
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


  /**
   * Problem
   * 1) newest tweet have to show up first
   * 2) need to refetch tweets on submission (without reloading the page)
   */
  const loadTweets = () => {
    $.ajax('/tweets', { method: "GET" })
      .then(renderTweets);
  };

  loadTweets();

  const form = $('form');
  form.on('submit', (event) => {
    event.preventDefault();
    const typedText = form.children('textarea').val();
    if (validateForm(typedText)) {
      $.ajax('/tweets', {
        method: "POST",
        data: form.serialize()
      }).then(tweet => {
        const $newTweet = createTweetElement(tweet);
        $('#tweet-container').prepend($newTweet);
      });
    }
  });
  
});
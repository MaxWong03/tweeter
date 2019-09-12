/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(() => {
  const validateForm = (formText) => {
    const errorMessage = $('.error');
    if (!formText.length) {
      errorMessage.slideDown(500);
      errorMessage.text('Don\'t try to submit a empty tweet 🙄');
      return false;
    }
    if (formText.length > 140) {
      errorMessage.slideDown(500);
      errorMessage.text('Your tweet is wayyyyyy too long 😓');
      return false;
    }
    errorMessage.slideUp(500);
    return true;
  };

  const renderTweets = (tweets) => {
    const tweetArr = [];
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      tweetArr.push($tweet);
    }
    $('#tweet-container').empty().append(tweetArr);
  };

  const createTweetElement = (tweetObj) => {
    const { name, avatars, handle } = tweetObj.user;
    const { text } = tweetObj.content;
    const timeStamp = tweetObj.created_at;
    const header =
      `<header>
      <img class="avatar light" src=${avatars}>
      <div class="userInfo">
        <span class="light">${name}</span>
        <small class="user-handle hide">${handle}</small>
      </div>
    </header>`;
    const footer =
      `<footer>
    <small class=light>${Math.round((Date.now() - new Date(timeStamp)) / (1000 * 60 * 60 * 24))} Days Ago</small>
    <span class="reaction light">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>

    </span>
    </footer>`;
    const tweetContainer = $('<div>').addClass('tweet-text');
    const tweetText = $('<p>').addClass('light').text(text);
    return $('<article>').addClass('tweet').append(header, tweetContainer.append(tweetText), footer);
  };

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
      }).then(() => {
        loadTweets();
      });
    }
  });

});
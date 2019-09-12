/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(() => {
  const toggleErrorMessage = (jqErrorMess, error) => { //test this
    if (error === 'empty') {
      jqErrorMess.slideDown(500).text('Don\'t try to submit a empty tweet 🙄');
      return false;
    }
    if (error === 'length') {
      jqErrorMess.slideDown(500).text('Your tweet is wayyyyyy too long 😓');
      return false;
    }
    jqErrorMess.slideUp(500);
    return true;
  };

  const validateForm = (formText) => {
    const errorMessage = $('.error');
    if (!formText.length) return toggleErrorMessage(errorMessage, 'empty');
    if (formText.length > 140) return toggleErrorMessage(errorMessage, 'length');
    return toggleErrorMessage(errorMessage, null);
  };

  const renderTweets = (tweets) => {
    const tweetArr = [];
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      tweetArr.push($tweet);
    }
    $('#tweet-container').empty().append(tweetArr);
  };

  const makeHTML = (tweetObj, option) => {
    const { name, avatars, handle } = tweetObj.user;
    const timeStamp = tweetObj.created_at;
    const gender = tweetObj.gender;
    if (option === 'header') {
      return `<header class="${gender}">
      <img class="avatar light" src=${avatars}>
      <div class="userInfo">
        <span class="light">${name}</span>
        <small class="user-handle hide">${handle}</small>
      </div>
    </header>`;
    }
    return  `<footer >
    <small class="light ${gender}">${Math.round((Date.now() - new Date(timeStamp)) / (1000 * 60 * 60 * 24))} Days Ago</small>
    <span class="reaction light ${gender}">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>

    </span>
    </footer>`;
  };


  const createTweetElement = (tweetObj) => {
    const { text } = tweetObj.content;
    const gender = tweetObj.gender;
    const article = $(`<article class="${gender}">`);
    const header = makeHTML(tweetObj, 'header');
    const footer = makeHTML(tweetObj, 'footer');
    const tweetContainer = $('<div>').addClass('tweet-text');
    const tweetText = $('<p>').addClass('light').text(text);
    return article.addClass('tweet').append(header, tweetContainer.append(tweetText.addClass(gender)), footer);
  };

  const loadTweets = () => {
    $.ajax('/tweets', { method: "GET" })
      .then(renderTweets);
  };

  loadTweets();

  const form = $('form');
  form.on('submit', (event) => {
    event.preventDefault();
    const textArea = form.children('textarea'); //test this
    const typedText = textArea.val(); //here
    if (validateForm(typedText)) {
      $.ajax('/tweets', {
        method: "POST",
        data: form.serialize()
      }).then(() => {
        textArea.val(''); //here
        loadTweets();
      });
    }
  });

});
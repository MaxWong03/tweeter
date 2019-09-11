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
  const textarea = $('.new-tweet textarea');
  textarea.on('keyup', () => {
    const textLength = textarea.val().length;
    const count = textarea.parent().children('.counter');
    count.text(140 - textLength);
    140 - textLength < 0 ? count.css('color', 'red') : count.css('color', '');
  });

  const form = $('form');
  form.on('submit', (event) => {
    event.preventDefault();
    const typedText = form.children('textarea').val();
    console.log(typedText.length);
    //validate form here needs to take in an argument
    if (validateForm) {
      $.ajax('/tweets', {
        method: "POST",
        data: form.serialize()
      }).then(response => console.log('response is', response));
    }
  });
});

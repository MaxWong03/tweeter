$(document).ready(function () {
  $('.new-tweet textarea').on('keyup', function (event) {
    const { textLength } = $(this).context;
    const count = $(this).parent().children('.counter');
    count.text(140 - textLength);
    140 - textLength < 0 ? count.css('color', 'red') : count.css('color', '');
  });

  $('form').on('submit', function (event) {
    event.preventDefault();
    $.ajax('/tweets', {
      method: "POST",
      data: $(this).serialize()
    }).then(response => console.log('response is', response));
  });
});

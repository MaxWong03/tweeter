$(() => {
  const browser = $(document);
  const scrollUp = $('i.fa-angle-double-up');
  const form = $('.new-tweet');
  const makeTweetText = $('#make-tweet');
  const downArrow = $('.fa-angle-double-down');
  browser.scroll(() => {
    if (browser.scrollTop() >= 400) {
      scrollUp.fadeIn(500);
      makeTweetText.fadeOut(500);
      downArrow.fadeOut(500);
    }
    else {
      scrollUp.fadeOut(500);
      makeTweetText.fadeIn(500);
      downArrow.fadeIn(500);
    }
  });
  scrollUp.on('click', () => {
    form.slideDown();
  });
});
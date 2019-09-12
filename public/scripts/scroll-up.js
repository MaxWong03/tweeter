$(() => {
  const browser = $(document);
  const scrollUp = $('i.fa-angle-double-up');
  const form = $('.new-tweet');
  browser.scroll(() => {
    if (browser.scrollTop() >= 400) scrollUp.css('display', 'block');
    else scrollUp.css('display', '');
  });
  scrollUp.on('click', () => {
    form.slideDown();
    browser.scrollTop(400);
  });
});
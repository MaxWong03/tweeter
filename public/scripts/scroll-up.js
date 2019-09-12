$(() => {
  const browser = $(document);
  const scrollUp = $('i.fa-angle-double-up');
  browser.scroll(() => {
    console.log(browser.scrollTop());
    if (browser.scrollTop() >= 400) scrollUp.css('display', 'block');
    else scrollUp.css('display', '');
  });
});
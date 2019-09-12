$(() => {
  const formArrow = $('.fa-angle-double-down');
  formArrow.on('click', () => {
    const form = $('.new-tweet');
    if (form.css('display') === 'none') {
      form.slideDown(800);
      $('textarea').focus();
    } else form.slideUp(800);
  });
});
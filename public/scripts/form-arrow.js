$(() => {
  const formArrow = $('.fa-angle-double-down');
  const arrowUp = () => {
    formArrow.animate({
      'margin-top': ''
    }, 1500, arrowDown);
  };
  const arrowDown = () => {
    formArrow.animate({
      'margin-top': '18px'
    },1500, arrowUp);
  };

  arrowDown();

});
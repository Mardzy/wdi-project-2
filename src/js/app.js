$(()=>{
  const $mainHeader = $('.main-header');
  const $navbar = $('nav');
  const $arrow = $('.arrow');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 85) { //use `this`, not `document`
      $arrow.css({
        'display': 'none'
      });
    } else {
      $arrow.css({
        'display': 'flex'
      });
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 280) { //use `this`, not `document`
      $mainHeader.css({
        'display': 'none'
      });
    } else {
      $mainHeader.css({
        'display': 'flex'
      });
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() >665) { //use `this`, not `document`
      $navbar.css({
        'display': 'none'
      });
    } else {
      $navbar.css({
        'display': 'flex'
      });
    }
  });
});

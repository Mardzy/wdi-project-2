$(()=>{
  const $mainHeader = $('.main-header');


  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) { //use `this`, not `document`
      $mainHeader.css({
        'display': 'none'
      });
    } else {
      $mainHeader.css({
        'display': 'flex'
      });
    }
  });
});

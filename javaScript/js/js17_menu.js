
   	$(document).ready(function() {
  // 메뉴 호버 시 하위 메뉴 보이기
  $('#gnb li.m').hover(function() {
    $('ul', this).stop().slideDown();
  }, function() {
    $('ul', this).stop().slideUp();
  });

  // 메뉴 클릭 시 해당 항목으로 스크롤 이동
  $('#gnb li.m').click(function() {
    const target = $(this).children('a').attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
    return false;
  });
});

	
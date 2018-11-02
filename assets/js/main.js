$(function () {
    var sidebar = $('#sidebar');
    var main = $('#main');
    var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));
    $(window).scroll(function (event) {
      var y = $(this).scrollTop();
      var mainbottom= parseFloat(main.prop("scrollHeight"));
      if (y >= top && y <= mainbottom) {
        sidebar.addClass('adventure-fixed');
      } else {
        sidebar.removeClass('adventure-fixed');
      }
    });
});
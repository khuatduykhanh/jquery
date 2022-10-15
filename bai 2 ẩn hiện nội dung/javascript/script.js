$(document).ready(function() {
   $('#btn-dangky').click(function(event) {
      // $('#form-login').animate({marginLeft: -300,opacity: 0});opacity là hiện ra màn hình 0 là ẩn 1 là hiện
      // $('#form-dangky').animate({marginLeft: 0,opacity: 1});
      $('#form-login').addClass('hidden'); //addclass thêm một cái class hidden vào form-login
      $('#form-dangky').removeClass('hidden');//remove xoá bỏ một cái class hidden trong form-dangky
   });
});
$(document).ready(function() {
	// console.log(1);
	// gồm 3 thành phần
	// selector bắt lấy id class element
	// event
	// animate
	$('button').click(function(event) {
		$('h1').animate({marginLeft: 500}, 1000)
		;
		
	});
});
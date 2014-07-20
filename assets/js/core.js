function imgChange(objimg, img) {
	if (img != "") objimg.src = img;
}
$(function() {
	setInterval(function() {
		$('#roll ul li:last').hide().insertBefore($("#roll ul li:first")).slideDown(1000);
	}, 6000);
});

$(function() {
	$(".play").click(function() {
		var _scrollHeight = $(document).scrollTop(), //获取当前窗口距离页面顶部高度 
			_windowHeight = $(window).height(), //获取当前窗口高度 
			_windowWidth = $(window).width(), //获取当前窗口宽度 
			_popupHeight = $("#vbox").height(), //获取弹出层高度 
			_popupWeight = $("#vbox").width(); //获取弹出层宽度 
		_posiTop = (_windowHeight - _popupHeight) / 2 + _scrollHeight;
		_posiLeft = (_windowWidth - _popupWeight) / 2;
		$("#vbox").css({
			"left": _posiLeft + "px",
			"top": _posiTop + "px",
			"display": "block"
		});
	});
	$(".close").click(function() {
		$(".m-video").hide();
	});
});

function imgChange(objimg, img) {
	if (img != "") objimg.src = img;
}
    $(function (){        
        setInterval(function () {
            $('#roll ul li:last').hide().insertBefore($("#roll ul li:first")).slideDown(1000);
          }, 6000);
    });


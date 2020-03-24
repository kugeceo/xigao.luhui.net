if($('#content')){
	$('#content').on('propertychange', CountChineseCharacters);
	$('#content').on('input', CountChineseCharacters);
}
    function CountChineseCharacters() {
        Words = $('#content').val();
        var W = new Object();
        var Result = new Array();
        var iNumwords = 0;
        var sNumwords = 0;
        var sTotal = 0;
        var iTotal = 0;
        var eTotal = 0;
        var otherTotal = 0;
        var bTotal = 0;
        var inum = 0;
        for (i = 0; i < Words.length; i++) {
            var c = Words.charAt(i);
            if (c.match(/[\u4e00-\u9fa5]/)) {
                if (isNaN(W[c])) {
                    iNumwords++;
                    W[c] = 1;
                }
                iTotal++;
            }
        }
        for (i = 0; i < Words.length; i++) {
            var c = Words.charAt(i);
            if (c.match(/[^\x00-\xff]/)) {
                if (isNaN(W[c])) {
                    sNumwords++;
                }
                sTotal++;
            } else {
                eTotal++;
            }
            if (c.match(/[0-9]/)) {
                inum++;
            }
        }

		$('#shengyu').text('1000' - (inum + iTotal+(eTotal - inum)));
		$('#zishu').text(inum + iTotal+ (eTotal - inum));
    }


function answers() {
	$("#reply").html("正在伪原创中，这篇文章大概需要3-4秒，请稍等...");
	$("#button").attr("disabled",true);
	setTimeout('$("#button").attr("disabled",false);',5000); 
	$("#button").val("正在伪原创中，请稍候...");
	setTimeout('$("#button").val("进行AI伪原创");',5000); 

	var content = $("#content").val();
	var url="api.php?key="+ $('#tagsinputval').val();
	$.post(url,{info:content},function(result){
		$("#reply").html(result);
	});
}

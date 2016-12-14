function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}
$(function() {
	$("form").on("submit", function(e){
		
			urlX = 'https://api.vimeo.com/videos?query='+$('#search').val()+'&access_token=d96d80040e170a44dceb9d59487d41eb&client_id=a0188ccd0a4cfab96284f23643e36b6bc46e5ce1&per_page=5';			
			$.getJSON(urlX, function (response) { 
			console.log(response);
				var results = response.data;
				$('#results').html("");
				$.each(results, function(index, item) {
				$.get("itemframe.html", function(data){
					var iframeId = (item.uri).split("/videos/")[1].toString();
					$('#results').append(tplawesome(data, [{"title":item.name, "videoid":iframeId, "iframeid":iframeId}]));					
				})
				});
			});			
	});
});

<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</head>

<script type="text/javascript">

	$(function() {	
		
		$.ajax({
			url : 'ajaxcontent.php'
			,method : 'get'
			,success : function(data) {
				console.log(data);
			}
		});
		
		$.ajax({
			url : 'http://writing.voyage/ajaxcontent.php'
			,method : 'get'
			,success : function(data) {
				console.log(data);
			}
		});		
		
		$.ajax({
			url : 'https://www.yahoo.com/'
			,method : 'get'
			,success : function(data) {
				console.log(data);
			}
		});		
		
	});
	
</script>
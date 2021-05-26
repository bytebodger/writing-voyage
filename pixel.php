<?php
	
	if (
		$_SERVER['REMOTE_ADDR'] === '99.184.72.194'  // AT&T fiber @ home
	) {
		exit;
	}
	$db = mysqli_connect('127.0.0.1', 'adam_worldanvil', 'ZVFt5eBJt5ewLcp', 'adam_worldanvil');
	$server = mysqli_real_escape_string($db, json_encode($_SERVER));
	if ($_SERVER['HTTP_REFERER']) {
		$query = "
			INSERT INTO
				hit
			SET
				page = '{$_SERVER['HTTP_REFERER']}'
				,ip = '{$_SERVER['REMOTE_ADDR']}'
				,server = '$server'
		";
		$result = $db->query($query);
	}
	
?>
<?php
	
	$year = rand(1, 3910);
	if ($year < 480) {
		echo "$year Age of Cervia";
	} else if ($year < 2115) {
		echo "$year Age of Expansion";
	} else if ($year < 3011) {
		echo "$year Age of Rivals";
	} else {
		echo "$year Age of Gnosis";
	}

?>
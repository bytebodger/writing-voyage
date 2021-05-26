<?php
	session_start();
	if (isset($_POST) and $_POST) {
		$_POST['session'] = json_decode($_POST['session'], true);
		//var_dump($_POST['session']);exit;
		foreach ($_POST['session'] as $league => $leagueValues) {
			if ($leagueValues['showLeague'] == 'true') {
				$_POST['session'][$league]['showLeague'] = true;
			} else if ($leagueValues['showLeague'] == 'false') {
				$_POST['session'][$league]['showLeague'] = false;
			}
			if ($leagueValues['showSpreads'] == 'true') {
				$_POST['session'][$league]['showSpreads'] = true;
			} else if ($leagueValues['showSpreads'] == 'false') {
				$_POST['session'][$league]['showSpreads'] = false;
			}
			if ($leagueValues['showOverUnders'] == 'true') {
				$_POST['session'][$league]['showOverUnders'] = true;
			} else if ($leagueValues['showOverUnders'] == 'false') {
				$_POST['session'][$league]['showOverUnders'] = false;
			}
			if (isset($leagueValues['games'])) {
				foreach ($leagueValues['games'] as $gameIndex => $game) {
					if ($game['showGame'] == 'true') {
						$_POST['session'][$league]['games'][$gameIndex]['showGame'] = true;
					} else if ($game['showGame'] == 'false') {
						$_POST['session'][$league]['games'][$gameIndex]['showGame'] = false;
					}
				}
			}
		}
		$sessions = file_get_contents('json/sessions.json');
		$sessions = json_decode($sessions, true);
		$thisSessionId = '';
		foreach ($sessions as $sessionId => $sessionData) {
			if ($sessionData['sessionName'] == $_POST['sessionName']) {
				$thisSessionId = $sessionId;
			}
		}
		$json = json_encode($_POST['session'], JSON_NUMERIC_CHECK);
		$fileHandle = fopen('json/' . $thisSessionId . '.json' ,'w');
		fwrite($fileHandle ,$json);
		fclose($fileHandle);
	}
?>
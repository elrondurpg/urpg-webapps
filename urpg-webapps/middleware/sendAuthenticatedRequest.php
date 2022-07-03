<?php
    header('Access-Control-Allow-Origin: ' . $_SERVER['FRONTEND_ORIGIN']); 
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization');

    include_once 'startSecureSession.php';
    include_once 'sendRequest.php';

    $input = json_decode(file_get_contents('php://input'), true);

    sec_session_start();
	
	$id = null;
	$accessToken = null;
	
	 // error_log("Printed from sendAuthenticatedRequest.php");
	 // error_log(print_r($_SESSION, true));
	 // error_log(print_r($input, true));
	
	if (isset($_SESSION)) {
		error_log("Found session");
		if (array_key_exists('accessToken', $_SESSION)) {
			error_log("Found access token");
			$accessToken = $_SESSION['accessToken'];
		}

		if (array_key_exists('id', $_SESSION)) {
			$id = $_SESSION['id'];
		}
	}

    $response = sendRequest($input['method'], $input['url'], $id, $accessToken, $input['payload']);

    echo $response;
?>
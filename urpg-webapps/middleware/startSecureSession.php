<?php
    include_once 'sendRequest.php';
    define("PROTOCOL", $_SERVER['WEB_PROTOCOL']);
    define("HOST", $_SERVER['WEB_HOST']);
    define("PORT", $_SERVER['FRONTEND_PORT']);
    define("SERVICE_HOST", PROTOCOL . HOST . ":" . $_SERVER['WEB_PORT']);
    define("SESSION_NAME", "urpg-session" . $_SERVER['SESSION_TAG']);

    function setSessionParams($session) {
        if (isset($session)) {
            if (array_key_exists('accessToken', $session)) {
                $_SESSION['accessToken'] = $session['accessToken'];
            }

            if (array_key_exists('id', $session)) {
                $_SESSION['id'] = $session['id'];
            }

            if (array_key_exists('username', $session)) {
                $_SESSION['username'] = $session['username'];
            }
        }
    }

    function sec_session_start($shouldRefreshAPISession = false) {
        session_name(SESSION_NAME);

        exit_if_cookies_disabled();
        set_cookie_params();

        session_start();

        session_regenerate_id();

        if (isset($shouldRefreshAPISession) && $shouldRefreshAPISession == true) {
            refreshAPISession();
        }
    }

    function refreshAPISession() {
        $method = "POST";
        $url = SERVICE_HOST . "/session/refresh";
	
		$id = null;
		$accessToken = null;
		if (isset($_SESSION)) {
			if (array_key_exists('accessToken', $_SESSION)) {
				$accessToken = $_SESSION['accessToken'];
			}

			if (array_key_exists('id', $_SESSION)) {
				$id = $_SESSION['id'];
			}
		}

        $response = sendRequest($method, $url, $id, $accessToken, null);
        $response = json_decode($response, true);

        if (isset($response) && (!isset($response['status']) || $response['status'] == 200)) {
            setSessionParams($response);
        }
        else {
            if (isset($_SESSION)) {
                unset($_SESSION['username']);
                unset($_SESSION['id']);
                unset($_SESSION['accessToken']);
            }
        }
    }

    function exit_if_cookies_disabled() {
        if (ini_set('session.use_only_cookies', 1) === FALSE) {
            header("Location: /php/error.php?err=Could not initiate a safe session (ini_set)");
            exit();
        }
    }

    function set_cookie_params() {
        $cookieParams = session_get_cookie_params();
        $lifetime = $cookieParams["lifetime"];
        $path = $cookieParams["path"];
        $secure = $_SERVER['WEB_SECURE'];
        $httponly = false;
        session_set_cookie_params($lifetime, $path, HOST, $secure, $httponly);
    }
?>
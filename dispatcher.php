<?php

$static_pattern = '/\.(html|css|js|gif|png|jpg|css|ico|txt|htm|js|ttf|woff|etc|svg|ico)$/';

if ($_SERVER["REQUEST_URI"] == "/") {
	header("HTTP/1.1 301 Moved Permanently");
	header("Location: /index.html"); 
} else {
	header("HTTP/1.1 301 Moved Permanently");
	header("Location: "  . $_SERVER["REQUEST_URI"] . "/index.html"); 	
}
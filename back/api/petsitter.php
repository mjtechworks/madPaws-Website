<?php 

require_once "../config.php";
require_once "../lib/database.php";
require_once "./apiResponse.php";


$users = Database::getInstance()->getAll('user');

ApiResponse::render($users);





<?php 

require_once "../config.php";
require_once "./database.php";

$user = Database::getInstance()->getAll('user');

echo json_encode($user);
?>




<?php 

require_once "../config.php";
require_once "../lib/database.php";
require_once "./apiResponse.php";

$petsitters = Database::getInstance()->getAll('user', [
  'role' => 'petsitter'
  ]);

echo "<pre>"; 
var_dump($petsitters);
echo "</pre>";

ApiResponse::render($petsitters);

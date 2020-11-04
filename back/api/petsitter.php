<?php 

require_once "./apiResponse.php";
require_once "../lib/petsitterRepository.php";

if (isset($_GET['type'])) {
  $type = ($_GET['type']);
}
if (isset($_GET['service'])) {
  $services = ($_GET['service']);
}

// $petsitters = Database::getInstance()->getAll('user', [
//   'role' => 'petsitter'
//   ]);
// ApiResponse::render($petsitters);

$searchPetsitters = PetsitterRepository::search($type);
ApiResponse::render($searchPetsitters);

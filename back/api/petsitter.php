<?php 

require_once "./apiResponse.php";
require_once "../lib/petsitterRepository.php";

$petsitterRepository = new PetsitterRepository();

// $petsitters = Database::getInstance()->getAll('user', [
//   'role' => 'petsitter'
//   ]);
// ApiResponse::render($petsitters);

$petsitterForDogs = $petsitterRepository->search('chat');
echo "<pre>"; 
var_dump($petsitterForDogs);
echo "</pre>";

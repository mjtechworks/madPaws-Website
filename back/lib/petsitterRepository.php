<?php
require_once "../config.php";
require_once 'database.php';

class PetsitterRepository
{

  public function search($type)
  {
    $sql = 
    ' SELECT *
      FROM user
      INNER JOIN petsitter_pet 
      ON user.id = petsitter_pet.user_id
      AND petsitter_pet.type = :petsitter_pet
      AND user.role = "petsitter"
    ';

    $stmt = Database::getInstance()->getConnection()->prepare($sql);
    $stmt->bindParam(':petsitter_pet', $type, PDO::PARAM_STR);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}

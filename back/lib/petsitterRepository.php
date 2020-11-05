<?php
require_once "../config.php";
require_once 'database.php';

class PetsitterRepository
{

  public function search($type, $service)
  {
    $sql = 
    ' SELECT *
      FROM user
      INNER JOIN petsitter_pet 
      ON user.id = petsitter_pet.user_id';

    if ($type != null) {
      $sql .= ' AND petsitter_pet.type = :petsitter_pet';
    }
      
    $sql .= ' AND user.role = "petsitter"
	    INNER JOIN petsitter_service
      ON user.id = petsitter_service.user_id
      INNER JOIN service
      ON petsitter_service.service_id = service.id';

    if ($service != null) {
      $sql .='  AND service.label = :petsitter_service'; 
    }

    $stmt = Database::getInstance()->getConnection()->prepare($sql);

    if ($type != null) {
      $stmt->bindParam(':petsitter_pet', $type, PDO::PARAM_STR);
    }

    if ($service != null) {
      $stmt->bindParam(':petsitter_service', $service, PDO::PARAM_STR);
    }

    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}

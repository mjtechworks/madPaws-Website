<?php
require_once "../config.php";
require_once 'database.php';


class PetsitterRepository
{
  public $database;

  public function __construct()
  {
    $database = new Database();
    $this->database = $database::getInstance()->getConnection();
  }

  public function search($type)
  {
    $sql = 
    ' SELECT *
      FROM user
      INNER JOIN petsitter_pet 
      ON user.id = petsitter_pet.user_id
      AND petsitter_pet.type ="'.$type.'"
      AND user.role = "petsitter"
    ';

    $stmt = $this->database->prepare($sql);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}

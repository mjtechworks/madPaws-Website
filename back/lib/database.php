<?php 

class Database
{
  private static $instance;

  private $conn;

  private function __construct()
  {
    $this->connect();
  }

  /**
   * Pour etre sur d'en avoir qu'une
   */
  public static function getInstance()
  {
    if (self::$instance) {
      return self::$instance;
    }

    return self::$instance = new self();
  }

  private function connect()
  {
    try {
      $this->conn = new PDO(DATABASE_DSN, DATABASE_USER, DATABASE_PASS);
    } catch (PDOException $e) {
      echo 'Connexion échouée : ' . $e->getMessage();
    }
  
    return $dbh;
  }

  /**
   * Liste tous les elements de la table 
   */
  public function getAll(string $tableName, array $whereConditions = []) : array
  {
    $sql = 'SELECT * FROM '.$tableName;

    if (count($whereConditions) > 0) {
      $sql .= ' WHERE ';

      $sqlConditions = [];

      foreach ($whereConditions as $column => $value) {
        $sqlConditions[] = $column.' = :'.$column;
      }

      $sql .= implode(' AND ', $sqlConditions);
    }

    $stmt = $this->conn->prepare($sql);

    foreach ($whereConditions as $column => $value) {
      $stmt->bindValue(':'.$column, $value);
    }

    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}


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
   * Liste tous les elements d'une table
   */
  public function getAll(string $tableName) : array
  {
    $sql = 'SELECT * FROM '.$tableName;
    $stmt = $this->conn->prepare($sql);
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  } 
}


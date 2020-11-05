<?php

class ApiResponse
{
  private $intance;
  
  public function render($data) 
  {
    header('Access-Control-Allow-Origin: *');

    echo json_encode($data);
  }
}
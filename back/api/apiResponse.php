<?php

class ApiResponse
{
  public function render($data) 
  {
    header('Access-Control-Allow-Origin: *');

    echo json_encode($data);
  }
}
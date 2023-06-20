<?php

namespace App\Repository;

use App\Interfaces\OrderRepositoryInterface;
use App\Models\Order;

class OrderRespository extends RepositoryBase implements OrderRepositoryInterface {

    protected $model;
   
    public function __construct()
    {
        $this->model = new Order();
    }
}
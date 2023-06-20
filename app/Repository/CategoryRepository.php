<?php

namespace App\Repository;

use App\Interfaces\CategoryRepositoryInterface;
use App\Models\Category;

class CategoryRepository extends RepositoryBase implements CategoryRepositoryInterface {

    protected $model;
   
    public function __construct()
    {
        $this->model = new Category();
    }
}
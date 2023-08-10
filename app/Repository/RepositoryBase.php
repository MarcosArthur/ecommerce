<?php

namespace App\Repository;
use App\Interfaces\BaseRepositoryInterface;

class RepositoryBase implements BaseRepositoryInterface {

    protected $model;

    public function with($relationships)
    {
        return $this->model->with($relationships);
    }

    public function get()
    {
        return $this->model->get();
    }

    public function create($data)
    {
        return $this->model->create($data);
    }

    public function isEmpty()
    {
        return $this->model->isEmpty();
    }

}
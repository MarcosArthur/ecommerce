<?php

namespace App\Interfaces;

interface BaseRepositoryInterface {
    public function with($relationships);
    public function get();
    public function create($data);
    public function isEmpty();
}
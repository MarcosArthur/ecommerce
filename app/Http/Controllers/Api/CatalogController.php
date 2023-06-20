<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Interfaces\CategoryRepositoryInterface;

class CatalogController extends Controller
{

    public function index(CategoryRepositoryInterface $category)
    {
        return $category->with('product')->get();
    }
}

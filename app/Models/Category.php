<?php

namespace App\Models;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['name'];
    
    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    public function product()
    {
        return $this->hasMany(Product::class);
    }

}

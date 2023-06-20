<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['name', 'price', 'description'];

    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

}

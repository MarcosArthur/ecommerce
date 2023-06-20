<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;
    
    protected $fillable = ['price', 'quantity', 'product_id'];

    protected $table = 'orders_items';


    public function product()
    {
        return $this->belongsTo(Product::class);
    }


}

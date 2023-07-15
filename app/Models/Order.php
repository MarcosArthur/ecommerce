<?php

namespace App\Models;

use App\Casts\DateTimeWithTimeZone;
use App\Traits\FIlterByUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Item;
use Illuminate\Support\Carbon;


class Order extends Model
{
    use HasFactory, FIlterByUser;

    protected $fillable = ['total'];

    protected $casts = [
        'created_at' => DateTimeWithTimeZone::class,
    ];

    
    public function items()
    {
        return $this->hasMany(Item::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

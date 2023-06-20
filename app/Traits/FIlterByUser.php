<?php

namespace App\Traits;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

trait FIlterByUser {

    protected static function boot()
    {
        parent::boot();

        self::creating(function($model) {
            $model->user_id = auth()->id();
        });

        self::addGlobalScope(function(Builder $build) {
            $build->where('user_id', auth()->id());
        });
    }
}
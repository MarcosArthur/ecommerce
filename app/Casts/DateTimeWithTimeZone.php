<?php

namespace App\Casts;

use Carbon\Carbon;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;

class DateTimeWithTimeZone implements CastsAttributes
{

    const TIME_ZONE = "America/Sao_Paulo";
    const FORMAT_DATE = "d/m/Y H:i:s";
    /**
     * Cast the given value.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function get(Model $model, string $key, mixed $value, array $attributes): mixed
    {
        return Carbon::make($value)->format(self::FORMAT_DATE);
    }

    /**
     * Prepare the given value for storage.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): mixed
    {
        return Carbon::make($value)->setTimezone(self::TIME_ZONE);
    }
}

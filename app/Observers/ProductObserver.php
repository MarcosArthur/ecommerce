<?php

namespace App\Observers;

use App\Events\ProductEvent as EventsProduct;
use App\Enums\Product as OperationProduct;
use App\Models\Product;

class ProductObserver
{
    /**
     * Handle the Product "created" event.
     */
    public function created(Product $product): void
    {
        EventsProduct::dispatch($product, OperationProduct::CREATED);
    }

    /**
     * Handle the Product "updated" event.
     */
    public function updated(Product $product): void
    {
        EventsProduct::dispatch($product, OperationProduct::UPDATED);
    }

    /**
     * Handle the Product "deleted" event.
     */
    public function deleted(Product $product): void
    {
        EventsProduct::dispatch($product, OperationProduct::DELETED);
    }

    /**
     * Handle the Product "restored" event.
     */
    public function restored(Product $product): void
    {
        //
    }

    /**
     * Handle the Product "force deleted" event.
     */
    public function forceDeleted(Product $product): void
    {
        //
    }
}

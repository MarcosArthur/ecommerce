<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\{CategoryRepositoryInterface, BaseRepositoryInterface, OrderRepositoryInterface};
use App\Repository\{CategoryRepository, RepositoryBase, OrderRespository};

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(BaseRepositoryInterface::class, RepositoryBase::class);
        $this->app->bind(CategoryRepositoryInterface::class, CategoryRepository::class);
        $this->app->bind(OrderRepositoryInterface::class, OrderRespository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}

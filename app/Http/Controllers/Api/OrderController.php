<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\OrderRequest;
use App\Interfaces\OrderRepositoryInterface;
class OrderController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     */
    public function index(OrderRepositoryInterface $order)
    {
        try { 
            $record = $order->with(['items.product', 'user'])->get();
         
            if ($record->isEmpty()){
                throw new \Exception('Nenhum pedido encontrado');
            } 
            
            return $record;
        
        } catch (\Exception $e) {
            
            return response()
            ->json([
                'errors' => [
                    'error' => $e->getMessage()
                ]
            ], 422);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(OrderRequest $request, OrderRepositoryInterface $order)
    {
        try {
            $request->validated();
            $order->create(['total' => $request->total])->items()->createMany($request->items);
            return response()->json([
                'success' => [
                    'message' => 'Pedido realizado com sucesso',
                ]
            ]);

        } catch (\Exception $e) {
            return response()
            ->json([
                'errors' => [
                    'error' => $exception->getMessage()
                ]
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        
    }
}

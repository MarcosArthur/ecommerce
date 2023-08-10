<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Enums\Product as OperationProduct;
use App\Models\Product;

class ProductEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public function __construct(private Product $product, private OperationProduct $operation) {}

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */

     public function broadcastAs(): string
     {
         return 'product.action_teste';
     }

    public function broadcastOn() : Channel
    {
        return new Channel('product');
    }


    public function broadcastWith() : array
    {
        return [
          'product' =>  $this->product,
          'operation' => $this->operation
        ];
    }

}


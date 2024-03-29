<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'total' => "required|numeric",
            'items' => "required",
            'items.*.price' => "required",
            'items.*.quantity' => "required",
            'items.*.product_id' => "required"
        ];
    }

    public function messages() : array
    {
        return [
            'total.required' => "Valor total do pedido não informado",
            'items.*.product_id.required' => "O produto não foi informado",
            'items.*.price.required' => "Valor dos itens não foi informado",
            'items.*.quantity.required' => "Quantidade dos itens não foi informada"
        ];
    }
}

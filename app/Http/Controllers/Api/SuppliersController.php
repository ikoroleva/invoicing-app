<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Supplier;
use App\Models\Address;
use Auth;

class SuppliersController extends Controller
{
    public function index()
    {

        $response = [];
        $suppliers = Supplier::with('bankAccounts', 'addresses')
            ->orderBy('id')
            ->get();
        foreach ($suppliers as $supplier) {
            $response[] = [
                'name' => $supplier->name,
                'reg_number' =>  $supplier->reg_number,
                'reg_number_EU' =>  $supplier->reg_number_EU,
                'reg_type' =>  $supplier->reg_type_court . ', složka ' . $supplier->reg_type_file,
                'address_id' => $supplier->address_id,
                'bank_name' => $supplier->bankAccounts,
                'address' => $supplier->addresses,
                'email' =>  $supplier->email,
                'phone' => $supplier->phone,
                'alias' => $supplier->alias
            ];
        }
        return $response;
    }

    public function currentSupplier()
    {
        
        $currentSupplier = Supplier::with('addresses')->where('user_id',Auth::id())->first();  
        
        return $currentSupplier;
    }

    public function indexIco($ico)
    {

        $response = [];
        $supplier = Supplier::with('bankAccounts', 'addresses')
            ->orderBy('id')
            ->where('reg_number', $ico)
            ->first();
        // foreach ($suppliers as $supplier) {
            $response[] = [
                'name' => $supplier->name,
                'reg_number' =>  $supplier->reg_number,
                'reg_number_EU' =>  $supplier->reg_number_EU,
                'reg_type' =>  $supplier->reg_type_court . ', složka ' . $supplier->reg_type_file,
                'address_id' => $supplier->address_id,
                'bank_name' => $supplier->bankAccounts,
                'address' => $supplier->addresses,
                'email' =>  $supplier->email,
                'phone' => $supplier->phone,
                'alias' => $supplier->alias
            ];
        // }
        return $response;
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Supplier;

class SuppliersController extends Controller
{
    public function index()
    {
        $response = [
            [
                'all suppliers names' => 'with all suppliers data'
            ]
        ];

        // $response = [];
        // $suppliers = Supplier::orderedBy('id')
        //     ->get();
        // foreach ($suppliers as $supplier) {
        //     $response[] = [
        //         'name' => $supplier->first_name.' '. $supplier->last_name,  
        //         'reg_number' =>  $supplier->reg_number, 
        //         'reg_type' =>  $supplier->reg_type, 
        //         'adress_id' => $supplier->adress_id,
        //         'email' =>  $supplier->email,
        //         'phone' => $supplier->phone   
        //     ];
        // }
        return $response;
    }

    public function indexIco($ico)
    {
        $response = 'here goes supplier found by ico:' . $ico;

        // $response = [];
        // $suppliers = Supplier::orderedBy('id')
        //      ->where('reg_number', $ico)
        //      ->get();
        // foreach ($suppliers as $supplier) {
        //     $response[] = [
        //         'name' => $supplier->first_name.' '. $supplier->last_name,  
        //         'reg_number' =>  $supplier->reg_number, 
        //         'reg_type' =>  $supplier->reg_type, 
        //         'adress_id' => $supplier->adress_id,
        //         'email' =>  $supplier->email,
        //         'phone' => $supplier->phone   
        //     ];
        // }
        return $response;
    }
}

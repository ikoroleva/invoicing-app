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
        $suppliers = Supplier::with('bankAccounts', 'address')
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
                'address' => $supplier->address,
                'email' =>  $supplier->email,
                'phone' => $supplier->phone,
                'alias' => $supplier->alias
            ];
        }
        return $response;
    }

    public function currentSupplier()
    {
            $user_id = Auth::id();
            $currentSupplier = Supplier::with('bankAccounts','address')->where('user_id', $user_id)->first();  
            
        return $currentSupplier;
    }

    public function indexIco($ico)
    {

        $response = [];
        $supplier = Supplier::with('bankAccounts', 'address')
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
            'address' => $supplier->address,
            'email' =>  $supplier->email,
            'phone' => $supplier->phone,
            'alias' => $supplier->alias
        ];
        // }
        return $response;
    }

    public function updateCurrent(Request $request)
    {
        $userId = Auth::id();

        $updateResponse = $this->update($request, $userId);

        return $updateResponse;
    }

    public function update(Request $request, $id)
    {
        $supplier = Supplier::with('bankAccount', 'address')->where('user_id', $id)->first();

        $supplier->name = $request->input('name');
        $supplier->reg_number = $request->input('reg_number');
        $supplier->reg_number_EU = $request->input('reg_number_EU');
        $supplier->reg_type_court = $request->input('reg_type_court');
        $supplier->reg_type_file = $request->input('reg_type_file');
        
        $supplier->bankAccounts->bank_name = $request->input('bank_name');
        $supplier->bankAccounts->bank_account_prefix = $request->input('bank_account_prefix');
        $supplier->bankAccounts->bank_account_number = $request->input('bank_account_number');
        $supplier->bankAccounts->bank_account_code = $request->input('bank_account_code');
        $supplier->bankAccounts->swift = $request->input('swift');
        $supplier->bankAccounts->iban = $request->input('iban');
        $supplier->email = $request->input('email');
        $supplier->phone = $request->input('phone');
        $supplier->alias = $request->input('alias');

        $supplier->save();
        
        $address = Address::where('id', $supplier->address_id)->first();

        if (!$address) {
            
            $address = new Address;

        }
        
        $address->street_name = $request->input('street_name');
        $address->house_number = $request->input('house_number');
        $address->house_orient = $request->input('house_orient');
        $address->city = $request->input('city');
        $address->postal_code = $request->input('postal_code');
        $address->supplier_id = $supplier->id;

        $address->save();
        
        $supplier->address_id = $address->id;
            
        $supplier->save();
            
        $res = Supplier::with('bankAccounts', 'address')->where('user_id', $id)->first();
        
        // session()->flash('success_message', 'Supplier updated!');
        return $res;
    }
}

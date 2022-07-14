<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Address;
use Illuminate\Http\Request;
use App\Models\Client;

class ClientsController extends Controller
{
    public function index()
    {
        $response = [];
        $clients = Client::with('addresses')
            ->orderBy('id')
            ->get();
        foreach ($clients as $client) {
            $response[] = [
                'name' => $client->name,
                'reg_number' => $client->reg_number,
                'reg_type_court' => $client->reg_type_court,
                'reg_type_file' => $client->reg_type_file,
                'address' => $client->addresses,
                'email' => $client->email,
                'phone' => $client->phone
            ];
        }

        return $response;
    }

    public function indexIco($ico)
    {
        $response = [];
        $clients = Client::with('addresses')
            ->orderBy('id')
            ->where('reg_number', $ico)
            ->get();
        foreach ($clients as $client) {
            $response[] = [
                'name' => $client->name,
                'reg_number' => $client->reg_number,
                'reg_number_EU' => $client->reg_number_EU,
                'reg_type_court' => $client->reg_type_court,
                'reg_type_file' => $client->reg_type_file,
                'address' => $client->addresses,
                'email' => $client->email,
                'phone' => $client->phone
            ];
        }

        return $response;
    }

    public function store(Request $request, $reg_number)
    {

        //$user_id = Auth::id();

        $client = Client::where('reg_number', $reg_number)->first();

        $address = Address::where('client_id', $client->id)->first();



        $client->name = $request->input('name');
        $client->reg_number_EU = $request->input('reg_number_EU');
        $client->email = $request->input('email');
        $client->phone = $request->input('phone');

        $address->city = $request->input('address_city');
        $address->street_name = $request->input('address_street_name');
        $address->house_number = $request->input('address_house_number');
        $address->house_orient = $request->input('address_house_orient');
        $address->postal_code = $request->input('address_postal_code');


        $client->save();
        $address->save();

        return ['status' => 'success'];
    }
}

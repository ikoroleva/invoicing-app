<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;

class ClientsController extends Controller
{
    public function index()
    {
        $response = [
            [
                'here is all our clients' => 'with the important data'
            ]
        ];

        // $response = [];
        // $clients = Client::orderedBy('id')
        //     ->get();
        // foreach ($clients as $client) {
        //     $response[] = [
        //         'name' => $client->name,
        //         'reg_number' => $client->reg_number,
        //         'reg_type_court' => $client->reg_type_court,
        //         'reg_type_file' => $client->reg_type_file,
        //         'address_id' => $client->address_id,
        //         'email' => $client->email,
        //         'phone' => $client->phone
        //     ];
        // }

        return $response;
    }

    public function indexIco($ico)
    {
        $response = 'here goes client found by ico:' . $ico;

        // $client = Client::finOrFail() ????

        // $response = [];
        // $clients = Client::orderedBy('id')
        //     ->where('reg_number', $ico)
        //     ->get();
        // foreach ($clients as $client) {
        //     $response[] = [
        //         'name' => $client->name,
        //         'reg_number' => $client->reg_number,
        //         'reg_type_court' => $client->reg_type_court,
        //         'reg_type_file' => $client->reg_type_file,
        //         'address_id' => $client->address_id,
        //         'email' => $client->email,
        //         'phone' => $client->phone
        //     ];
        // }

        return $response;
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
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
}

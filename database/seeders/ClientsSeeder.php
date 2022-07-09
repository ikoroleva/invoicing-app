<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Client;
// Check Model name and method name in seeder!!!

class ClientsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $clients = [
            [
                'name' => 'Asseco Central Europe, a.s.',
                'reg_number' => 27074358,
                'reg_type_court' => 'Městský soud v Praze',
                'reg_type_file' => 'C 358938',
                'address_id' => 1,
                'email' => 'asseco@mail.cz',
                'phone' => 608123456
            ]
            // add further clients!!!!
        ];

        foreach ($clients as $client) {
            Client::create($client);
        }
    }
}

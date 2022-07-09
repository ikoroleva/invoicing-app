<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Supplier;
// Check Model name and method name in seeder!!!

class SuppliersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $suppliers = [
            [
            'first_name' => 'User name',
            'last_name' => 'User surname' [not null],
            'reg_number' => 12345678, //ičo
            'reg_type' => 'Městský soud v Plzni C 358938', // must be on invoice -> obchodní rejstřík, živnostenský rejstřík apod.
            'adress_id' => 1,
            'email' => 'user@mail.cz',
            'phone' => 608123456             
            ]

            ];

        foreach ($suppliers as $supplier) {
            Supplier::create($supplier);
        }
    }
}

 
 
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
                'first_name' => 'User1 name',
                'last_name' => 'User1 surname',
                'reg_number' => 12345678,
                'reg_type' => 'Městský soud v Plzni A 358938',
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

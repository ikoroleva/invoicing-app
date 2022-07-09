<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Address;
// Check Model name and method name in seeder!!!

class AddressesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $addresses = [
            [
                'street_name' => 'Budějovická',
                'house_number' => 778,
                'house_orient' => '3a',
                'city' => 'Praha',
                'postal_code' => 14000
            ]
            // add further addresses!!!
        ];
        foreach ($addresses as $address) {
            Address::create($address);
        }
    }
}

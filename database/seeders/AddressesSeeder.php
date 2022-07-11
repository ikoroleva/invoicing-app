<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Adress;
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

                'street_name' => 'Volutova',
                'house_number' => 2225,
                'house_orient' => '16',
                'city' => 'Praha',
                'postal_code' => 15000
            ],
            [

                'street_name' => 'Budějovická',
                'house_number' => 778,
                'house_orient' => '3a',
                'city' => 'Praha',
                'postal_code' => 14000
            ],
            [

                'street_name' => 'Italy street',
                'house_number' => 543,
                'house_orient' => '7b',
                'city' => 'Roma',
                'postal_code' => 209987
            ],
            [

                'street_name' => 'France street',
                'house_number' => 54,
                'house_orient' => '45',
                'city' => 'Paris',
                'postal_code' => 363636
            ],
            [

                'street_name' => 'Mexiko street',
                'house_number' => 345,
                'house_orient' => '65',
                'city' => 'Mexiko',
                'postal_code' => 4534656
            ],
            [

                'street_name' => 'Mexiko street',
                'house_number' => 345,
                'house_orient' => '65',
                'city' => 'Mexiko',
                'postal_code' => 4534656
            ],
            // add further addresses!!!
        ];
        foreach ($addresses as $address) {
            Adress::create($address);
        }
    }
}

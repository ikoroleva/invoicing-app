<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\InvoiceItem;
// Check Model name and method name in seeder!!!

class InvoiceItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $invoice_items = [
            [
                'invoice_id' => 1,
                'invoice_description' => 'Cleaning servises',
                'unit_cost' => 10500,
                'unit_quantity' => 1
            ]
        ];
        foreach ($invoice_items as $invoice_item) {
            InvoiceItem::create($invoice_item);
        }
    }
}

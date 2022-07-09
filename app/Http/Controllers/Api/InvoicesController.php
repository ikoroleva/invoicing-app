<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Invoice;

class InvoicesController extends Controller
{
    public function index()
    {
        $response = [
            [
                'here go ALL invoices' => 'with invoice data'
            ]
        ];

        // $response = [];
        // $invoices = Invoice::orderedBy('id')
        //     ->get();
        // foreach ($invoices as  $invoice) {
        //     $response[] = [
        //         'id' => $invoice->id,
        //         'supplier_id' => $invoice->supplier_id,
        //         'client_id' => $invoice->client_id,
        //         'number' => $invoice->number,
        //         'additional_notes' => $invoice->additional_notes,
        //         'status' => $invoice->status,
        //         'total_amount' => $invoice->total_amount,
        //         'currency' => $invoice->currency,
        //         'formOfPayment' => $invoice->formOfPayment,
        //         'issued_on' => $invoice->issued_on,
        //         'due_date' => $invoice->due_date
        //     ];
        // }


        return $response;
    }

    public function supplierIco($ico)
    {
        $response = 'here go invoices found by SUPPLIER ICO:' . $ico;

        // $response = [];
        // $invoices = Invoice::orderedBy('id')
        //      ->where('supplier_id', $ico)
        //      ->get();
        // foreach ($invoices as $invoice) {
        //      $response[] = [
        //         'id' => $invoice->id,
        //         'supplier_id' => $invoice->supplier_id,
        //         'client_id' => $invoice->client_id,
        //         'number' => $invoice->number,
        //         'additional_notes' => $invoice->additional_notes,
        //         'status' => $invoice->status,
        //         'total_amount' => $invoice->total_amount,
        //         'currency' => $invoice->currency,
        //         'formOfPayment' => $invoice->formOfPayment,
        //         'issued_on' => $invoice->issued_on,
        //         'due_date' => $invoice->due_date
        //     ];
        // }

        return $response;
    }

    public function clientIco($ico)
    {
        $response = 'here go invoices found by CLIENT ICO:' . $ico;

        // $response = [];
        // $invoices = Invoice::orderedBy('id')
        //      ->where('client_id', $ico)
        //      ->get();
        // foreach ($invoices as $invoice) {
        //      $response[] = [
        //         'id' => $invoice->id,
        //         'supplier_id' => $invoice->supplier_id,
        //         'client_id' => $invoice->client_id,
        //         'number' => $invoice->number,
        //         'additional_notes' => $invoice->additional_notes,
        //         'status' => $invoice->status,
        //         'total_amount' => $invoice->total_amount,
        //         'currency' => $invoice->currency,
        //         'formOfPayment' => $invoice->formOfPayment,
        //         'issued_on' => $invoice->issued_on,
        //         'due_date' => $invoice->due_date
        //     ];
        // }

        return $response;
    }
}

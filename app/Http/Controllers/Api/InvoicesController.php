<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Invoice;

class InvoicesController extends Controller
{
    public function index()
    {
        $response = [];
        $invoices = Invoice::with('invoiceItems')
            ->orderBy('id')
            ->get();
        foreach ($invoices as $invoice) {
            $response[] = [
                'id' => $invoice->id,
                'supplier_id' => $invoice->supplier_id,
                'client_id' => $invoice->client_id,
                'number' => $invoice->number,
                'additional_notes' => $invoice->additional_notes,
                'status' => $invoice->status,
                'invoice_items' => $invoice->invoiceItems,
                'total_amount' => $invoice->total_amount,
                'currency' => $invoice->currency,
                'form_of_payment' => $invoice->form_of_payment,
                'issued_on' => $invoice->issued_on,
                'due_date' => $invoice->due_date
            ];
        }


        return $response;
    }

    public function supplierIco($ico)
    {

        $response = [];
        $invoices = Invoice::with(['invoiceItems', 'supplier', 'client'])
            ->orderBy('id')
            ->get();
        foreach ($invoices as $invoice) {
            if ($invoice->supplier->reg_number == $ico) {
                $response[] = [
                    'id' => $invoice->id,
                    'supplier' => $invoice->supplier,
                    'client' => $invoice->client,
                    'number' => $invoice->number,
                    'additional_notes' => $invoice->additional_notes,
                    'status' => $invoice->status,
                    'invoice_items' => $invoice->invoiceItems,
                    'total_amount' => $invoice->total_amount,
                    'currency' => $invoice->currency,
                    'form_of_payment' => $invoice->form_of_payment,
                    'issued_on' => $invoice->issued_on,
                    'due_date' => $invoice->due_date
                ];
            } else {
                return 'not found :(';
            }
        }

        return $response;
    }

    public function clientIco($ico)
    {

        $response = [];
        $invoices = Invoice::with(['invoiceItems', 'client', 'supplier'])
            ->orderBy('id')
            ->get();
        foreach ($invoices as $invoice) {
            if ($invoice->client->reg_number == $ico) {
                $response[] = [
                    'id' => $invoice->id,
                    'supplier' => $invoice->supplier,
                    'client' => $invoice->client->reg_number,
                    'number' => $invoice->number,
                    'additional_notes' => $invoice->additional_notes,
                    'status' => $invoice->status,
                    'invoice_items' => $invoice->invoiceItems,
                    'total_amount' => $invoice->total_amount,
                    'currency' => $invoice->currency,
                    'form_of_payment' => $invoice->form_of_payment,
                    'issued_on' => $invoice->issued_on,
                    'due_date' => $invoice->due_date
                ];
            } else {
                return 'not found :(';
            }
        }

        return $response;
    }


    // all paid invoices for current user will be in API together with other information about invoices
    public function currentSupplierPaidInvoices()
    {
        $currentSupplierPaidInvoices = Invoice::where('supplier_id',\Auth::id())->where('status','paid')->pluck('total_amount')->toArray();;

        return $currentSupplierPaidInvoices;
    }
    
    

}

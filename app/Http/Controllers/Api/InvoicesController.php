<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Invoice;
use App\Models\InvoiceItem;

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

    public function create(Request $request)
    {
        $invoice = new Invoice;

        $invoice->supplier_id = $request->input('supplier_id');
        $invoice->client_id = $request->input('client_id');
        $invoice->number = $request->input('number');
        $invoice->additional_notes = $request->input('additional_notes');
        $invoice->status = $request->input('status');
        $invoice->total_amount = $request->input('unit_cost') * $request->input('unit_quantity');
        $invoice->currency = $request->input('currency');
        $invoice->form_of_payment = $request->input('form_of_payment');
        $invoice->issued_on = $request->input('issued_on');
        $invoice->due_date = $request->input('due_date');

        $invoice->save();

        $invoiceItems = new InvoiceItem;

        $invoiceItems->invoice_id = $invoice->id;
        $invoiceItems->invoice_description = $request->input('invoice_description');
        $invoiceItems->unit_cost = $request->input('unit_cost');
        $invoiceItems->unit_quantity = $request->input('unit_quantity');

        $invoiceItems->save();

        return 'Invoice created.';
    }







    public function update(Request $request, $invoice_number)
    {
        // check if exists, hidden id etc....
        $invoice = Invoice::with(['invoiceItems', 'supplier', 'client'])->where('id', $invoice_number)->where('user_id', Auth::id())->get();

        $invoice->supplier_id = $request->input('supplier_id');
        $invoice->client_id = $request->input('client_id');
        $invoice->number = $request->input('number');
        $invoice->additional_notes = $request->input('additional_notes');
        $invoice->status = $request->input('status');
        $invoice->total_amount = $request->input('total_amount');
        $invoice->currency = $request->input('currency');
        $invoice->form_of_payment = $request->input('form_of_payment');
        $invoice->issued_on = $request->input('issued_on');
        $invoice->due_date = $request->input('due_date');

        $invoice->save();

        // session()->flash('success_message', 'Invoice updated!');
        return 'Invoice updated!';
    }
}

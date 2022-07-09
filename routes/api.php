<?php

use App\Http\Controllers\Api\FakeAresController;
use App\Http\Controllers\Api\ClientsController;
use App\Http\Controllers\Api\InvoicesController;
use App\Http\Controllers\Api\SuppliersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// /api/fakeares
Route::get('/fakeares', [FakeAresController::class, 'fakeAres']);

// APIs for DB

//All CLIENTS in our DB
Route::get('/clients', [ClientsController::class, 'index']);
//CLIENT by ICO
Route::get('/clients/{ico}', [ClientsController::class, 'indexIco']);

//ALL SUPPLIERS
Route::get('/suppliers', [SuppliersController::class, 'index']);
// SUPPLIER by ICO
Route::get('/suppliers/{ico}', [SuppliersController::class, 'indexIco']);


//ALL invoices
Route::get('/invoices', [InvoicesController::class, 'index']);
//INVOICES by SUPPLIER-ICO
Route::get('/invoices/suppliers/{ico}', [InvoicesController::class, 'supplierIco']);
//INVOICES by CLIENT-ICO
Route::get('/invoices/clients/{ico}', [InvoicesController::class, 'clientIco']);

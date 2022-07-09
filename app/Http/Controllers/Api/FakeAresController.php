<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FakeAresController extends Controller
{
    public function fakeAres()
    {
        $fakeResponse = [
            [
                'some data' => 'fake ares api'
            ]
        ];

        return $fakeResponse;
    }
}

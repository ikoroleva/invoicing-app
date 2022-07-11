<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankAccount extends Model
{
    use HasFactory;
     public function supplier()
        {
            return $this->belongsTo(Supplier::class);
        }
    public function client()
        {
            return $this->belongsTo(Client::class);
        }
}

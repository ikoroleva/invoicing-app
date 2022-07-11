<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;
    public function adresses()
        {
            return $this->hasMany(Adress::class);
        }
    public function bankAccounts()
        {
            return $this->hasMany(BankAccount::class);
        }
    public function invoices()
        {
            return $this->hasMany(Invoice::class);
        }
    public function clients()
        {
            return $this->belongsToMany(Client::class);
        }
}

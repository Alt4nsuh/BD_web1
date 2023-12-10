<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hereglegch extends Model
{
    use HasFactory;
    protected $table = 'hereglegches';
    protected $primaryKey = 'id'; 
    public $timestamps = false;

    protected $fillable = [
        'h_ner',
        'h_ovog',
        'h_huis',
        'h_utas',
        'h_gmail',
        'h_bolovsrol_zereg',
        'h_mergejil',
        'pass',
    ];
}

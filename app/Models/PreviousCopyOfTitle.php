<?php

namespace App\Models;

use App\Models\Land;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PreviousCopyOfTitle extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function lands(){
        return $this->belongsToMany(Land::class);
    
    }
}

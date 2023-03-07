<?php

namespace App\Models;

use App\Models\Encumbered;
use App\Models\PreviousCopyOfTitle;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Land extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function previousCopyOfTitles()
    {
        return $this->hasOne(PreviousCopyOfTitle::class);
    }

    public  function encumbereds()
    {
        return $this->hasOne(Encumbered::class);
    }
}

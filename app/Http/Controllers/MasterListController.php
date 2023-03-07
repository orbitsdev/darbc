<?php

namespace App\Http\Controllers;

use App\Models\Land;
use Inertia\Inertia;
use Illuminate\Http\Request;

class MasterListController extends Controller
{
    function index()
    {

        return Inertia::render('masterlist',[
            'items'=> Land::paginate(10)
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Land;
use Illuminate\Http\Request;

class LandController extends Controller

{
    

    public function create(Request $request){
     

        $validated =  $request->validate([
        'no'=> 'required|numeric',
        'lot_no'=> 'required|numeric',
        'survey_no'=> 'required',
        'title_area'=> 'required|numeric',
        'awarded_area'=> 'required|numeric',
        'previous_land_owner'=> 'required',
        'field_no'=> 'required',
        'location'=> 'required',
        'municipality'=> 'required',
        'title'=> 'required',
        'cloa_no'=> 'required',
        'page'=> 'required',
        'encumbered_area'=> 'required|numeric',
        'encumbered_variance'=> 'required|numeric',
        'previous_copy_of_title_type'=> 'required',
        'previous_copy_of_title_no'=> 'required',
        'title_status'=> 'required',
        'title_copy'=> 'required',
        'remarks'=> 'required',
        'status'=> 'required',
        'land_bank_amortization'=> 'required',
        'amount'=> 'required|numeric',
        'date_paid'=> 'required',
        'date_cert'=> 'required',
        'ndc_direct_payment_scheme'=> 'required',
        'ndc_remarks'=> 'required',
        'notes'=> 'required',
        
    ]);



    $new_record = Land::create([
        
        'no'=> $request->no ,
        'lot_no'=> $request->lot_no ,
        'survey_no'=> $request->survey_no ,
        'title_area'=> $request->title_area,
        'awarded_area'=> $request->awarded_area,
        'previous_land_owner'=> $request->previous_land_owner,
        'field_no'=> $request->field_no,
        'location'=> $request->location ,
        'municipality'=> $request->municipality ,
        'title'=> $request-> title,
        'cloa_no'=> $request->cloa_no ,
        'page'=> $request->page ,
        'encumbered_area'=> $request->encumbered_area ,
        'encumbered_variance'=> $request->encumbered_variance ,
        'previous_copy_of_title_type'=> $request->previous_copy_of_title_type ,
        'previous_copy_of_title_no'=> $request->previous_copy_of_title_no ,
        'title_status'=> $request->title_status,
        'title_copy'=> $request->title_copy,
        'remarks'=> $request->remarks ,
        'status'=> $request->status,
        'land_bank_amortization'=> $request->land_bank_amortization,
        'amount'=> $request->amount,
        'date_paid'=> Carbon::parse($request->date_paid) ,
        'date_cert'=> Carbon::parse($request->date_cert),
        'ndc_direct_payment_scheme'=> $request->ndc_direct_payment_scheme ,
        'ndc_remarks'=> $request->ndc_remarks ,
        'notes'=> $request->notes ,
    ]);


    
        // return redirect()->back()->with('success', 'Land record created successfully');

        return redirect()->route('masterlist.index')->with('success', 'Land record created successfully');


        // dd($new_record);
    

    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Spatie\SimpleExcel\SimpleExcelReader;

class FileController extends Controller
{

    public function uploadLocal(Request $request)
    {
        if ($request->has('files')) {
            $image = $request->file('files');
            $file_name = $image->getClientOriginalName();
            $folder = uniqid() . strtotime(now());
            $file_type = $image->getClientMimeType();
            $path = $image->storeAs('tmp/' . $folder, $file_name, 'public');
            return ['folder' => $folder, 'file_name' => $file_name, 'file_type'=> $file_type];
        }

        return 'No file uploaded.';
    }
    public function deleteLocal(Request $request)
    {

        // dd($request->folder);

        Storage::disk('public')->deleteDirectory('tmp/' . $request->folder);


        // Storage::disk('public')->delete($request->folder);
    }



    public function importFile(Request $request){



        $file_path = 'tmp/' . $request->folder . '/' . $request->file_name;


        $file_path  = Storage::disk('public')->path($file_path);
        $rows = SimpleExcelReader::create($file_path)->getRows();


        $headers = SimpleExcelReader::create($file_path)->getHeaders();


        $rows->each(function(array $rowProperties) {
                User::create([
                    'name' => $rowProperties['name'],
                    'email' => $rowProperties['email'],
                    'password' =>  Hash::make('@admin2!!'),
                ]);
         });
        
    

        // dd($headers);
        // dd($file_path);

        return redirect()->route('masterlist.index')->with('success', 'File imported successfully');

    }
}

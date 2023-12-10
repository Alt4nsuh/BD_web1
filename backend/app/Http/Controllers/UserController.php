<?php

namespace App\Http\Controllers;
use App\Models\User;
use illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class UserController extends Controller
{
    
    public function registered(Request $request)
{
    $request->validate([
        'h_ner' => 'required|string',
        'h_gmail' => 'required|email|unique:Users,h_gmail',
        'pass' => 'required|string'
    ]);

    try {
        $User = new User();
        $User->h_ner = $request->input('h_ner');
        $User->h_ovog = $request->input('h_ovog');
        $User->h_huis = $request->input('h_huis');
        $User->h_utas = intval($request->input('h_utas')); 
        $User->h_gmail = $request->input('h_gmail');
        $User->h_bolovsrol_zereg = $request->input('h_bolovsrol_zereg');
        $User->h_mergejil = $request->input('h_mergejil');
        $User->pass = bcrypt($request->input('pass'));
        $User->save();
        
        return response()->json(['message' => 'Registration successful'], 201);
    } catch (\Exception $e) {
        return response()->json(['message' => 'Registration failed', 'error' => $e->getMessage()], 500);
    }
    }
    public function login(Request $request){
        $request->validate([
            'h_gmail' => 'required|email|exists:Users',
            'pass' => 'required|string'
        ]);

    }

    
}

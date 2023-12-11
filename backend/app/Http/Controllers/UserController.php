<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return response()->json($users, 200);
    }
    public function show($id)
    {
        $user = User::where("id", $id)->first();

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        return response()->json($user, 200);
    }

    public function store(Request $request)
    {
        // Assuming you have corresponding fields in the request, adjust as needed
        $user = User::create($request->all());
        return response()->json($user, 201);
    }

    public function signup(Request $request)
    {
        $request->validate([
            'h_ovog' => 'required|string|max:255',
            'h_ner' => 'required|string|max:255',
            'h_huis' => 'required|string',
            'h_gmail' => 'required|email|unique:users,h_gmail',
            'h_utas' => 'required|string|max:20',
            'h_bolovsrol_zereg' => 'required|string',
            'h_mergejil' => 'required|string',
            'password' => 'required|string|min:8|confirmed',
            'password_confirmation' => 'required',
        ]);

        $user = User::create([
            'h_ovog' => $request->h_ovog,
            'h_ner' => $request->h_ner,
            'h_huis' => $request->h_huis,
            'h_gmail' => $request->h_gmail,
            'h_utas' => $request->h_utas,
            'h_bolovsrol_zereg' => $request->h_bolovsrol_zereg,
            'h_mergejil' => $request->h_mergejil,
            'password' => Hash::make($request->password),
        ]);

        return response()->json($user, 201);
    }

    public function login(Request $request)
    {
        $this->validate($request, [
            'h_gmail' => 'required|email',
            'password' => 'required|string',
        ]);

        if (Auth::attempt($request->only('h_gmail', 'password'))) {
            $data = User::where('h_gmail', $request->h_gmail)->first();
            return response()->json($data, 200);
        } else {
            // Authentication failed
            return response()->json("нууц үг буруу", 404);
        }

    }

    public function getUser(Request $request)
    {
        $this->validate($request, [
            'user_id' => 'exists:users,id'
        ]);

        $user = User::find($request->user_id);

        return response()->json($user, 200);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $request->validate([
            'h_ovog' => 'required|string|max:255',
            'h_ner' => 'required|string|max:255',
            'h_gmail' => 'required|email|unique:users,h_gmail,' . $user->id,
            'h_utas' => 'required|string|max:20',
        ]);

        $user->update([
            'h_ovog' => $request->h_ovog,
            'h_ner' => $request->h_ner,
            'h_gmail' => $request->h_gmail,
            'h_utas' => $request->h_utas,
        ]);

        return response()->json($user, 200);
    }
}

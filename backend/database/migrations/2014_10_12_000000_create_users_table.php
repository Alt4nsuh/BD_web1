<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */ public function down(): void
    {
        Schema::dropIfExists('users');
    }
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id()->unique();
            $table->string('h_ner');
            $table->string('h_ovog');
            $table->string('h_huis');
            $table->integer('h_utas');
            $table->string('h_gmail');
            $table->string('h_bolovsrol_zereg');
            $table->string('h_mergejil');
            $table->string('pass');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
   
};

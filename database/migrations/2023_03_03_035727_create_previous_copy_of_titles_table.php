<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('previous_copy_of_titles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('land_id')->nullable();
            $table->string('previous_title_type');
            $table->bigInteger('previous_no');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('previous_copy_of_titles');
    }
};

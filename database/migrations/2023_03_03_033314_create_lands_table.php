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
        Schema::create('lands', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('no')->nullable();
            $table->bigInteger('lot_no')->nullable();
            $table->text('survey_no')->nullable();
            $table->bigInteger('title_area')->nullable();
            $table->bigInteger('awarded_area')->nullable();
            $table->text('previous_land_owner')->nullable();
            $table->string('field_no')->nullable();
            $table->string('location')->nullable();
            $table->string('municipality')->nullable();
            $table->string('title')->nullable();
            $table->string('cloa_no')->nullable();
            // incumberes is on a seperatet table
            // previous copy of title is on a seperatet table
            $table->string('page')->nullable();
            $table->bigInteger('encumbered_area')->nullable();
            $table->bigInteger('encumbered_variance')->nullable();
            $table->string('previous_copy_of_title_type')->nullable();
            $table->string('previous_copy_of_title_no')->nullable();
            $table->string('title_status')->nullable();
            $table->string('title_copy')->nullable();
            $table->text('remarks')->nullable();
            $table->text('status')->nullable();
            $table->string('land_bank_amortization')->nullable();
            $table->bigInteger('amount')->nullable();
            $table->date('date_paid')->nullable();
            $table->date('date_cert')->nullable();
            $table->string('ndc_direct_payment_scheme')->nullable();
            $table->text('ndc_remarks')->nullable();
            $table->text('notes')->nullable();
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
        Schema::dropIfExists('lands');
    }
};

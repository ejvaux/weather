<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'App\Http\Controllers\MapController@index');
Route::get('/forecast', 'App\Http\Controllers\MapController@getForecast');

Route::get('/test', function(\Illuminate\Http\Request $request){

    $appid = config('app-settings.openweathermap.appid');

    $httpClient = new \GuzzleHttp\Client();
    $request =
        $httpClient
            ->get("//api.openweathermap.org/data/2.5/weather?
            lon=".$request->lon."&
            lat=".$request->lat."&
            appid=".$appid."&
            mode=".$request->mode);

    return $request->getBody()->getContents();
});

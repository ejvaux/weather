<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MapController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('maps');
    }

    public function getForecast(Request $request)
    {
        $appid = config('app-settings.openweathermap.appid');
        $httpClient = new \GuzzleHttp\Client();
        $request =
            $httpClient
                ->get("//api.openweathermap.org/data/2.5/weather?lon=".$request->lon."&lat=".$request->lat."&appid=".$appid."&mode=".$request->mode);
        return $request->getBody()->getContents();
    }
}

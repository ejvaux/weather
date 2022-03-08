@extends('layouts.app')

@section('title')
    Weather Forecast
@endsection

@section('js')
    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.min.js"></script>
    <script src="../public/js/maps.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
@endsection

@section('css')
    <link rel="stylesheet"
        href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css"
        type="text/css">
@endsection

@section('content')
    <div id="map"></div>
@endsection
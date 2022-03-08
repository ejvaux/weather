<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>@yield('title')</title>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
    @include('include.header')
</head>

<body>
    @yield('css')
    <main class="py-4">
        @yield('content')
    </main>
    @yield('js')
</body>

</html>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <title inertia>{{ config('app.name', 'Starter App') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body>
    <script src="/dist/js/demo-theme.min.js?1684106062"></script>
    @inertia
    <!-- Tabler Core -->
    <script src="/dist/js/tabler.min.js?1684106062" defer></script>
    <script src="/dist/js/demo.min.js?1684106062" defer></script>
</body>

</html>

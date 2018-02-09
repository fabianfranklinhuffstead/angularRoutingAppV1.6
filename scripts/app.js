/*
** Fabian Franklin-Huffstead 28/09/2016 app.js
*/
var app = angular.module ('ChiveApp', ['ngRoute']);

app.constant(
    'GlobalConfig',
{
    defaultRoute: '/dashboard'
}
);

app.config (
    [
        '$routeProvider', 'GlobalConfig',
        function ( $routeProvider, GlobalConfig )
        {

            // DEFAULT APP PAGE
            var defaultRoute = GlobalConfig.defaultRoute;

            // ROUTE / PAGE CONFIGURATION - WHEN USER ACCESSES THE FOLLOWING LINKS, LOAD THE APPROPRIATE VIEWS / PAGES
            $routeProvider
                .when (
                    '/dashboard', {
                        templateUrl: 'views/dashboard.html'
                    }
                )
                .when (
                    '/login', {
                        templateUrl: 'views/login.html'
                    }
                )
                .when (
                    '/register', {
                        templateUrl: 'views/register.html'
                    }
                )
                .when (
                    '/profile', {
                        templateUrl: 'views/profile.html'
                    }
                )
                .otherwise (
                    {
                        redirectTo: defaultRoute
                    }
                );
        }
    ]
);

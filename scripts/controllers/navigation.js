/**
 * Created by Fabian Franklin-Huffstead on 15/10/2016.
 */

app.controller (
    'navigationController', [
        '$scope', function ( $scope )
        {
            // JSON notation
            $scope.navItems = [
                {
                    link : '/',
                    title: 'login'
                },
                {
                    link : '/settings',
                    title: 'Settings'
                },
                {
                    link : '/register',
                    title: 'Register'
                },
                {
                    link : '/dashboard',
                    title: 'dashboard'
                }
            ];

            /*$scope.ShowDashboard = function ( navItem ){
                //makes the dashboard hidden when on login screen
                var initdashboard = true;

                return initdashboard;
                //add some code here to check that we are only showing this when user is logged in.
            }*/
        }

    ]
);


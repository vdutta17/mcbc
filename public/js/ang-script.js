	// create the module and name it scotchApp
	var mcbcApp = angular.module('mcbcApp', ['ngRoute']);

	// configure our routes
	mcbcApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			.when('/services', {
				templateUrl : 'pages/services.html',
				controller  : 'serviceController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contactus.html',
				controller  : 'contactController'
			})

			// route for the portfolio page
			.when('/portfolio', {
				templateUrl : 'pages/portfolio.html',
				controller  : 'portfolioController'
			})

			.when('/video', {
				templateUrl : 'pages/inprogress.html',
				controller  : 'controllerTodo'
			})

			.when('/team', {
				templateUrl : 'pages/inprogress.html',
				controller  : 'controllerTodo'
			});

	});

	// create the controller and inject Angular's $scope
	mcbcApp.controller('mainController', function($scope) {
		// Home page nothing to display
		$scope.viewname="Welcome To Our Studio!"
		$scope.viewdescription="It's Nice To Meet You"
		$scope.btndescription="Tell Me More"
		
	});

	mcbcApp.controller('serviceController', function($scope) {
		// create a message to display in our view
		$scope.viewname="Services"
		$scope.viewdecription = 'Our portfolio of services!';
	});

	mcbcApp.controller('aboutController', function($scope) {
		// create a message to display in our view
		$scope.viewname="About"
		$scope.viewdecription = 'Out great journey just begin....';
	});

	mcbcApp.controller('contactController', function($scope) {
		// create a message to display in our view
		$scope.viewname="Contact Us"
		$scope.viewdecription = 'Contact us';
	});

	mcbcApp.controller('controllerTodo', function($scope) {
		// create a message to display in our view
		$scope.viewname="Videos"
		$scope.viewdecription = 'Videos';
	});

	mcbcApp.controller('controllerTodo', function($scope) {
		// create a message to display in our view
		$scope.viewname="Team"
		$scope.viewdecription = 'Team';
	});

	mcbcApp.controller('portfolioController', function($scope, $http) {
		// create a message to display in our view
		$scope.viewname="Portfolio";
		$scope.viewdecription = 'Our great portfolio of services';
		$http.get('./pages/portfolio.json').success(function(data) {
          $scope.records = data;
    });

});

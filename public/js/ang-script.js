	// create the module and name it scotchApp
	var mcbcApp = angular.module('mcbcApp', ['ngRoute','thatisuday.ng-image-gallery']);

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
			});
	});

	// create the controller and inject Angular's $scope
	mcbcApp.controller('mainController', function($scope, $timeout, $interval) {
		// Home page nothing to display
		$scope.viewname="Welcome To Our Studio!"
		$scope.viewdescription="It's Nice To Meet You"
		$scope.btndescription="Tell Me More"
		
		// Local images
		$scope.images = [
			  {
          "url" : "../img1/blackbobpics/bob1.jpg",
          "bubbleUrl" : "../img1/blackbobpics/bob1.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/blackbobpics/bob2.jpg",
          "bubbleUrl" : "../img1/blackbobpics/bob2.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/blackbobpics/bob3.jpg",
          "bubbleUrl" : "../img1/blackbobpics/bob3.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/blackbobpics/bob4.jpg",
          "bubbleUrl" : "../img1/blackbobpics/bob4.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/blackbobpics/bob5.jpg",
          "bubbleUrl" : "../img1/blackbobpics/bob5.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/blackbobpics/bob6.jpg",
          "bubbleUrl" : "../img1/blackbobpics/bob6.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/blackbobpics/bob7.jpg",
          "bubbleUrl" : "../img1/blackbobpics/bob7.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/blackbobpics/bob8.jpg",
          "bubbleUrl" : "../img1/blackbobpics/bob8.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/blackbobpics/bob9.jpg",
          "bubbleUrl" : "../img1/blackbobpics/bob9.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/blackbobpics/bob10.jpg",
          "bubbleUrl" : "../img1/blackbobpics/bob10.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/blackbobpics/bob11.jpg",
          "bubbleUrl" : "../img1/blackbobpics/bob11.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/bobjr_avenger/1.jpg",
          "bubbleUrl" : "../img1/bobjr_avenger/1.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/bobjr_avenger/2.jpg",
          "bubbleUrl" : "../img1/bobjr_avenger/2.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/bobjr_avenger/3.jpg",
          "bubbleUrl" : "../img1/bobjr_avenger/3.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/bobjr_avenger/4.jpg",
          "bubbleUrl" : "../img1/bobjr_avenger/4.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/bobjr_avenger/5.jpg",
          "bubbleUrl" : "../img1/bobjr_avenger/5.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/bobjr_avenger/6.jpg",
          "bubbleUrl" : "../img1/bobjr_avenger/6.jpg",
          "extUrl" : ""
      },
       {
          "url" : "../img1/memento/1.jpg",
          "bubbleUrl" : "../img1/memento/1.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/memento/2.jpg",
          "bubbleUrl" : "../img1/memento/2.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/memento/3.jpg",
          "bubbleUrl" : "../img1/memento/3.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/memento/4.jpg",
          "bubbleUrl" : "../img1/memento/4.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/memento/5.jpg",
          "bubbleUrl" : "../img1/memento/5.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/memento/6.jpg",
          "bubbleUrl" : "../img1/memento/6.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/sepoyturbo/1.jpg",
          "bubbleUrl" : "../img1/sepoyturbo/1.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/sepoyturbo/2.jpg",
          "bubbleUrl" : "../img1/sepoyturbo/2.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/sepoyturbo/3.jpg",
          "bubbleUrl" : "../img1/sepoyturbo/3.jpg",
          "extUrl" : ""
      },
      {
          "url" : "../img1/sepoyturbo/4.jpg",
          "bubbleUrl" : "../img1/sepoyturbo/4.jpg",
          "extUrl" : ""
      }
		];

		/*****************************************************/

		// configurations
		$scope.conf = {
			thumbnails 	: 	false,	
			inline		: 	false,
			bubbles		: 	true,
			imgBubbles 	: 	false,	
			bgClose		: 	false,
		};


		// Gallery methods gateway
		$scope.methods = {};
		$scope.openGallery = function(){
			$scope.images = [];
			var imageGallery=this.record.imageGallery;
			for (i = 0; i < imageGallery.length; i++)
			{
				var obj = new Object();
   				obj.url = imageGallery[i].url;
   				var jsonString= JSON.stringify(obj);
   				$scope.images.push(obj);
   			}
			$scope.methods.open();
		};

		// Similar to above function
		$scope.closeGallery = function(){
			console.log("closed");
			$scope.images = [];
    		$scope.methods.close();
		};

		$scope.closed = function(){
			console.warn('Gallery closed!');
			//$scope.images = [];
		}

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

	mcbcApp.controller('portfolioController', function($scope, $http) {
		// create a message to display in our view
		$scope.viewname="Portfolio";
		$scope.viewdecription = 'Our great portfolio of services';
		$http.get('portfolio.json').success(function(data) {
          $scope.records = data;
    });

});

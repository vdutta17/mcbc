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
      .when('/video', {
        templateUrl : 'pages/video.html',
        controller  : 'videoController'
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
		$scope.viewname="Welcome To Our Studio!";
		$scope.viewdescription="It's Nice To Meet You";
		$scope.btndescription="Tell Me More";
    $scope.counter = 5;
        var counterIntvl = $interval(function(){
          $scope.counter = $scope.counter - 1;
          if($scope.counter == 0){
            $interval.cancel(counterIntvl);
          }
        }, 1000);
		
		// Local images
		$scope.images = [
      {
            title : 'Photo Gallery',
            alt : 'Photo',
            url : '../img1/motorcycle-stencil.gif'
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
      imgAnim : 'fadeup'
		};

  /*****************************************************/
   $timeout(function(){
    
    }, 5000);


		// Gallery methods gateway
		$scope.methods = {};
		$scope.openGallery = function(){
      var length = $scope.images.length;
      if(length > 1){
        for (j = 1; j < length; j++){
          //console.log("pop"+j);
          $scope.images.pop();
        }
      }
      
      var imageGallery=this.record.imageGallery;
      for (i = 0; i < imageGallery.length; i++){
        var obj = new Object();
          obj.url = imageGallery[i].url;
          $scope.images.push(obj);
        }
         var jsonString= JSON.stringify($scope.images);
        // console.log(jsonString);
			   $scope.methods.open();
		};

		// Similar to above function
		$scope.closeGallery = function(){
			//console.log("closed");
    	$scope.methods.close();
		};

		$scope.closed = function(){
			//console.log('Gallery closed!');
		};
    // Gallery callbacks
    $scope.opened = function(){
        //  console.log('Gallery opened!');
    };

	});

  mcbcApp.controller('videoController', function($scope) {
    // create a message to display in our view
    $scope.viewname="Videos"
    $scope.viewdecription = 'Videos';
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

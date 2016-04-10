(function() {
    'use strict';

    angular.module('main.product', [])
    	.config(productConfig)
    	.controller('productCtrl', productController);

    function productConfig($stateProvider) {
    	$stateProvider
    		.state('products', {
    			url: '/products',
    			templateUrl: 'js/app/main/product/product.html',
    			controller: 'productCtrl',
    			controllerAs: 'product'
    		})
    }

	productController.$inject = [
	    '$scope', 'productService'
	];

	function productController($scope, productService) {
	    var self = this;
	    self.message ='';


	    self.user = {};
	    
	    activate();

	    function activate() {
	    	console.log('activate', productService.getProducts());
	    	self.message = 'Hello';
	    	self.products = productService.getProducts();
	    }



	    
	}
})();
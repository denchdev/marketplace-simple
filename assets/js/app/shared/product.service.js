(function() {
    'use strict';

    angular.module('Marketplace')
        .factory('productService', productService);

    function productService() {
        var products = [
            {
                "name": "book",
                "description": "interesting",
                "price": 3.14,
                "createdAt": "2016-04-10T12:42:52.242Z",
                "updatedAt": "2016-04-10T12:42:52.242Z",
                "id": 1
            },
            {
                "name": "car",
                "description": "veryspeed",
                "price": 3333.14,
                "createdAt": "2016-04-10T12:43:02.915Z",
                "updatedAt": "2016-04-10T12:43:02.915Z",
                "id": 2
            }
        ]
        
        var factory = {
            getProducts: getProducts
        };

        return factory;

        

        function getProducts() {
            return products;
        }

        
    }
})();
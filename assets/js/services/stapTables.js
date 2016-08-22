/**
 * Created by Suny on 7/6/16.
 */

app.service('StapTableService',["$http", "$filter", "ngTableParams", "GATEWAY", function ($http, $filter, ngTableParams, GATEWAY) {
    var stapTableService = {};
    stapTableService.createStapTable = function (data) {
        var count = arguments[1]?arguments[1]:15;
        var sorting = arguments[2]?arguments[2]:'asc';
        return new ngTableParams(
        {
            page: 1, // show first page
            count: count, // count per page
            sorting: {
                id: sorting // initial sorting
            }
        }, {
            total: data.length, // length of data
            getData: function ($defer, params) {
                // use build-in angular filter
                var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                var filteredData = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                params.total(orderedData.length);

                // set total for recalc pagination
                $defer.resolve(filteredData);
            }
        });
    }
    return stapTableService;
}]);
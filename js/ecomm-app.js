angular.module('ecommDirectives', [])
.directive('ecommHeader', function () {
    return {
        restrict: 'AE',
        templateUrl: '../partials/_header.html'
    };
})
.directive('ecommFooter', function () {
    return {
        restrict: 'AE',
        templateUrl: '../partials/_footer.html'
    };
});

$(document).ready(function () {

    // init showing interchange images inside orbit
    $('[data-orbit]').on('replace', 'img', function (e, new_path, original_path) {
        $('[data-orbit]').foundation('orbit').resize();
    });
});
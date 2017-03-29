(function() {
    'use strict';

    angular
        .module('strumApp')
        .factory('StorySearch', StorySearch);

    StorySearch.$inject = ['$resource'];

    function StorySearch($resource) {
        var resourceUrl =  'api/_search/stories/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();

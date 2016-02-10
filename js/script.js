var application = angular.module('protail', [ 'ngAnimate', 'ui.bootstrap']);

application.controller('Ctrl', function ($scope) {

    $scope.pp_data_tools = ['angularJS', 'bootstrap', 'html5', 'nodeJS'];
    $scope.pp_iptel_tools = ['angularJS', 'bootstrap', 'html5', 'nodeJS'];
    $scope.pp_interna_tools = ['angularJS', 'bootstrap', 'html5', 'nodeJS'];
    $scope.airMessir_tools = ['angularJS1', 'bootstrap', 'HTML_5', 'nodeJS1'];
    $scope.chronos_tools = ['perl', 'eclipse', 'mRemoteNG', 'svn', 'HP_ALM', 'java'];


    $scope.showModal = false;
    $scope.showModal_AIR = false;

    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;

        $scope.showModal_AIR = !$scope.showModal_AIR;

        if ($scope.showModal)
            $scope.showModal_AIR = false;

        //console.log('Oo ' + $scope.showModal);
    };

    $scope.setting = function() {
        $scope.showModal = false;
    }

});

application.controller('AccordionCtrl', function ($scope) {
  $scope.oneAtATime = false;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
    
    
    $scope.pp_data_tools = ['Perl', 'HTML5',  'CSS', 'Javascript', 'MySQL'];
    $scope.pp_iptel_tools = ['Spring', 'Hibernate', 'SVN', 'GWT', 'SmartGWT', 'Drools', 'XQuery', 'JAXB'];
    $scope.pp_interna_tools = ['JavaEE', 'Hibernate', 'Spring', 'GWT', 'Drools', 'MySQL'];
    $scope.airMessir_tools = ['angularJS', 'bootstrap', 'HTML5', 'nodeJS'];
    $scope.chronos_tools = ['perl', 'eclipse', 'mRemoteNG', 'svn', 'HP_ALM', 'Java', 'MicrosoftSQL'];
    $scope.sacre_tools = ['angularJS', 'bootstrap', 'HTML5', 'nodeJS'];
    $scope.watoo_tools = ['angularJS', 'bootstrap', 'HTML5', 'nodeJS'];
    $scope.clara_tools = ['angularJS', 'bootstrap', 'HTML5', 'nodeJS'];
});

application.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;
        console.log(attrs.visible);

        scope.$watch(attrs.visible, function(value){
            console.log(value);
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        }, true);

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });
var phonecatApp = angular.module('facturaElectronica',  []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('londonCtrl', function londonCtrl($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});

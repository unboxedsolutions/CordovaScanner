angular.module('starter.controllers', [])
    .controller('ScanCtrl', function ($scope) {
        var vm = this;
        vm.scanResult = {
            text: 'Click to scan...'
        };

        vm.setScanResult = function (result) {
            $scope.$apply(function () {
                vm.scanResult = result;
            });
        }

        vm.performScan = function () {
            vm.scanResult.text = 'Scanning...';
            cordova.plugins.barcodeScanner.scan(
              function (result) {
                  vm.setScanResult({
                      text: result.text,
                      format: result.format,
                      cancelled: result.cancelled,
                  });
              },
              function (error) {
                  vm.setScanResult({ error: error });
              }
           );
        };
    });

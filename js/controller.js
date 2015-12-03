(function() {
    'use strict';
    angular.module('app.controllers', [])
    .controller('AppCtrl', ['$scope', function($scope) {
        $scope.formData = {};
        $scope.total = 0.00;
        //gradeC available only for cardboards less then 2m^2
        //not showing this option is on stage one bigger box were chosen
        var square;
        $scope.gradeCAvailable = function(){
                square = $scope.formData.width*$scope.formData.length*0.0001; //converting cm^2 to m^2
                if ( square >= 2) return false;
                else return true;
        }
                
        $scope.countTotal = function(){
                //count the total m^2
                console.log(square);
                var totalSquare = $scope.formData.quantity * square;
                var tempTotal = 0;
                //count price
                switch ( $scope.formData.cardboardGrade ){
                    case 'A': tempTotal = totalSquare * 0.2;
                              $scope.cardboardGradePrice = 0.2;
                        break;
                    case 'B': tempTotal = totalSquare * 0.1;
                              $scope.cardboardGradePrice = 0.1;
                        break;
                    case 'C': tempTotal = totalSquare * 0.05;
                              $scope.cardboardGradePrice = 0.05;
                        break;
                    default: break;
                }
                
                $scope.total = tempTotal;
                tempTotal = 0;
                //plus printing per total m^2
                switch ( $scope.formData.printQuality ){
                    case '3-color': tempTotal = totalSquare * 0.2;
                                    $scope.printingPrice = 0.2;
                        break;
                    case '2-color': tempTotal = totalSquare * 0.1;
                                    $scope.printingPrice = 0.1;
                        break;
                    case 'black-only': tempTotal = totalSquare * 0.05;
                                    $scope.printingPrice = 0.05;
                        break;
                    default: break;
                }
                
                $scope.total +=tempTotal;
                tempTotal = 0;
                //plus extra
                if ( $scope.formData.optional.value1 ) {
                        $scope.total += $scope.formData.quantity * 0.1;
                }
                
                if ( $scope.formData.optional.value2 && $scope.formData.cardboardGrade == 'A') {
                        $scope.total += $scope.formData.quantity * 0.05;
                }
                
                //discount
                if ($scope.formData.printQuality == 'FantasticBoxCo-branding') {
                        tempTotal = $scope.total;
                        $scope.total -=tempTotal*5/100;
                        $scope.printingPriceDiscount = '5% discount';
                }              
        }
    }

  ]);

}).call(this);

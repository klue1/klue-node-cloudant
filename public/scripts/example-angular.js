/**
 * Example Angular
 */
var exampleAngularModule = angular.module('ExampleAngularApp', ['ui.grid', 'ui.grid.edit']);
exampleAngularModule.controller('ExampleAngularCtrl', function() {
	var ctrl = this;
	
	ctrl.message = "";
	ctrl.status = "Default Status";
	
	ctrl.gridData = [{name: "Moroni", age: 50},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34}];
	
	ctrl.columnDefs = [
		{ name: 'name', enableCellEdit: false, width: '25%' },
		{ name: 'age', displayName: 'Alter', type: 'number', width: '75%' }];
	
	ctrl.gridOptions = {data: ctrl.gridData, columnDefs: ctrl.columnDefs};
		
	ctrl.changeMessage = function() {
		ctrl.status = "Message changed " + ctrl.message; 
	}
});

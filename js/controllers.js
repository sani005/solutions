'use strict';

angular.module('contactApp')


// Controllers
.controller('contactCtrl', function ($scope, $routeParams, ContactService) {


  // Get the contacts from ContactService
  var contacts = ContactService.get();

  $scope.contactList = contacts || [];

  // Watch for changes on $scope.contactList 
  //so that localStorage contactList is kept in sync
  $scope.$watch('contactList', function() {
    ContactService.set($scope.contactList);
  }, true);


  // Phone pattern to match
  $scope.phonePattern = /\d{3}\-\d{3}\-\d{4}/;

  // Reset Form 
  $scope.cancelChange = function () {
    $scope.currentContact = {};
  }
  
  // Save contact
  $scope.saveContact = function() {
          ContactService.save($scope.currentContact);
          $scope.currentContact = {};  
          $scope.contactform.$setPristine();     
    }

  // Delete contact
  $scope.deleteContact = function (id) {
    ContactService.delete(id)
    $scope.currentContact = {};
  }

  // Show Edit Page
  $scope.editPage = function (contact) {

    $scope.contactCopy = angular.copy(contact);

    // Change the date string back to date object
    var birthday = new Date($scope.contactCopy.birthday);
    $scope.contactCopy.birthday = birthday;

  }

  // Save edited changes 
  $scope.editContact = function (contactCopy) {
    ContactService.edit(contactCopy);
    $scope.editform.$setPristine();
    $scope.contactCopy = {};
  }

      // Add Profile Picture
    $scope.filesChangedSaved = function(elm) {
      var files = elm.files;
      $scope.$apply();
      var img = '';

      var reader = new FileReader();
      reader.onload = function(e) {
        img = e.target.result;
        $scope.currentContact.img = img;
      }
      reader.readAsDataURL(files[0]); 
    }


      // Edit Profile Picture
    $scope.filesChangedEdited = function(elm) {
      var files = elm.files;
      $scope.$apply();
      var img = '';

      var reader = new FileReader();
      reader.onload = function(e) {
        img = e.target.result;
        $scope.contactCopy.img = img;
      }
      reader.readAsDataURL(files[0]); 
    }

})
  // Show Contact Details
.controller('contactDetailsCtrl', function ($scope, $routeParams) {
  var index = $routeParams.id;
  $scope.currentContact = $scope.contactList[index];
});










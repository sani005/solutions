'use strict';

angular.module('contactApp')
// Contact Service
.service('ContactService', function(localStorageService) {

// Get Contact List from localStorage
  var contactList = localStorageService.get('contactList');
  
  // Get a list of all contacts
  this.get = function() {
    return contactList;
  }

  // Set the contacts 
  this.set = function(contactList) {
    localStorageService.set('contactList', contactList);
  }


  // Add Contact
  this.save = function (currentContact) {
            var id = contactList.length;
            currentContact.id = id++;
            contactList.push(currentContact);

  }

  // Save Edited Changes
  this.edit = function (contactCopy) {
       for (var i = 0; i < contactList.length; i++) {
        if (contactCopy.id == contactList[i].id) {
            contactList[i] = contactCopy;
        }
      }
  }

  // Delete 
  this.delete = function (id) {
    for (var i = 0; i < contactList.length; i++) {
      if (id === contactList[i].id) {
        contactList.splice(i, 1);
      }
    }
  }


});













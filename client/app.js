var main = function() {
  'use strict';

  var postResult = function(result) {
    $('.results').text(result);
  };

  var sendRequest = function(url, data, writeToScreenFunc) {
    $.ajax({
        url: '/' + url,
        type: 'POST',
        data: data,
        contentType: 'application/json; charset=utf-i',
        dataType: 'json',
        success: function(response) {
          writeToScreenFunc(response);
        }
    });
  };

  $('.avg button').on('click', function() {
    sendRequest('avg', 
                JSON.stringify({ "ary": $('.array input').val().split(' ') }), 
                function(response) {
                  postResult('The average value is: ' + response);
                });
  });
  $('.max button').on('click', function() {
    sendRequest('max',
                JSON.stringify({ "ary": $('.array input').val().split(' ') }),
                function(response) {
                  postResult('The max value is: ' + response);
                });
  });
  $('.containsEven button').on('click', function() {
    sendRequest('containsEven',
                JSON.stringify({ "ary": $('.array input').val().split(' ') }),
                function(response) {
                  postResult('It is ' + response + ' that the array contains an even value');
                });
  });
  $('.allEven button').on('click', function() {
     sendRequest('allEven',
                 JSON.stringify({ "ary": $('.array input').val().split(' ') }),
                 function(response) {
                   postResult('It is ' + response + ' that the array contains only even values');
                 });
  });
  $('.arrayContains button').on('click', function() {
     if ($('.arrayContains input').val() !== '') {
       sendRequest('arrayContains',
                   JSON.stringify({ "ary": $('.array input').val().split(' '), "val": $('.arrayContains input').val() }),
                   function(response) {
                     postResult('It is ' + response + ' that ' + $('.arrayContains input').val() + ' is found in the array');
                   });
     }
  });
  $('.arrayContainsTwo button').on('click', function() {
     if ($('.arrayContainsTwo input').val() !== '') {
       sendRequest('arrayContainsTwo',
                   JSON.stringify({ "ary": $('.array input').val().split(' '), "val": $('.arrayContainsTwo input').val() }),
                   function(response) {
                     postResult('It is ' + response + ' that ' + $('.arrayContainsTwo input').val() + ' is found in the array at least twice');
                   });
     }
  });
  $('.arrayContainsThree button').on('click', function() {
     if ($('.arrayContainsThree input').val() !== '') {
       sendRequest('arrayContainsThree',
                   JSON.stringify({ "ary": $('.array input').val().split(' '), "val": $('.arrayContainsThree input').val() }),
                   function(response) {
                     postResult('It is ' + response + ' that ' + $('.arrayContainsThree input').val() + ' is found in the array at least three times');
                   });
     }
  });
  $('.arrayContainsNTimes button').on('click', function() {
     sendRequest('arrayContainsNTimes',
                 JSON.stringify({ "ary": $('.array input').val().split(' '), "val": $('.arrayContainsNTimes input.val').val(), "ct": $('.arrayContainsNTimes input.ct').val() }),
                 function(response) {
                   if (response !== '') {
                     postResult('It is ' + response + ' that ' + $('.arrayContainsNTimes input.val').val() + ' is found in the array at least ' + $('.arrayContainsNTimes input.ct').val() + ' times');
                   }
                 });
  });
};

$(document).ready(main);

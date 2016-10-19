  var express = require("express"),
      http = require("http"),
      bodyParser = require('body-parser'),
      app = express();

  app.use(express.static(__dirname + "/client"));

  app.use(bodyParser.json());

  http.createServer(app).listen(3000);
  console.log("Server running on port 3000");

  var sum = function (nums) {
    var sumSoFar = 0,
        i;

    for(i = 0; i < nums.length; ++i) {
      sumSoFar += +nums[i];
    }

    return sumSoFar;
  };

// 1. Write a function that accepts an array of numbers as an argument 
// and returns their average
  var avg = function (nums) {
    return sum(nums) / nums.length;
  };
  app.post("/avg", function(req, res) {
    res.json(avg(req.body.ary));
  });
// 2. Write a function that accepts an array of numbers as an argument 
// and returns the largest number in the array
  var max = function (nums) {
    var maxVal = nums[0];

    nums.forEach(function(value) {
      if (maxVal < value) {
        maxVal = value;
      }
    });

    return maxVal;
  };
  app.post("/max", function(req, res) {
    res.json(max(req.body.ary));
  });
// 3. Write a function that accepts an array of numbers and returns true
// if it contains at least one even number, false otherwise
  var containsEven = function(nums) {
    var i;

    for (i = 0; i < nums.length; ++i) {
      if (nums[i] % 2 === 0) {
        return true;
      }
    }
                                                           
    return false;
  };
  app.post("/containsEven", function(req, res) {
    res.json(containsEven(req.body.ary));
  });
// 4. Write a function that accepts an array of numbers and returns true
// if every number is even, false otherwise
  var allEven = function(nums) {
    var i;
                                                                                                 
    for (i = 0; i < nums.length; ++i) {
      if (nums[i] % 2 !== 0) {
        return false;
      }
    }

    return true;
  };
  app.post("/allEven", function(req, res) {
    res.json(allEven(req.body.ary));
  });
// 5. Write a function that accepts two arguments—an array of strings and 
// a string—and returns true if the string is contained in the array, false 
// otherwise.
  var arrayContains = function(ary, value) {
    var i;
                                                                                                                            
    for (i = 0; i < ary.length; ++i) {
      if (ary[i] === value) {
        return true;
      }
    }

    return false;
  };
  app.post("/arrayContains", function(req, res) {
    res.json(arrayContains(req.body.ary, req.body.val));
  });
// 6. Write a function that is similar to the previous one, but returns true 
// only if the array contains the given string at least twice.
  var arrayContainsTwo = function(ary, value) {
    var i,
        found = false;
                                                                                                                                                                               
    for (i = 0; i < ary.length; ++i) {
      if (ary[i] === value) {
        if (found) {
          return true;
        } else {
          found = true;
        }
      }
    }

    return false;
  };
  app.post("/arrayContainsTwo", function(req, res) {
    res.json(arrayContainsTwo(req.body.ary, req.body.val));
  });
// Write a function called arrayContainsThree that behaves similarly, but for 
// three instead of two.
  var arrayContainsThree = function(ary, value) {
    var i,
        found = 0;

    for (i = 0; i < ary.length; ++i) {
      if (ary[i] === value) {
        ++found;
        if (found === 3) {
          return true;
        }
      }
    }

    return false;
  };
  app.post("/arrayContainsThree", function(req, res) {
    res.json(arrayContainsThree(req.body.ary, req.body.val));
  });
// Write a function that accepts three arguments and returns true if the
// array contains the element n times, where n is the third argument.
  var arrayContainsNTimes = function(ary, value, ct) {
    var i,
        found = 0;

    for (i = 0; i < ary.length; ++i) {
      if (ary[i] === value) {
        ++found;
        if (found === +ct) {
          return true;
        }
      }
    }
    console.log(found);
    return false;
  };
  app.post("/arrayContainsNTimes", function(req, res) {
    res.json(arrayContainsNTimes(req.body.ary, req.body.val, req.body.ct));
  });

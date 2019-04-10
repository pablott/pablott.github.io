// https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
var skillsDataURL = '/data/skills.json';



function loadJSON(callback) {
  request = new XMLHttpRequest();
  request.overrideMimeType("application/json");
  //console.log(request); //0


  request.open('GET', skillsDataURL, true); // Replace 'my_data' with the path to your file
  //console.log(request); //1

  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == "200") {
      //alert('SUCCESS');
      //console.log(request); //4

      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(request.responseText);
    } else {
      //console.log(request); //2 & 3
      //alert('ERROR');
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    //alert('ERROR');
  };
  request.send(null);
}




loadJSON(function(response) {
  // Parse JSON string into object
  var actual_JSON = JSON.parse(response);
  console.log(actual_JSON);
});

//loadJSON();




var header = new Vue({
  el: '#header',
  data: {
    message: 'Pablo Trabajos'
  }
});


var time = new Vue({
  el: '#time',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
});


var menu = new Vue({
  el: '#menu',
  function: {

  }
});





/*var skills = new Vue({
  el: '#skills',
  data: {
    message: 'skills'
  }
});
*/


var skills = new Vue({
  el: '#skills',
  data: {
    userData: [], // initialize empty array
    message: 'xxx'
  },



  mounted() { // when the Vue app is booted up, this is run automatically.
    var self = this // create a closure to access component in the callback below
    //console.log(self.userData);
    loadJSON(function(response) {
      // Parse JSON string into object
      self.userData = JSON.parse(response);
      //self.userData = [1,4,3];
      //console.log($data.userData);
    });
    //console.log(self.userData);



    /*
    $.getJSON(skillsDataURL, function(data) {
      self.userData = data.users;
    });
    */


  }



})

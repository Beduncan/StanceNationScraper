// returns data in json format  
$.getJSON("/articles", function(data) {
  // for loop thur data 
    for (var i = 0; i < data.length; i++) {
    // this sets up the div for data 
    $("#art").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data.summary + "<br />" + data[i].link + "</p>");
  }
});
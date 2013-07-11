
var x = $.getJSON("http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?", {page:"Football", prop:"text"}, function(data) {console.log(data);});console.log(x);
console.log(x);
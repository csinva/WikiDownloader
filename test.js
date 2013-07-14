
var x = $.getJSON("http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?", {page:"Football", prop:"text"}, function(data) {useData(data)});

function useData(data){
	console.log(data.parse.text);
	console.log(data.parse.text['*']);
}
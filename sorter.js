//will return a json of all the words with frequencies 
function sort(origText) {
//array of unwanted words
var uWords = new Array ("the", "with", "about", "all", "alone", "also", "am", "and", "as", "at", "because", "before", "beside", "besides", "between", "but", "by", "etc", "for", "i", "of", "on", "other", "others", "so", "than", "that", "though", "to", "too", "trough", "until");
var minimumCharacterLength = 3; 

var wordArray = new Array ();
var aKeywords = new Array ();

var text = origText;
// remove line breaks
text = text.replace(/\s/g, ' ');

// convert to lowercase
text = text.toLowerCase();

// remove peculiars
text = text.replace(/[^a-zA-Z0-9äöüß]/g, ' ');

//create array of words
wordArray = text.split(" ");

//remove unwanted words
for(var m = 0; m < wordArray.length; m++) {
	if(wordArray[m].length < minimumCharacterLength) {
		wordArray.splice(m, 1);
		m--;
		continue;
	}
	for(var i = 0; i < uWords.length; i++) {
		//console.log(wordArray[m] + " " + uWords[i]);
		if(wordArray[m] === uWords[i]) {
			wordArray.splice(m, 1);
			m--;
			break;
		}
	}
}

//count instances of each word
var list = {};
for(var x = 0; x < wordArray.length; x++) {
	if(!list[wordArray[x]]) 
		list[wordArray[x]] = 1;
	else
		list[wordArray[x]]++;
}

// result
return list;
}
// end

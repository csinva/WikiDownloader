function searchData(searchString,data){
	var source = {'ref':'None','text':'None','hits':0};
	var sources = {};
	var index = 0;
	while(data.search(searchString)!=-1){	//search for word, keep looking up word counting until you get to source then save source / text / number of hits
		var start = data.search(searchString);
		data = data.slice(start);
		var end = data.search('<ref');
		var tempData = data.slice(0,end);
		var endSource = data.search('/ref');
		var numHits = 1;
		var sourceReference = data.slice(end,endSource);
		//need to implement searching for more than one hit
		index +=1;
		var tempSource = {};
		tempSource['text']=tempData;
		tempSource['hits']=numHits;
		tempSource['ref']=sourceReference;
		sources[index] = tempSource;
	}
	//need to implement picking the source with the most hits
	return sources[0];
}
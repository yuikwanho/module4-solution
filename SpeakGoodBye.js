(function (window){
	var byeSpeaker = {};
	var speak = "Goodbye";
    window.byeSpeaker = byeSpeaker;
    byeSpeaker.sayBye = function (name) {
    	console.log (speak + " " + name);
    }
})(window);

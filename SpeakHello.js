(function (window){
	var helloSpeaker = {};
	var speak = "Hello";
    window.helloSpeaker = helloSpeaker
    helloSpeaker.sayHello = function (names) {
    	console.log (speak + " " + names);
    }
})(window);

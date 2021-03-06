var myApp = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        myApp.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
		document.getElementById("headsup").innerText = "OK device ready";
        
        function onSuccess(heading) {
            document.getElementById("headsup").innerText = "OK Heading: " + heading.magneticHeading;
			document.querySelector("#needle").style.WebkitTransform = "rotate(" + heading.magneticHeading + "deg)"
        };
        function onError(error) {            
            document.getElementById("headsup").innerText = "CompassError: " + error.code;
            
        };
        var options = {
			frequency: 3000
        // filter: 1
        }; // Update every 1 degrees change

        
//        navigator.compass.getCurrentHeading(onSuccess, onError);

        var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        
    }
};

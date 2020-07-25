
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		app.pluginInitialize();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement 		= document.getElementById(id);
        var listeningElement 	= parentElement.querySelector('.listening');
        var receivedElement 	= parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function ativar_back(){
	cordova.plugins.backgroundMode.enable();	
}

function vericar_ativo(){
	alert(cordova.plugins.backgroundMode.isActive());
}
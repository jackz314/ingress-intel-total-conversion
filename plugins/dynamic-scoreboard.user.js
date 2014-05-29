// ==UserScript==
// @id             iitc-plugin-Dynamic-Scoreboard@Costaspap
// @name           IITC plugin: Create a local scoreboard
// @category       Info
// @version        0.1.0.20140524.214738
// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion
// @updateURL      https://secure.jonatkins.com/iitc/release/total-conversion-build.meta.js
// @downloadURL    https://secure.jonatkins.com/iitc/release/total-conversion-build.user.js
// @include        https://www.ingress.com/intel*
// @include        http://www.ingress.com/intel*
// @match          https://www.ingress.com/intel*
// @match          http://www.ingress.com/intel*
// @grant          none
// ==/UserScript==


// A plug in by Costaspap and harisbitsakou
function wrapper(plugin_info) {
    // ensure plugin framework is there, even if iitc is not yet loaded
    if(typeof window.plugin !== 'function') window.plugin = function() {};
    
    //PLUGIN AUTHORS: writing a plugin outside of the IITC build environment? if so, delete these lines!!
    //(leaving them in place might break the 'About IITC' page or break update checks)
    plugin_info.buildName = 'jonatkins';
    plugin_info.dateTimeVersion = '20140524.214738';
    plugin_info.pluginId = 'Dynamic Scoreboard';
    //END PLUGIN AUTHORS NOTE
    
    // PLUGIN START //

	
	
	
	var setup =  function() {
        if(window.useAndroidPanes()) {
            android.addPane("plugin-Scoreboard", "Scoreboard", "ic_action_paste");
            addHook("paneChanged", window.plugin.scoreboard.onPaneChanged);
        } else {
            $('#toolbox').append(' <a onclick="window.plugin.scoreboard.displayScoreboard()" title="Display a dynamic scoreboard in the current view">Scoreboard</a>');
        }
		
	}	

        
 // PLUGIN END //////////////////////////////////////////////////////////
    
    
    setup.info = plugin_info; //add the script info data to the function as a property
    if(!window.bootPlugins) window.bootPlugins = [];
    window.bootPlugins.push(setup);
    // if IITC has already booted, immediately run the 'setup' function
    if(window.iitcLoaded && typeof setup === 'function') setup();
} // wrapper end
// inject code into site context
var script = document.createElement('script');
var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };
script.appendChild(document.createTextNode('('+ wrapper +')('+JSON.stringify(info)+');'));
(document.body || document.head || document.documentElement).appendChild(script);
var scenes;

function loadScene() {
    if(location.hash != "")  { 
        $("body").empty();
        $("body").append(scenes.querySelector(location.hash).innerHTML);
    }
}

function nextScene() {
    location.hash = scenes.querySelector(location.hash + " + scene").id;
}

loadXML("./scenes.xml", function(scenesXML) { 
    scenes = scenesXML; 
    
    loadScene();
    window.onhashchange = function () { loadScene(); console.log("hashchange"); }
});
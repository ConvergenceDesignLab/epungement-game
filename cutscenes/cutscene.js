var lines;
var lineFunction = function() {};

function load() {
    lines = document.querySelectorAll(".speech-bubble");

    
    prepareNextLine(1, 500);
}

//function end() {
//    window.close();
//}

function prepareNextLine(index, delay) {
    function setLine(lineIndex) {
        if(lineIndex < lines.length) {
            var active = document.querySelectorAll(".speech-bubble.active");
            if(active != undefined) { active.forEach(function(item) { item.classList.remove("active"); }); }

            lines[lineIndex].classList.add("active");
            
            var activeFunctionAtrribute = lines[lineIndex].getAttribute("data-onactive");
            if(activeFunctionAtrribute != undefined) {
                var activeFunction = new Function(activeFunctionAtrribute);
                activeFunction();
            }
        }
        else {
            var active = document.querySelectorAll(".speech-bubble");
            if(active != undefined) { active.forEach(function(item) { item.classList.remove("active"); }); }
        }
    }
    
    function doNextLine() {
        document.removeEventListener("click", doNextLine);
        
        setLine(index);
        
        lineFunction(index);
        
        prepareNextLine(index + 1, delay);
    }
//    document.body.removeEventListener("touchstart", doNextLine);  document.body.addEventListener("touchstart", doNextLine);
    
    setTimeout(function(index) { document.addEventListener("click", doNextLine); }, delay);
}
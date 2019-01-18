var lines;

function load() {
    lines = document.querySelectorAll(".speech-bubble");

    
    prepareNextLine(0, 500);
}

function end() {
    window.close();
}

function prepareNextLine(index, delay) {
    function setLine(lineIndex) {
        if(lineIndex < lines.length) {
            var active = document.querySelector(".active");
            if(active != undefined) { active.classList.remove("active"); }

            lines[lineIndex].classList.add("active");
        }
        else end();
    }
    
    function doNextLine() {
        setLine(index);
        
        prepareNextLine(index + 1, delay);
    }
    
    document.removeEventListener("click", doNextLine);
    
    setTimeout(function(index) { addEventListener("click", doNextLine) }, delay);
}
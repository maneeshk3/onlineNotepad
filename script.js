let saveText, tick;
let saveTextData = "textData";
let plchldr = "Hello,\nThis is an online notePad.\n"+
"If the checkbox is checked, it will save text even after a refresh, if not it won't.";


function init(){
    tick = document.getElementById("checkBox");
    saveText = document.getElementById("textArea");
    document.getElementById("textArea").placeholder = plchldr;
    
    if(localStorage.getItem(saveTextData) != null){
        saveText.value = localStorage.getItem(saveTextData);
        tick.checked = true;
    }
    

    saveText.oninput = function(){
        if (tick.checked){
            const currentText = saveText.value;
            console.log("checked");
            localStorage.setItem(saveTextData, currentText);
                
            }
        }

    tick.onclick = function(){
        if(tick.checked){
            const currentText = saveText.value;
            localStorage.setItem(saveTextData, currentText);
        }
        if(tick.checked === false){
            localStorage.setItem(saveTextData,"");
            localStorage.removeItem(saveTextData);

        }
    }

};

window.onload =init;
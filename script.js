let saveText, tick;
let saveTextData = "textData";

function init(){
    tick = document.getElementById("checkBox");
    saveText = document.getElementById("textArea");

    const textData = localStorage.getItem(saveTextData);
    if(textData.length > 0){
        saveText.value = textData;
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
        }
    }

    


};

window.onload =init;
let string="";

let result=document.getElementById("screen");
buttons=document.querySelectorAll(".button")

Array.from(buttons).forEach((button)=>{button.addEventListener('click',(e)=> {
    buttontext=e.target.innerText;
    console.log('text on this button'+""+buttontext);

    if (buttontext== 'X') {buttontext= '*';
    string += buttontext;
    result.value=string ;  
    }

    else if (buttontext=='=') {string=eval(string);
        result.value=eval(string)  
    }
    
    else if (buttontext=='RESET') {string='';
    result.value=string;
     }
    
     else {string+=buttontext;
    result.value=string }
}

)})

function d() {string=string.slice(0,-1);
     result.value=string
    
}
var link = document.querySelector(".link-on");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".modal-close");
var inpName = popup.querySelector("#name-field");
var form = document.querySelector(".write-us");
var eMail = popup.querySelector("#e-mail-field");
var storage = localStorage.getItem("inpName");

var isLocalStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("inpName")
} catch (err) {
    isLocalStorageSupport = false;
}

link.addEventListener ("click", function (evt) {
    evt.preventDefault();    
    popup.classList.add("modal-show");    
    if (storage) {
        inpName.focus();
    } 
}); 

close.addEventListener ("click", function (evt) {
    evt.preventDefault();    
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
}); 

form.addEventListener("submit", function (evt) {
    if (!inpName.value || !eMail.value) {
        evt.preventDefault();
        console.log("hi");
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
       if (isLocalStorageSupport) {
          localStorage.setItem("inpName", inpName.value);
        }        
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});
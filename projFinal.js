
// makes the x appear?
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// for the x, closes the element
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// does the checkmark thing, also has to do with clicking on it
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    
    }
}, false);

// adding a new task
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {

    } else {
        document.getElementById("myUL"). appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// date
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

// TIMER

function myFunction() {
    alert("Start working!")
    document.body.style.background = "#d9ffca";

    setTimeout(() => {
        alert("Time to take a break!");
        document.body.style.background = "white";
    }, 1500000)
}

function myFunctionn() {
    alert("Short break!")
    document.body.style.background = "lightpink";

    setTimeout(() => {
        alert("Time to get back to work!");
        document.body.style.background = "white";
    }, 300000)
}

function myFunctionnn() {
    alert("Long break!")
    document.body.style.background = "lightblue";

    setTimeout(() => {
        alert("Time to get back to work!");
        document.body.style.background = "white";
    }, 1500000)
}
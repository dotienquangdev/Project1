//DOM events 

// 1. PreventDefault
// 2. StopPropagation

var aElements = document.links;

//console.log(aElements);
for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function (e) {
        //console.log(e.target.href);
        if (!e.target.href.startsWith('https://www.youtube.com')) {
            e.preventDefault();
        }
    }
}

// document.querySelector('ul').onclick =
//     function (e) {
//         console.log(e.target);
//     }
var ulElement = document.querySelector('ul');

ulElement.onmousedown = function (e) {
    e.preventDefault();
}

ulElement.onclick =
    function (e) {
        console.log(e.target);
    }
//
document.querySelector('div').onclick =
    function () {
        console.log('DIV')
    }
document.querySelector('button').onclick =
    function (e) {
        e.stopPropagation();
        console.log('Click me!');
    }


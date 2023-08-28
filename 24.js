//var boxElement = document.querySelector('.box');
//console.log('boxElement');

var boxElement =
    document.querySelector('.box');

// console.log(boxElement.style);

Object.assign(boxElement.style, {
    width: '100px',
    height: '200px',
    backgroundColor: 'green',
});

console.log(boxElement.style.backgroundColor);
//

var box =
    document.querySelector('.box1');

// add them thuoc tinh vao 
box.classList.add('red');

console.log(box.classList.contains('red'));

// remove de xoa thuoc tinh 
//box.classList.remove('red');
// đoạn code se làm gỡ thượco tính
setTimeout(() => {
    box.classList.remove('red')
}, 3000);
// bản nâng cấp của cái trên
setInterval(() => {
    box.classList.toggle('red')
}, 1000);

// 76
// DOM events
// 1. Attribute events
// 2. Assign event using the element node : chi dinh su kien bang nuts phan tu
//77
var inputElement =
    document.querySelector('input[type="text"]');

console.log(inputElement);
//
inputElement.onchange = function (e) {
    console.log(e);
}

inputElement.onchange = function (e) {
    console.log(e.target.value);
}
inputElement.oninput = function (e) {
    console.log(e.target.value);
}
var inputElement1 =
    document.querySelector('select');

inputElement1.onchange = function (e) {
    console.log(e.target.value);
}                                        
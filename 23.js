// 1. element 
// 2. attribute
// 3. text

// innerText , textContent 

var headingElement =
    document.querySelector('.heading');

console.log(headingElement.innerText);
console.log(headingElement.textContent);

headingElement.innerText = 'New heading';
//innertext tra lai nhung gi nhin thay

//
var headingElement1 =
    document.querySelector('.heading1');
console.log(headingElement1.textContent)
// tra lai nhyung gi o ben trong textnote

//ca hai innerText , textContent  deu bo qua cac ther span style ... nhung noi dung ben trong nos thi van du nguyen va in ra man hinh
// alert('hi');
var boxElement = document.querySelector('.box');
console.log(boxElement);


var headingElement2 = document.querySelector('h1');
console.log(headingElement2.href = 'heading');
headingElement2.setAttribute('class', 'hiiii');
headingElement2.setAttribute('id', 'hiiii');


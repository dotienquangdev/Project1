// 1. getElementByid trả về element 
// 2. getElementsByClassName
// 3. getElementsByTagName
// 4. querySelector  trả về element
// 5. querySelectorAll
// 6. HTML collection
// 7. document.write

var heading =
    document.querySelector('#heading');
console.log(heading);
// đây là element khí chạy ra 

var headings =
    document.getElementsByTagName('h1');
console.log(headings);
//

var headings =
    document.getElementsByTagName('h2');
console.log(headings[0]);
console.log(headings[1]);
//

var headings =
    document.querySelectorAll('.heading');

for (var i = 0; i < headings.length; i++) {
    console.log(headings[i]);
};
//

console.log(document.forms['form-1']);

// lesson sixty-night  Attribute node & Text node 
// attribute la cac class id title khí dum ra web và klieerm tra


// lesson seventy-0 Dom attribute
var headingElement =
    document.querySelector('h2');
// console.log(headingElements);

headingElement.title = 'HEADING';

headingElement.setAttribute('data', 'heading');
console.log(headingElement.getAttribute('class'));
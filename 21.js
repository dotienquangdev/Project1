// đệ quy 
// 1 . ãc định điểm dừng
// 2 . Logic handle => tạo ra 1 điểm dừ
function countDown(num) {
    if (num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}
countDown(5);
//
function loop(start, end, cb) {
    if (start < end) {
        cb(start);
        return loop(start + 1, end, cb);
    }
}
var array = ['JavaScript', 'PHP', 'Ruby'];
loop(0, array.length, function (index) {
    console.log('index: ', index);
    console.log(array[index]);
});

// for 
function giaithua(number) {
    var output = 1;
    for (var i = number; i > 0; i--) {
        output = output * i;
    }
    return output;
}
console.log(giaithua(3));
console.log(giaithua(4));
console.log(giaithua(5));
// de quy 
function giaiThua(number1) {
    if (number1 > 0) {
        return number1 * giaiThua(number1 - 1);
    }
    return 1;
}
console.log(giaiThua(3));
console.log(giaiThua(4));
console.log(giaiThua(5));

//62 DOM (Document Object Model)
// 1.Element
// 2.Attribute
// 3.Text
// var headingNode = document.getElementById('heading');
// console.log(headingNode);
var headingNode = document.getElementById('heading');
console.log({
    Element: headingNode
});
//
var headingNode = document.querySelector('heading-2');
console.log(headingNode);
var headingNode = document.querySelectorAll('.box .heading-2');
console.log(headingNode);
// 63

var boxNode =
    document.querySelector('.box-1 li');
// cong viec 1 : su dung toi boxNode
console.log(boxNode);
// cong viec 2 : su dung toi li elemeny=t
// la con cua box-1

console.log(boxNode.getElementsByTagName('li'));
console.log(boxNode.getElementsByTagName('p'));

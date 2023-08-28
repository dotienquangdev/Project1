// Chuỗi 
// có 2 cách tạo chuỗi
//cách 1
var fullName = 'đỗ tiến quang';
//cách 2
var fullname = new String('đỗ quang');

console.log(fullName);
// chú ý 1 dòng ký tự sẽ dưới 80 ký tự là tiêu chuẩn
console.log('toi la: ${fullName} ${fullname}');


//Lam viec với chuỗi
var myString = 'đỗ tiến quang 2003 quang';
//length do dai cua chuoi
console.log(myString.length);
//index0f vi tri cua kys tu dau tim can tim
console.log(myString.indexOf('quang'));
console.log(myString.lastIndexOf('quang'));
var hiString = '  Quang, oke, ko, ban  ';
//slice cat ky tu tu trai sang phai
console.log(hiString.slice(6, 9));
//trim loai bo khoang trang 2 dau
console.log(hiString.slice(6, 9));
console.log(hiString.split(','));
console.log(hiString.split(''));

var language = [
    'Javascript',
    'C++',
    'Java'
];
//pop xóa đi phần tử cuối mảng và trả về phần tử còn lại
console.log(language.pop());
console.log(language);

//push thêm 1 phần tử vào cuối mảng trả lại độ dài cho mảng
console.log(language.push('Ruby', 'Photoshop'));
console.log(language);

//xóa đi 1 phần tử ở đầu mảng và trả về mảng đã xóa
console.log(language.shift())
console.log(language);

//unshift thêm 1 phần tử vào đầu mảng và trar lại độ dài mới của mảng
console.log(language.unshift('Dart'));
console.log(language);

//splice xóa phần tử có điểm chọn từ đâu đến đâu
console.log(language.splice(1, 2));// 0 nếu ko xáo cái nào
console.log(language);


//concat hợp nhất các mảng
var language1 = [
    'dev',
    'visuad',
    'codeblock'
]
console.log(language.concat(language1));
console.log(language);

//slicing cắt 1 vài inomen của mảng hoặc tất cả
console.log(language.slice(1, 2));
console.log(language);

// hàm
/**
 * 1 hàm
 * -hàm là 1 khối mã
 * - làm 1 việc cụ thể
 * 
 * có 2 loại hàm
 * +Built-in
 * +Hàm tự định nghĩa
 * 
 * tính chất
 * -Không thực thi khi định nghĩa
 * -sẽ thực thi khi được gọi
 * -có thể nhầnj tham số
 * -có thể trả về 1 giá trị
 * Tạo hàm
 * + bắt đầu bằng chữ cái từ a-z hoặc A-Z _ $ ,không
 * bắt đầu bằng số
 */
function showDialog() {
    //code
    alert('Hello friends!');
}
// call () tóan tử gọi hàm
showDialog();
/* 
Tham số
-là 1 giá trị có thể truyền vào khi gọi đến 1 function

*/
function writeLog(message) {
    console.log(message);
}
writeLog('Test message');
function writeLog(message, message2) {
    console.log(message);
    console.log(message2);
}
writeLog('Test message');

// 27 return  trong hàm
function cong(a, b) {
    return a + b;
}
var result = cong(1, 7);
console.log(result);


// Hiểu hơn về function
/* 

*/
function showMessage() {
    console.log('massage1');
}
function showMessage() {
    console.log('massage2');
}
function showMessage() {
    console.log('massage3');
}
showMessage();
//bị ghi đè
function showMessage() {
    var fullName27 = 'Do Quang';
}
showMessage();


function showMessage() {
    function showMessage2() {
        console.log('hi 2');
    }
    showMessage2();
}

// các loại function
//+ Declaration fumction
function showMessage27a() {

}
var showMessage27b = function () {

}

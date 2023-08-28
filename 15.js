/**
 * If else
 * 0
 * false
 * "chuoi rong"
 * undefined
 * NaN
 * null
 */

var fullName = 'tuoi j awn anh';
if (fullName) {
    console.log('dieu kien dung');
} else {
    console.log('dieu kien sai');
}
/**
 * Toasn tu logic
 * && and
 * || or
 * ! not
 */
//&& or
var a = 1;
var b = 2;
var c = 3;
if (a > 0 && b > 0) {
    console.log('dieu kien dung');
}
// ||
if (a < 0 || b < 0 || c > 0) {
    console.log('dieu kien dung');
}
// ! not
if (!(a < 0)) {
    console.log('dieu kien dung');
}
/**
 * kieu du lieu trong javaScrip
 * 1 du lieu nguyen thuy - primitive data
 * + Number
 * + String
 * + Boolem
 * + Undefined
 * + Null
 * + Symbol
 * 
 * 2 du lieu phucs tap - comlex data
 * - Function
 * - Ocject
 */
// number
var e = 4;
var d = 1.5;

// String
var Name = 'do \'tien quang';
var Names = 'do "quang';

console.log(Name);
console.log(Names);
// bollem type
// var isSuccess = true;
// var isSuccessl = false;

// undefined type
var age;
// console.groupCollapsed(age);

// null
var isNukk = null; //nothing
// console.log(isNull);

// symbol
var id = Symbol('id'); //unique:duy nhat
var id2 = Symbol('id'); //unique:duy nhat
// console.log(id);

// function
var myFunction = function () {
    alert('Xin chao cac ban');
}
myFunction();

// object type
var myObject = {
    name: 'do quang',
    age: 20,
    adress: 'phu tho',
    myFunction: function () {

    }
};
console.log(myObject);


var courses = [
    {
        id: 1,
        name: 'Khoa hoc',
        coin: 12,
    },
    {
        id: 2,
        name: 'Khoa hoc 2',
        coin: 2,
    },
    {
        id: 3,
        name: 'Khoa hoc 3',
        coin: 0,
    },
    {
        id: 4,
        name: 'Khoa hoc 4',
        coin: 200,
    }
];
var i = 0;
var totalCoin = courses.reduce(function (total, course) {
    i++;
    console.log(i, total, course);
    return total + course.coin;
});
//
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (flat0utput, depthItem) {
    return flat0utput.concat(depthItem);
}, []);
console.log(flatArray);
// fifty-three String /Array includes method
var title = 'Responsive web design';
console.log(title.includes('web'));
console.log(title.includes('Responsive', 2));

//
var title = ['Responsive', ' web ', 'design'];
console.log(title.includes('web'), 5);
// fifty-four: Math object
console.log(Math.PI);
// lam tron so
console.log(Math.round(4.3));
console.log(Math.round(4.6));
//Math.abs gia trij tuyet doi
console.log(Math.abs(-4.6));
//lam tron tren
console.log(Math.ceil(6.00001));
// lam tron duoi
console.log(Math.floor(6.999999));
// so ngau nhien nho hon 1
console.log(Math.random());
console.log(Math.floor(Math.random() * 5));
//


var random = Math.floor(Math.random() * 5);
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];
console.log(bonus[random]);

//
var random1 = Math.floor(Math.random() * 100);

if (random1 < 50) {
    console.log('Cuong hoa than cong');
} else {
    console.log('Cuong hoa that bai');
}
//
console.log(Math.min(-100, 1, 90, 50, 30, 99, 0));
console.log(Math.max(-100, 1, 90, 50, 30, 99, 0));


//fifty-five callvack
// la 1 funcition duoc truyen qua doi so

function myFuncition(param) {
    console.log(typeof param);
}
function myCallBack() {

}
myFuncition(myCallBack);
//
function myFuncition(param) {
}
function myCallBack(value) {
    console.log('Value: ', value);
}

myCallBack(123);
//
Array.prototype.map2 = function () {
    // console.log(this);
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++) {
        myCallBack(this[i], i);
    }
}
var courses = [
    'javascript',
    'php',
    'ruby'
];
courses.map2();
courses.map(function (course, index) {
    console.log(index, course);
});
// forEach ,find,filter,some,every,reduce
var courses = [
    'JavaScript',
    'PHP'
];
console.length = 10;
console.log(courses);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
} for (var index in courses) {
    console.log(index);
}




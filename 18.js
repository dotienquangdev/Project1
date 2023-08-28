// 39 for int i=0 ; i<n ;i++
for (var i = 0; i <= 20; i++) {
    console.log(i);
}
//
for (var i = 0; i <= 20; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}
//
var myArray = [
    'javaScript',
    'HTML',
    'CSS',
    'PhotoShop',
    'C++',
    'Java'
];
var arrayLength = myArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}
//
var myInfo = {
    name: 'Quang pc',
    age: 20,
    address: 'Cam Khe , Phu Tho'
};

for (var key in myInfo) {
    console.log(key);
}
//
var laguages = [
    'hi',
    'hello',
    'xin chao',
    'chao',

];
for (var key in laguages) {
    console.log(key);
};
//
for (var key in laguages) {
    console.log(laguages[key]);
};
//
var laguagess = 'hello';
console.log(laguagess[2])
//
var laguagess = 'hello';
console.log(laguagess[key])
//
var hi = 'JavaScript';
for (var value of hi) {
    console.log(value);
}
//
var xinchao = {
    name: 'quang',
    age: 12
};
for (var value of Object.keys(xinchao)) {
    console.log(value);
}
//
var xinchao1 = {
    name: 'quang',
    age: 12
};
for (var value of Object.values(xinchao1)) {
    console.log(value);
}
// 44 do while
var i = 0;
do {
    i++;
    console.log(i);
} while (i < 10);

//

var i = 0;
var isSuccess = false;
do {
    i++;
    console.log(i);
    if (true) {
        isSuccess = true;
    }
} while (!isSuccess && i <= 5);
//
// leessson 45 Break and Contuinue in for while do/while
for (var i = 0; i < 10; i++) {
    if (i % 2 == 1) {
        continue;
    }
    console.log(i);
}
// 48
var myArray1 = [
    [1, 2],
    [3, 4],
    [6, 7]
];
for (var i = 0; i < myArray1.length; i++) {
    for (var j = 0; j < myArray1.length; j++) {
        console.log(myArray1[i][j]);
    }
}
// 
for (var i = 100; i > 0; i--) {
    console.log(i);
}
for (var i = 0; i <= 100; i += 5) {
    console.log(i);
}
// 49 làm việc vóiư mảng
var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 250
    },
    {
        id: 2,
        name: 'Java',
        coin: 0
    },
    {
        id: 3,
        name: 'Photoshop',
        coin: 400
    },
    {
        id: 4,
        name: 'C++',
        coin: 0
    },
    {
        id: 5,
        name: 'Androi',
        coin: 500
    },
];

//callBack
var isFree = courses.forEach(function (course, index) {
    return course.coin === 0;
});
console.log(isFree);
//
courses.forEach(function (course, index) {
    console.log(index, courses);
}
);
//
var isFree = courses.some(function (course, index) {
    return course.coin === 0;
});
console.log(isFree);
//
var course = courses.find(function (course, index) {
    return course.name === 'C++';
});
console.log(course);

// 50 map
var couser = [
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
function coueseHandler(couser) {
    console.log(couser);
};
var newCouses = couser.map(coueseHandler);
console.log(newCouses);
//
function coueseHandler(couser) {
    return {
        id: couser.id,
        name: `Khoa hoc:${course.name}`,
        coin: courses.coin,
        coinText: `Gia:${course.coin}`,
        index: index,
        originArray: couser,
    };
};
var newCourses = couser.map(coueseHandler);
console.log(newCourses);
//
function coueseHandler(couser) {
    return couser.name;
};
var newCouses = couser.map(coueseHandler);
console.log(newCouses);
//
var i = 0;
function coinHandler(accumulator, currentValue, currenIndex) {
    i++;
    var total = accumulator + currentValue.coin;
    console.table(
        {
            'luot chsy': i,
            'bien luu tru': accumulator,
            'gia khoa hoc': currentValue.coin,
            'tong=': total,
        }
    );
    return total;
}
var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin);

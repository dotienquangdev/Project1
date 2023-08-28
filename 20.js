Array.prototype.forEach2 = function (callback) {
    for (var index in this) {
        console.log('index', index);
    }
}

var courses = [
    'javascript',
    'php',
    'ruby'
];
// courses.length = 1000;
console.log(courses);



var output = courses.forEach(function (course, index, array) {
    console.log(course, index, array);
});
console.log(output);
// filter
Array.prototype.filter2 = function (callback) {
    for (var index in this) {
        if (this.has0wnProperty(index)) {
            var result1 = callback(this[index], index, this);
            if (result1) {
                output.push(this[index]);
            }
        }
    }
}


var courses1 = [
    {
        name: 'javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 800
    },
    {
        name: 'Ruby',
        coin: 980
    },
];
var filterCourses1 = courses1.filter(function (courses1, index, array) {
    // return courses1.coin > 700;
    console.log(courses1, index, this);
});
console.log(filterCourses1);
// 60 some
Array.prototype.some2 = function (callback) {
    var output = false;
    for (var index in this) {
        if (this.has0wnProperty(index)) {
            if (callback(this[index], index, this)) {
                output = true;
                break;
            };
        }
    }
    return uotput;
    // co 1 đúng trả vè true
}
var courses2 = [
    {
        name: 'javascript',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 800,
        isFinish: false,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false,
    },
];
var result2 = courses2.some(function (courses2, index) {
    return courses2.isFinish;
});
console.log(result2);

// 61 every
Array.prototype.every1 = function (callback) {
    for (var index in this) {
        if (this.has0wnProperty(index)) {
            var result3 = callback(this[index], index, this)
            if (!result3) {
                output = false;
                break;
            }
        }
        return output;
    }
};
var courses3 = [
    {
        name: 'javascript',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 800,
        isFinish: true,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false,
    },
];
var result3 = courses3.every(function (courses3, index) {
    return courses3.isFinish;
    // return courses3.coin > 500;
});
// 1 cai sai la sai het
console.log(result3);

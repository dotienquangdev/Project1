// bài 30 Polyfill

if (!String.prototype.include) {
    String.prototype.include = function (search, start) {
        'use strict';
        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExo');
        }
        if (start === undefined) { start = 0; }
        return this.indexOf(search, start) !== -1;
    };
}
'Javascript course'.includes('Javascript', 0);

// lesson thirty-one 
//Object
var myInfo = {
    name: 'do quang',
    age: 20,
    address: 'Ha noi',
    emailkey: 'dotienquangfulltack.edu.vn',
    getName: function () {
        return this.name;
    }
};
console.log(myInfo);
//
var mykey = 'address';
console.log(myInfo);
//xoa
delete myInfo.name;
console.log(myInfo);

//Function phuong thuc //method
//Others thuoc tinh //property
//
console.log(myInfo.getName);

//lesson thirty-two Object constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}
var author = new User('Do', 'Quang', 'PC');
var user = new User('Hi', 'avatar');

console.log(author);
console.log(user);
console.log(author.constructor == User);
//
author.title = 'Chia se cho thay di!';
user.comment = 'Cac chu tuoi gi an anh?';
console.log(author);
console.log(user);
//
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
        return '${ this.firstName } ${ this.lastName }'
    }
}

console.log(author.getName());
console.log(user.getName());


// lesson thirty-three Object prototype

function User(birdName, catName, cowName) {
    this.birdName = birdName;
    this.catName = catName;
    this.cowName = cowName;
    this.getName = function () {
        return '${this.birfName} ${this.catName}';
    }
}

User.prototype.className = 'QuangPC';
User.prototype.getClassName = function () {
    return this.className;
}

var user1 = new User('Do1', 'Tien1', 'Quang1');
var user2 = new User('Do2', 'Tien2', 'Quang2');

console.log(user1);
console.log(user2);
console.log(user.className);

//lesson thirty-four Doi tuong Date
var date = new Date();
console.log(date);
console.log(typeof date);
//
var date = Date();
console.log(date);
console.log(typeof date);
//
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(`${day}/${month}/${year}`)
console.log(`${day}`);
// lesson thirty-five if else 
var quang = -2;
if (quang === 2) {
    console.log('Today is Monthday')
} else if (quang === 3) {
    console.log('Today is TuesDay')
} else if (quang === 4) {
    console.log('Today is WednesDay')
} else if (quang === 5) {
    console.log('Today is ThursDay')
} else if (quang === 6) {
    console.log('Today is FrisDay')
} else if (quang === 7) {
    console.log('Today is SaturDay')
} else if (quang === 8) {
    console.log('Today is SunDay')
} else {
    console.log('Syntar Enror')
};

//lesson thỉty-six lệnh rẽ nhánh Switch
var tien = 3;
switch (tien) {
    case 2:
        console.log('Today is Monthday')
        break;
    case 3:
        console.log('Today is TuesDay')
        break;
    case 4:
        console.log('Today is WednesDay')
        break;
    case 5:
        console.log('Today is ThursDay')
        break;
    case 6:
        console.log('Today is FirsDay')
        break;
    case 7:
        console.log('Today is SaturDay')
        break;
    case 8:
        console.log('Today is SunDay')
        break;
    case 9:
        console.log('Today is ')
        break;
}

// thirty-seven toasn tuwr ba ngoio
var couse = {
    name: 'JavarScript',
    coin: 1000
}
var result = couse.coin > 0 ? `${couse.coin} Coins` : `Free`;
console.log(result);

// 39 for in i=0 i<n i++
for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        console.log(i);

    }
}

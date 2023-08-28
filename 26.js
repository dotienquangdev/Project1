// 1. Event listener
// 2. JSON
// 3. Fetch
// 4. DOM location 
// 5. Local storage

var btn = document.getElementById('btn');
//console.log(btn);
// btn.onclick = function () {
//     // viec 1
//     console.log('viec 1');
//     // viec 2
//     console.log('viec 3');
//     // viec 3
//     console.log('viec 3');

//     alert('viec 4');
// }
//
// setTimeout(function () {
//     btn.onclick = function () {
//         // viec 1
//         console.log('viec 1');
//         // viec 2
//         console.log('viec 3');
//         // viec 3
//         console.log('viec 3');

//         alert('viec 4');
//     }
//     // setTimeou(function () {
//     //     btn.onclick = function () { }
//     // })
// }, 3000);

// btn.addEventListener('click', function (e) {
//     console.log(Math.random());
// });
btn.addEventListener('click', function (e) {
    console.log('Even 1');
});
btn.addEventListener('click', function (e) {
    console.log('Even 2');
});
btn.addEventListener('click', function (e) {
    console.log('Even 3');
});
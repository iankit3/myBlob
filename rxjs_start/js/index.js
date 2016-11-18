var Rx = require('rxjs/Rx');
var btn = document.getElementById('btn');

// var CLICKS = new Rx.Observable.fromEvent(domBtn,'click');
// var get  = new Rx.Observable.fromPromise(fetch('https://api.github.com/users/iankit3'));
// var merged = Rx.Observable.merge(get,CLICKS);

// merged.subscribe( x => console.log(x) );

// function fetch(url) {
//     return new Promise(function (resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.onload = function () {
//             if (xhr.status == 200) resolve(xhr.response);
//             else reject(Error(res.statusText));
//         }
//         xhr.send();
//     })
// }

/***--- USE OF SCAN---****/
// # works as Array.prototypr.reduce
// * Here we created a variable called count and intialized it with 0 

// Rx.Observable.fromEvent(btn,'click')
//   .scan(count => count+1 , 10)
//   .subscribe(count => console.log(count));
  
/***--- USE OF throttle---****/
// # click will work only once a second

// Rx.Observable.fromEvent(btn,'click')
//   .throttle(1000)
//   .scan(count => count+1 , 10)
//   .subscribe(count => console.log(count));

Rx.Observable.fromEvent(btn, 'click')
  //.throttle(1000)
  .map( event => event.clientX )
  .scan( (count,clientX) => count + clientX, 0)
  .subscribe(count => console.log(count));  


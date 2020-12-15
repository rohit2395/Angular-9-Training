//callbacks
// function asyncWithCallbacks(callback1, callback2) {
//     setTimeout(function () {
//         callback1("callback 1");
//     }, 2000);
//     setTimeout(function () {
//         callback2("callback 2");
//     }, 4000);
// }

// asyncWithCallbacks(function (data) {
//     console.log("1", data);
// },
// function (data) {
//     console.log("2", data);
// }
// );

//promise
function asyncWithPromise() {
    return new Promise(function (resolve,reject) {
      setTimeout(function () {
        resolve("promise resolved");
      }, 2000);
      setTimeout(function () {
        reject("promise rejected");
      }, 4000);
    });
  }
  
asyncWithPromise()
    .then(function (data) {
        console.log("ASYNC",data);
    })
    .catch(function (data) {
        console.log("ASYNC ERROR",data);
    });

// async & await
async function testAsync() {
    try {
        const data = await asyncWithPromise(); // promise
        console.log("ASYNC", data);
    } catch (e) {
        console.log("ASYNC ERROR", e);
    }
}

testAsync();
  
  
  
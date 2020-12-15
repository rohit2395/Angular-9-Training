for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log("TASK", i);
    }, i * 1000);
}
const a = 10;
const b = {name:'test', age:12};
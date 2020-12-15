//array functions

//loops : for of, for in
const a = ['a', 'v', 'd'];
//for of (for each loop)
for (let v of a) {
    console.log(v);
}


//for in (iterated over keys)
for (let k in a) {
    console.log(a[k]);
}

const no = [1, 2, 3, 4, 5, 6]
console.log(no);
//map
const squares = no.map(function (val, index, no) {
    if (val % 2 === 0)
        return val * val;
});
console.log(squares);

//filter function
const evenNo = squares.filter(function (val) {
    return val != undefined;
});
console.log(evenNo);

//combined
console.log(no.map(function (val) {
    if (val % 2 === 0)
        return val * val;
}).filter(function (val) {
    return val != undefined;
}));
//OR
console.log(no.filter((val) => val % 2 === 0).map((val) => val * val));
//Lev1_1//

let intro = () =>
    console.log(`Hello World`);

intro()

//Lev1_2_a//

function ten() {
    console.log(`Hallo`);
}
ten()
    //

function calc1(x, y) {
    console.log(x + y);
}
calc1(2, 3)
    //

function calc2(x, y) {
    console.log(x * y);
}
calc2(2, 3)
    //

function type(info) {
    console.log(typeof(info));
}

let i = true;
let j = `hi`;
let k = (2 - 1);
let l = { name: `John` };
let a = [0, 1];

type(i);
type(j);
type(k);
type(l);
type(a);
//

calc3 = () => {
    let x = 2;
    let y = 3;

    console.log(x + y);
}

calc3();
//

calc4 = () => {
    let x = 2;
    let y = 3;

    console.log(x * y);
}

calc4();
//

type = (info) => {
    console.log(typeof(info));
}

type(i);
type(j);
type(k);
type(l);
type(a);
// Destructuring

function foo() {
    return [1,2,3];
}

function bar() {
    return {
        x:4,
        y:5,
        z:6
    }
}

var [a,b,c] = foo();
var {x,y,z} = bar();

console.log(a,b,c);
console.log(x,y,z);

// Remember: In destructuring assignments are source --> target

var {x: target_x, y: target_y, z:target_z} = bar();

console.log(target_x,target_y,target_z);

// Not just declaration

[a,b,c] = foo();
( {x,y,z} = bar() );

console.log(a,b,c);
console.log(x,y,z);

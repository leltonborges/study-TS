const numbers = [ 1, 4, 6, -4, 16, 4, 3, -42 ];
console.log(Math.max(...numbers)); // spread
console.log(Math.min(...numbers)); // spread

const turmaA1: string[] = [ 'João', 'Maria', 'Fernada' ];
const turmaB2: string[] = [ 'Lia', 'Bob', ...turmaA1 ];

console.log(turmaA1);
console.log(turmaB2);

function retonarArray1(arg1: number, arg2: number): number[] {
    return [ arg1, arg2 ];
}

function retonarArray2(...args: number[]): number[] { //rest
    return args;
}

const nums1 = retonarArray1(1, 3);
console.log(nums1);

const nums2 = retonarArray2(1, 3, -4, -51, 43, -1, 54, 6, 7, 2);
console.log(nums2);

const tupla: [ number, string, boolean ] = [ 2, 'abac', false ];

// Spread and Rest with Tupla

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${ a } ${ b } ${ c }`);
}
tuplaParam1(...tupla);

function tuplaParam2(...param: [ number, string, boolean ]): void {
    console.log(`2) ${ param[ 0 ] } ${ param[ 1 ] } ${ param[ 2 ] }`);

    console.log("isArray", Array.isArray(param));
}

tuplaParam2(...tupla);


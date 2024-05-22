/*
    자바의 경우 정수와 실수를 구분해 int, long, float, double 등과 같은 다양한 숫자 타입을 제공한다.
    하지만 자바스크립트의 경우 하나의 숫자 타입만 존재하고 모든 수를 실수로 처리한다.
*/

Number();
var integer = 10;
var double = 5.5;
var negative = -10;
var int = 10;
integer = "10"; // int에서 string으로 자료형이 변함.

console.log(10 === 10.0); // == 값만 같은지 비교 / === 값과 자료형이 같은지 비교
// 10 , 10.0 모두 자료형이 Number라 같음.

console.log();
console.log(Number("10") * "10"); // 문자열을 숫자로 형변환함. 뒤에 문자열이 숫자로 형변환 할 수 있다면 자동으로 바꿔줌. 나중에 NaN이 발생할 수 있으니 주의해야함.
console.log(10 / 4);

/*
    Infinity : 양의 무한대
    -Infinity : 음의 무한대
    NaN : 산술 연산 불가
*/

console.log(10 / 0);          // Infinity
console.log(10 / -10);        // -Infinity
console.log(1 * '문자열');    // NaN

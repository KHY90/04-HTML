/* 03_convert-to-boolean (불리언 타입으로 변환) */
console.log('===== 논리 타입으로 변환 ======');

// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가 되는 값) 
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.
if(true) console.log("if(true)");       
if(false) console.log("if(false)");         // falsy 라 나오지 않음
if(undefined) console.log("if(undefined)"); // falsy 라 나오지 않음
if(null) console.log("if(null)");           // falsy 라 나오지 않음
if(0) console.log("if(0)");                 // falsy 라 나오지 않음
if(NaN) console.log("if(NaN)");             // falsy 라 나오지 않음
if('') console.log("if('')");               // falsy 라 나오지 않음
if('JavaScript') console.log("if('JavaScript')");

var test;
console.log(!!test); // test는 undefined라 '!!' 붙여서 boolean으로 만들 수 있다.

// false, undefined, null, 0, NaN, ''(빈 문자열)은 Falsy 값이며
// 이 외의 모든 값은 Truthy 값이다.
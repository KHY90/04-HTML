var name = "이상우";

name = 10;
if("string" == (typeof name) ){
    console.log("문자열로 값을 넣어줌 : " + name);
}else if("number" == (typeof name)){
    console.log(`변수는 name이지만 값은 number야~ ${name}`)
}
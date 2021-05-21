const changebutton = document.getElementById("change");
const score = document.getElementById("score");
const num = document.getElementById("num");
const out1 = document.getElementById("out1");
const out2 = document.getElementById("out2");
const out3 = document.getElementById("out3");

function division(n1, n2){
    /*
        n1 = n2 * quot + rem
    */
    
    let quot, rem;
    rem = n1 % n2;
    quot = (n1 - rem) / n2;

    return {rem: rem, quot: quot};
}

changebutton.onclick = () => {
    let num1, num2, num3;
    let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

    num1 = division(score.value, num.value);
    num2 = division(num1.quot, num.value-1);
    num3 = division(num2.quot, num.value-2);

    console.log(score.value, num.value, num1, num2, num3);

    out1.innerHTML = number[num1.rem];
    number.splice(num1.rem, 1);
    out2.innerHTML = number[num2.rem];
    number.splice(num2.rem, 1);
    out3.innerHTML = number[num3.rem];

    if(score.value < 0 || score.value.includes(".")) {
        alert("スコアは0以上の整数を入力してください");
        out1.innerHTML = out2.innerHTML = out3.innerHTML = "";
    }

    if(num.value < 1 || num.value > 18 || num.value.includes(".")){
        alert("頭数は18以下の正の整数を入力してください");
        out1.innerHTML = out2.innerHTML = out3.innerHTML = "";
    }
}
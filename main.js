const changebutton = document.getElementById("change");
const score = document.getElementById("score");
const num = document.getElementById("num");
const out1 = document.getElementById("out1");
const out2 = document.getElementById("out2");
const out3 = document.getElementById("out3");
const output = document.getElementById("output");

function division(n1, n2){
    /*
        n1 = n2 * quot + rem
    */
    
    let quot, rem;
    rem = n1 % n2;
    quot = (n1 - rem) / n2;

    return {rem,quot};
}

function compare(a,b){
    return a - b;
}

changebutton.onclick = () => {
    let num1, num2, num3;
    output.innerHTML = ""

    num1 = division(score.value, num.value);
    num2 = division(num1.quot, num.value);
    num3 = division(num2.quot, num.value);

    console.log(score.value, num.value, num1, num2, num3);

    out1.innerHTML = num1.rem + 1;
    out2.innerHTML = num2.rem + 1;
    out3.innerHTML = num3.rem + 1;

    if(num1.rem === num2.rem && num2.rem === num3.rem) {
        output.innerHTML = `<tr><td>単勝</td><td>${num1.rem+1}</td></tr>\
        <tr><td>複勝</td><td>${num1.rem+1}</td></tr>`;
    }

    else if(num1.rem === num2.rem) {
        const n = [num1.rem, num3.rem];
        n.sort(compare);
        output.innerHTML = `<tr><td>馬単</td><td>${num1.rem+1} > </td><td>${num3.rem+1}</td></tr>\
        <tr><td>馬連</td><td>${n[0]+1}</td><td>${n[1]+1}</td></tr>\
        <tr><td>ワイド</td><td>${n[0]+1}</td><td>${n[1]+1}</td></tr>`;
    }

    else if(num1.rem === num3.rem) {
        const n = [num1.rem, num2.rem];
        n.sort(compare);
        output.innerHTML = `<tr><td>馬単</td><td>${num1.rem+1} > </td><td>${num2.rem+1}</td></tr>\
        <tr><td>馬連</td><td>${n[0]+1}</td><td>${n[1]+1}</td></tr>\
        <tr><td>ワイド</td><td>${n[0]+1}</td><td>${n[1]+1}</td></tr>`;
    }

    else if(num3.rem === num2.rem) {
        const n = [num1.rem, num2.rem];
        n.sort(compare);
        output.innerHTML = `<tr><td>馬単</td><td>${num3.rem+1} > </td><td>${num1.rem+1}</td></tr>\
        <tr><td>馬連</td><td>${n[0]+1}</td><td>${n[1]+1}</td></tr>\
        <tr><td>ワイド</td><td>${n[0]+1}</td><td>${n[1]+1}</td></tr>`;
    }

    else {const n = [num1.rem, num2.rem, num3.rem];
        n.sort(compare);
        output.innerHTML = `<tr><td>3連単</td><td>${num1.rem+1} > </td><td>${num2.rem+1} > </td><td>${num3.rem+1}</td></tr>\
        <tr><td>3連複</td><td>${n[0]+1}</td><td>${n[1]+1}</td><td>${n[2]+1}</td></tr>`;
    }



    if(score.value < 0 || score.value.includes(".")) {
        alert("スコアは0以上の整数を入力してください");
        out1.innerHTML = out2.innerHTML = out3.innerHTML = "";
    }

    if(num.value < 1 || num.value > 18 || num.value.includes(".")){
        alert("頭数は18以下の正の整数を入力してください");
        out1.innerHTML = out2.innerHTML = out3.innerHTML = "";
    }
}

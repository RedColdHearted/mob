//1
let num = 10;

if (num <0){
    console.log("число отрицательное");
} else{
    console.log("число не отрицательное");
}

//2,3
let strka = 'asdzxc';

console.log(strka.length);
console.log(strka[strka.length - 1]);

//4
let num2 = 9;

if (num2 % 2 == 0){
    console.log('число четное');
} else{
    console.log("число не четное");
}

//5
let word1 ='apple';
let word2 ='apple';

if (word1[0] == word2[0]){
    console.log('первые буквы слов равны');
} else{
    console.log('первые буквы слов не равны'); 
} 

//6
let num3 = 123456789;
let strnum1st = Number(num3.toString()[0]);
let num3last = num3 % 10;

console.log('сумма первого и последнего числа - ' + (strnum1st + num3last));

//7
let count = 0;
let sum = 0;
for (count; count < num3.toString().length  ; count++){
    sum = sum + Number(num3.toString()[count]);
}

console.log('сумма цифр в числе ' + sum);
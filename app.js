
// var list =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// for(var i=0; i<list.length; i++){
//     // document.write(list[i])
//     if(list[i]%3===0 && list[i]%5 ===0){
//         list[i] = "ThreeFive";
//     }else if(
//         list[i]%3===0){
//             list[i] ="Three"
//     }else if(
//         ist[i]%5 ===0){
//             list[i] ="Five"
//         }else(
//         document.write(list[i])   )
// }

var integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (var i = 0; i < integers.length; i++) {
    var list = integers[i];
    
    if (list % 3 === 0 && list % 5 === 0) {
        integers[i] = "ThreeFive";
    } else if (list % 3 === 0) {
        integers[i] = "Three";
    } else if (list % 5 === 0) {
        integers[i] = "Five";
    }
    
    // Print only modified elements
    // if (integers[i] !== originalInteger) {
        document.write(integers[i]," ");
    // }
}

document.write("<br>","<br>")

let a ="Ek list of integers lein aur sirf odd numbers ko filter karke ek nayi list generate karein."
document.write(a)
document.write("<br>")

var list1 =[1,2,3,4,5,6,7,8,9,10]
for(var j=0; j<list1.length; j+=2 ){
    document.write(list1[j])
}

document.write("<br>","<br>")

let b ="Ek list of integers lein aur sirf even numbers ko filter karke ek nayi list generate karein."
document.write(b)
document.write("<br>")

var list2 =[1,2,3,4,5,6,7,8,9,10]
for(var k=1; k<list1.length; k+=2 ){
    document.write(list1[k])
}

document.write("<br>","<br>")

let c="Ek string input lein aur uska reverse print karein."
document.write(c)
document.write("<br>")
var list3 =[1,2,3,4,5,6,7,8,9,10]
for(var l=10; l>=1; l--){
    document.write(list3[l])
}
document.write("<br>","<br>")
let d="for string (abdullahsani)"

document.write(d)
document.write("<br>")

var input ="abdullahsani"
for(var m=input.length-1; m>=0;m--){
    document.write(input[m])
}
document.write("<br>","<br>")

let e="Ek integer input lein aur check karein ke woh prime hai ya nahi."
document.write("<br>")
document.write(e)
var primeNum=[2,4,6,8,10,12,14,16,18,20]
for(var n=0; n<primeNum.length; n++){
    if(primeNum[n]%2===0){
        console.log("yes");
    }
}
// not slove

document.write("<br>","<br>")

let f="Ek list of integers lein aur uss list ka maximum element find karein."
document.write("<br>")

// var num4 =[1,5,8,10,2,15,17,22,2,7]

// document.write= Math.max(num4)

var num4 = [1, 5, 8, 10, 2, 15, 17, 22, 2, 7];
var maxNumber = Math.max(...num4);

document.write("The maximum number is: " + maxNumber);

document.write("<br>","<br>")

let g="Ek string input lein aur check karein ke woh palindrome hai ya nahi."

// not solve

document.write("<br>","<br>")

let h= "Ek integer input lein aur Fibonacci series ka output generate karein, starting from 0 up to the specified number of terms."

// not solve

document.write("<br>","<br>")

let ab="Ek string input lein aur uss mein vowels ki counting karein."
document.write(ab,"<br>")
var name2 ="abdullahsani"
var vowelsCount= 0

for(var p=0; p<name2.length; p++){
    document.write(name2[p])
    if(name2[p]==="a" ||name2[p]==="e"||name2[p]==="i"||name2[p]==="o"||name2[p]==="u" ){
        vowelsCount++
    }
}
document.write("<br>")
document.write(vowelsCount)

document.write("<br>","<br>")

let ac="Ek integer input lein aur uska factorial calculate karein."
document.write(ac,"<br>")

// not solve

document.write("<br>","<br>")

let ad ="Ek integer input lein aur uske digits ka sum calculate karein."
document.write(ad,"<br>")

var num5=[1,2,4,6,7,2]
var sumNum=0
for(var q=0; q<num5.length; q++){
    sumNum+= num5[q]

}
document.write(sumNum)
document.write("<br>","<br>")

let ae="Ek list of integers lein aur uski elements ko reverse karein."
document.write(ae,"<br>")

var integers2 = [1, 2, 3, 4, 5,6,7,8,9,10];

var reverse1=integers2.reverse()

document.write(reverse1)

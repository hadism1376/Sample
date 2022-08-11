function dataAge(age){
   if (age>=18){
       console.log(`age:${age}`)
       console.log(`You go to university:)))))`)
   }else {
       console.log(`age:${age}`)
       console.log(`Oh sorry!you can not go to university...!`)
   }
}
dataAge(18)
dataAge(20)
dataAge(16)
console.log(`************************************************`)
function dataMoney(money){
    if (money>=180){
        console.log(`money:${money}`)
        console.log(`You can buy prayd:))))`)
    }else{
        console.log(`money:${money}`)
        console.log(`You can buy peykan:(((`)
    }
}
dataMoney(200)
dataMoney(100)
dataMoney(50)
console.log(`************************************************`)
function name(firstName,lastName,fatherName,age,email){
    let info=`fullName:${firstName}----${lastName},fatherName:${fatherName},age:${age},email:${email}`
    console.log(info)
}
name("hadis","mollaeii","saeedreza","25","hadis@gmail.com")
name("pari","mollaeii","saeedreza","16","pari@gmail.com")
console.log(`*******************************************************`)
function compare(x,y,z){
    if (x>y && x>z && z>y){
        console.log(`x:${x}>z:${z}>y:${y}`)
    }else if (x>y && x>z && y>z){
        console.log(`x:${x}>y:${y}>z:${z}`)
    }else if (y>x && y>z && x>z){
        console.log(`y:${y}>x:${x}>z:${z}`)
    }else if (y>x && y>z && z>x){
        console.log(`y:${y}>z:${z}>x:${x}`)
    }else if (z>x && z>y && x>y){
        console.log(`z:${z}>x:${x}>y:${y}`)
    }else if (z>x && z>y && y>x){
        console.log(`z:${z}>y:${y}>x:${x}`)
    }else {
        console.log(`x:${x}=y:${y}=z:${z}`)
    }
}
compare(40,50,60)
compare(70,60,50)
compare(20,20,20)
compare(10,20,9)
console.log(`************************************************`)
function result(x){
    if (x===1){
        console.log(`result A`)
    }else if (x===2){
        console.log(`result B`)
    }else if (x===3){
        console.log(`result C`)
    }else if (x===4){
        console.log(`result D`)
    }else {
        console.log(`Nooooooooooooooooooooooooo`)
    }
}
result(3)
result(4)
result(0)
result(1)
console.log(`************************************************`)
function operator1(x,y,operand){
    if (operand==="+"){
        console.log(`x+y=${x+y}`)
    }else if (operand==="-"){
        console.log(`x-y=${x-y}`)
    }else if (operand==="*"){
        console.log(`x*y=${x*y}`)
    }else if (operand==="**"){
        console.log(`x**y=${x**y}`)
    }else if (operand==="/"){
        console.log(`x/y=${x/y}`)
    }else{
        console.log(`operand is not true...!`)
    }
}
operator1(10,2,"**")
operator1(1000,2,"/")
operator1(450,300,"+")
operator1(1000,365,"-")
console.log(`**********************************************`)
function week(x){
   switch (x) {
       case 1:{
           console.log(`saturday`)
           break
       }case 2:{
           console.log(`sunday`)
           break
       }case 3:{
           console.log(`monday`)
           break
       }case 4:{
           console.log(`tuesday`)
           break
       }case 5:{
           console.log(`wednesday`)
           break
       }case 6:{
           console.log(`thursday`)
           break
       }case 7:{
           console.log(`friday`)
           break
       }default:{
           console.log(`Not ok....!`)
       }
   }
}
week(1)
week(4)
week(6)
week(3)
console.log(`*********************************************`)
function operator(x,y,operand){
    switch (operand){
        case "+":{
            console.log(`x+y:${x+y}`)
            break
        }
        case "-":{
            console.log(`x-y:${x-y}`)
            break
        } case "*":{
            console.log(`x*y:${x*y}`)
            break
        } case "/":{
            console.log(`x/y:${x/y}`)
            break
        }
    }
}
operator(30,10,"+")
operator(200,20,"/")
operator(100,20,"*")
operator(250,50,"-")
console.log(`***********************************************`)
function checkEvenOdd(x){
    for (let i=1;i<=x;i++){
        if (i%2===0){
            console.log(`${i}:even`)
        }else{
            console.log(`${i}:odd`)
        }
    }
}
checkEvenOdd(10)
checkEvenOdd(50)
console.log(`*************************************************`)
// 1 2 3 ....10
//i=1
//i=2
//i=3
//sum
function plus(x){
    let sum=0
    for (let i=1;i<=x;i++){
        sum+=i

    }
    console.log(`sum:${sum}`)
}
plus(10)
plus(20)
plus(100)
plus(1000)
plus(10000)
plus(100000)
plus(1000000)
console.log(`********************************************`)
//1 2 3 4 5 --->5
function prime(x){
    let count=0
    let k=0
    for (let i=1;i<=x;i++){
        if (x%i===0){
           count++
            k++
            console.log(i)
        }
    }
    if (count===2){
        console.log(`x:${x}===>prime-----k:${k}`)
    }else{
        console.log(`x:${x}===>not-prime----k:${k}`)
    }
}
prime(17)
prime(13)
prime(111)
prime(19)
console.log(`***************************************************`)
//6!=6*5*4*3*2*1=?
//i=1
//i=2
function factorial1(x){
    let mul=1
    for (let i=1;i<=x;i++){
        // console.log(i)
        mul*=i
        //mul=mul*i
        //mul=1*1=1
        //mul=1*2=2
    }
    console.log(`mul:${mul}`)

}
factorial1(5)
factorial1(6)
factorial1(10)
factorial1(100)
console.log(`******************************************`)
function printFor(x){
    let counter=0
    for (let i=1;i<=x;i++){
        if (x%i===0){
            console.log(i)
            counter+=1
        }
    }
    console.log(`counter:${counter}`)
}
printFor(20)
printFor(15)
printFor(121)
printFor(1235)
console.log(`******************************************************`)
//a b c
//1 1 2 3 5 8 ....
//  a b c
//1+1=2
//2+1=3
//3+2=5
function fibonacci1(x){
  let a=1
  let b=1
  let c=0
    console.log(a)
    console.log(b)
  for (let i=1;i<=x;i++){
      c=a+b
      a=b
      b=c
      console.log(c)
  }

}
fibonacci1(50)
console.log(`-------------------------------------------------`)
fibonacci1(20)
console.log(`*******************************************************`)
function fibonacci2(x){
    let a=1
    let b=1
    let c=0
    console.log(a)
    console.log(b)
    let i=1
   while (i<=x){
      c=a+b
      a=b
      b=c
      console.log(c)
     i++
    }
}
fibonacci2(15)
console.log(`----------------------------------------------------`)
fibonacci2(20)
console.log(`************************************************************`)

function factorial2(x){
    //4!=4*3*2*1=? ---->for
    let mul=1
    let i=1
    while (i<=x){
     mul*=i
     //mul=mul*i
     //mul=1*1=1
     //mul=1*2=2
        i++
    }
    console.log(`mul:${mul}`)
}
factorial2(5)
factorial2(100)
factorial2(10)
factorial2(150)
factorial2(200)
console.log(`***********************************************************`)

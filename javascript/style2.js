
console.log(['p', 'r', 'a', 's', 'a', 'd'].includes('k'))

console.log(a)
var a=10
var c

console.log(a)
let b=20

console.log(b)


console.log("hi")



function greet(name)
{
    let a=6
    console.log(name+" is a good boy")
    console.log(a)
}
let name="barry";

greet(name)


let p="java is awesome"
console.log(p ,typeof p)
let price=25
console.log(`the cost is ${price}`)
console.log("the cost is "+price)
console.log(p[0])


function mad()
{
    console.log("i am good")


}
function bad(){
    console.log("i am bad")
}
//function combine(x){x()}
//ombine (mad)
bad()

function counter (n)
{
     var count=n
    function y ()
    {
        count++;
        console.log(count)
    }
    return y;
}


let z = counter(10);
console.log(z);
z()
z()


function hello1(){
    
}
console.log(['p', 'r', 'a', 's', 'a', 'd'].includes('k'))
console.log()



let arr=[2,8,5,4,1,9]

let result=arr.forEach(function(ele)
{
    return ele%2==0?"even":"odd";
}


)
console.log(result);

new Promise(function(resolve,reject){
    resolve("hai");
    reject("bye")
  })
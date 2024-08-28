console.log(document)

/*str="js is very easy"
console.log(str)

console.log(str.replace("js is very easy","sj si yerv ysae"))


function generatepassword(){
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
    let pass=''
    for(i=0;i<8;i++)
    {
        let char=Math.floor(Math.random()*str.length)
        pass=pass+str[char]

    }
    return pass
}
let randomPass=generatepassword()
console.log(randomPass)



let arr=["ada sharma","pooo bedi","jija sharma"]
 let x2=arr.filter(function(ele)
 {
    return ele.endsWith("sharma")
 })
 console.log(x2)

console.log(arr.slice(2,3))
console.log(arr.splice(2,0,"giga"))

console.log(arr)


str='"h","b","k"'
console.log(str.replace("b","o"))
console.log(str)

*/


const rotateBtn = document.getElementById('rotate');
const cards = document.getElementsByClassName('card');

rotateBtn.addEventListener("click", rotate);

function rotate() {
  for (let i = 0; i < cards.length; i++) {
    
    cards[i].classList.add("animate__animated" ,"animate__bounce");
    
}
}



function change(){
    let color='#'+Math.round(Math.random()*100000000).toString(16)
    document.body.style.backgroundColor=color
}
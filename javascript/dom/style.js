
console.log(document)


//let ele = document.getElementById("heading")
//console.log(ele.textContent)
//console.log(ele.innerText) //innerText also checks the CSS
const input = document.getElementById("inp")
const button = document.getElementById('btn')
const result=document.getElementById("result")
button.addEventListener('click',fun)
function fun()
{
    result.textContent=`true friends ${input.value}`
    document.body.style.background="hsl(0,6%,5%)";
}
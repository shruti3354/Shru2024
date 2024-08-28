

let p = document.getElementById('para');
let c = 10;

function display() {
  p.textContent = c;
  if (c === 0) {
    clearInterval(myinterval);
    p.textContent = "Let's begin";
    return; // Stop the function after displaying "Let's begin"
  }
  c--;
}

let myinterval = setInterval(display, 1000);





let a=setTimeout(function()
{
    alert("hi")

},5000)
let a = document.getElementById('num');
let b = document.getElementById('evenorOdd');

let count = 0;

function updateCount() {
  a.textContent = count;
  b.textContent = count % 2 === 0 ? 'Even' : 'Odd';
  
  
}


function incr() {
  if (count < 20) {
    count++;
    updateCount();
  } else {
    alert("Not more than 20");
  }
}

function decr() {
  if (count > 0) {
    count--;
    updateCount();
  } else {
    alert("negative values not counted");
  }
}



function reset() {
  count = 0;
  updateCount();
}

updateCount()
const maindiv=document.getElementById('main')
let mydata;
function fetchData(){

    fetch('https://api.quotable.io/random')
    .then(function(res)
    {
        return res.json();
    })
    .then(function(data)
{
    console.log(data)
    mydata=data;
    displaydata()
})
.catch( function(err)
{
    console.log("error: "+err)

}

)
}
fetchData()
document.getElementById('btn').addEventListener('click',fetchData)

function displaydata()
{
    maindiv.textContent=''
    const para=document.createElement('p')
    para.textContent=mydata.content;
    const author = document.createElement('h2');
    author.textContent = mydata.author;
    maindiv.append(para,author)
}



  

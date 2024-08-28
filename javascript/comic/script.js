const comicHeros = [
	{
		hero: "Spider-Man",
		name: "Peter Benjamin Parker",
		link: "http://marvel.com/characters/54/spider-man",
		img: "https://upload.wikimedia.org/wikipedia/commons/5/52/Spider-Man.jpg",
		size: 40000,
	},
	{
		hero: "CAPTAIN MARVEL",
		name: "Carol Danvers",
		link: "http://marvel.com/characters/9/captain_marvel",
		img: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg",
		size: 40000,
	},
	{
		hero: "HULK",
		name: "Robert Bruce Banner",
		link: "http://marvel.com/characters/25/hulk",
		img: "https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png",
		size: 40000,
	},
	
]

console.log(comicHeros)

const a=document.getElementById("main")

function fun()
{
    comicHeros.forEach(function(ele)
{
    const divv=document.createElement("div")
    divv.classList.add("comic")
    const image=document.createElement("img")
    image.src=ele.img
    image.alt=ele.hero
    const title = document.createElement('h2')
    title.textContent= ele.hero
    divv.append(image, title)
    a.appendChild(divv)
    
})
}
fun()




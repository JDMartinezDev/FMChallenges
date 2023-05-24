let avg = document.getElementById("avg-score")
let scores = document.getElementById('scores')
let totalScore = 0

async function getIcon(path){
	let res = await fetch(path)
	return res.text()
}

document.addEventListener("DOMContentLoaded",async () => {
	const res = await fetch('data.json')
	const data = await res.json() 
	
	for(let i=0; i<data.length; i++){
		let element = data[i]
		let icon = await getIcon(element.icon)
		let titleContent = `<i>${icon}</i>${element.category}`
		let scoreStrip = document.createElement('div')
		let aside = document.createElement('aside')
		let title = document.createElement('div')
		let asideContent = `<strong>${element.score}</strong>  /  100`

		aside.innerHTML = asideContent
		title.innerHTML = titleContent
		title.classList.add('score-strip-title')
		scoreStrip.classList.add('score-strips')
		scoreStrip.id = element.category.toLowerCase()
		scoreStrip.appendChild(title)
		scoreStrip.appendChild(aside)
		scores.appendChild(scoreStrip)
		totalScore += element.score
	}

	let score = Math.floor(totalScore/data.length)
	avg.innerHTML = `<div><p>${score}</p>
							of 100</div>`
})
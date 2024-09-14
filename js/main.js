const handSeconds = document.querySelector('.second-hand')
const handMinutes = document.querySelector('.minute-hand')
const handHours = document.querySelector('.hour-hand')

const setDate = () => {
	const now = new Date()

	// function for seconds
	const seconds = now.getSeconds()
	const secDegrees = (seconds / 60) * 360 + 90
	console.log(secDegrees)
	handSeconds.style.transform = `rotate(${secDegrees}deg)`

	// function for minutes

	const minutes = now.getMinutes()
	const minDegress = (minutes / 60) * 360 + 90
	console.log(minDegress)
	handMinutes.style.transform = `rotate(${minDegress}deg)`

	// function for hours

	const hours = now.getHours()
	// console.warn(hours)

	const hoursDegress = (minutes / 12) * 360 + 90
	console.log(hoursDegress)
	handHours.style.transform = `rotate(${hoursDegress}deg)`
}

setInterval(setDate, 1000)

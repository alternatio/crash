export const getTime = (): number => {
	const variant = Math.round(Math.random() * 10)
	let totalTime = 1000

	if (variant <= 2) {
		totalTime = Math.random() * (7000 - 2000) + 2000
	} else if (variant <= 6) {
		totalTime = Math.random() * (11000 - 5000) + 5000
	} else if (variant <= 9) {
		totalTime = Math.random() * (13000 - 8000) + 8000
	} else if (variant <= 10) {
		totalTime = Math.random() * (14000 - 11000) + 11000
	}
	return totalTime
}
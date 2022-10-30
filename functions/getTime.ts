export const getTime = (): number => {
	const variant = Math.round(Math.random() * 10)

	const randomize = (min: number, max: number): number => {
		return Math.random() * (max - min) + min
	}
	if (variant <= 2) return randomize(4000, 20)
	if (variant <= 6) return randomize(11000, 5000)
	if (variant <= 9) return randomize(13000, 8000)
	if (variant <= 10) return randomize(15000, 13000)

	return 1000
}
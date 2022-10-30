import {getTime} from "./getTime";
import giveMoney from "./giveMoney";

const startGame: Function = (
	handleIsCrash: Function,
	setCoefficient: Function,
	handleMoneyIsSeized: Function,
	bet: number,
	money: number,
	setMoney: Function,
	targetCoefficient: number,
	coefficient: number,
	targetCoefficientIsEnable: boolean,
	setHistory: Function,
	history: number[],
	handleWinPopup: Function,
	setTotalWin: Function
) => {
	const time = getTime()
	let seconds = 0
	let moneyIsSeized = false

	handleMoneyIsSeized(false)
	handleIsCrash(false)
	setMoney(money - bet)

	let exponential = 1

	const intervalFunction: Function = () => {
		seconds += 1
		exponential = Math.exp(
			(Math.exp(seconds / 400) - 1) / (seconds / (seconds / 2))
		)

		if (targetCoefficientIsEnable && !moneyIsSeized) {
			if (exponential >= targetCoefficient) {
				moneyIsSeized = true
				giveMoney(
					setMoney,
					handleMoneyIsSeized,
					bet,
					exponential,
					money,
					handleWinPopup,
					setTotalWin
				)
			} else {
				console.log('wait')
			}
		}

		setCoefficient(exponential)
	}

	// interval of exponential value
	const interval = setInterval(() => {
		intervalFunction()
	}, 15)

	setTimeout(() => {
		handleIsCrash(true)
		if (history.length > 3)
			history.shift()
		setHistory([...history, exponential])
		console.log(exponential)
		clearInterval(interval)
	}, time)
}

export default startGame
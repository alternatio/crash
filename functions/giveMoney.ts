const giveMoney: Function = (
	setMoney: Function,
	handleMoneyIsSeized: Function,
	bet: number,
	coefficient: number,
	money: number,
	handleWinPopup: Function,
	setTotalWin: Function
) => {
	let totalMoneyReceived = 0

	totalMoneyReceived = bet * coefficient
	console.log(totalMoneyReceived, bet, coefficient)
	setMoney(totalMoneyReceived + money)

	setTotalWin(totalMoneyReceived)
	handleWinPopup(true)
	handleMoneyIsSeized(true)
}

export default giveMoney
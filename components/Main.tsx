import React, {FC} from "react";
import style from "/styles/pages/Home.module.scss";
import InputBlock1 from "./InputBlock1";
import InputBlock2 from "./InputBlock2";
import Buttons from "./Buttons";
import History from "./History";

interface MainInterface {
	money: number
	setBet: Function
	bet: number
	targetCoefficient: number
	targetCoefficientIsEnable: boolean
	setTargetCoefficient: Function
	handleTargetCoefficient: Function

	isCrash: boolean
	history: number[]
	coefficient: number
	moneyIsSeized: boolean
	setMoney: Function
	setHistory: Function
	setTotalWin: Function
	handleIsCrash: Function
	handleWinPopup: Function
	setCoefficient: Function
	handleMoneyIsSeized: Function
}

const Main: FC<MainInterface> = React.memo((props) => {
	return (
		<main className={style.main}>
			<Buttons
				handleWinPopup={props.handleWinPopup}
				bet={props.bet}
				coefficient={props.coefficient}
				handleIsCrash={props.handleIsCrash}
				handleMoneyIsSeized={props.handleMoneyIsSeized}
				history={props.history}
				isCrash={props.isCrash}
				money={props.money}
				setCoefficient={props.setCoefficient}
				setHistory={props.setHistory}
				setMoney={props.setMoney}
				targetCoefficient={props.targetCoefficient}
				targetCoefficientIsEnable={props.targetCoefficientIsEnable}
				moneyIsSeized={props.moneyIsSeized}
				setTotalWin={props.setTotalWin}/>
			<InputBlock1
				money={props.money}
				setBet={props.setBet}
				bet={props.bet}/>
			<InputBlock2
				targetCoefficient={props.targetCoefficient}
				targetCoefficientIsEnable={props.targetCoefficientIsEnable}
				setTargetCoefficient={props.setTargetCoefficient}
				handleTargetCoefficient={props.handleTargetCoefficient}/>
			<History
				history={props.history}/>
		</main>
	)
})

export default Main
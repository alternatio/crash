import React, {FC} from "react";
import {motion} from "framer-motion";
import style from "/styles/pages/Home.module.scss";
import startGame from "../functions/startGame";
import giveMoney from "../functions/giveMoney";

interface ButtonsInterface {
	bet: number
	money: number
	isCrash: boolean
	history: number[]
	coefficient: number
	moneyIsSeized: boolean
	targetCoefficient: number
	targetCoefficientIsEnable: boolean
	setMoney: Function
	setHistory: Function
	setTotalWin: Function
	handleIsCrash: Function
	setCoefficient: Function
	handleWinPopup: Function
	handleMoneyIsSeized: Function
}

const Buttons: FC<ButtonsInterface> = React.memo((props) => {
	return (
		<motion.div
			layout
			className={style.buttons}>
			<div className={style.money}>
				{props.money.toFixed(2)}$
			</div>
			<motion.button
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 0}}
				onClick={() => {
					(props.isCrash && (props.bet <= props.money)) ?
						startGame(
							props.handleIsCrash,
							props.setCoefficient,
							props.handleMoneyIsSeized,
							props.bet,
							props.money,
							props.setMoney,
							props.targetCoefficient,
							props.coefficient,
							props.targetCoefficientIsEnable,
							props.setHistory,
							props.history,
							props.handleWinPopup,
							props.setTotalWin) :
						!props.moneyIsSeized &&
							giveMoney(
								props.setMoney,
								props.handleMoneyIsSeized,
								props.bet,
								props.coefficient,
								props.money,
								props.handleWinPopup,
								props.setTotalWin
						)
				}}
				className={style.buttonStart}>
				{props.isCrash ?
					'Старт' :
					props.moneyIsSeized ?
						'-' :
						'Забрать'
				}
			</motion.button>
		</motion.div>
	)
})

export default Buttons
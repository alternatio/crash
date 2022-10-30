import React, {FC} from "react";
import {AnimatePresence, motion} from "framer-motion";
import style from "/styles/pages/Home.module.scss";

interface ButtonsInterface {
	bet: number
	money: number
	isCrash: boolean
	moneyIsSeized: boolean
	targetCoefficientIsEnable: boolean
	startGame: Function
	giveMoney: Function
}

const Buttons: FC<ButtonsInterface> = (props) => {
	return (
		<motion.div
			layout
			className={style.buttons}>
			<div className={style.money}>
				{props.money.toFixed(2)}$
			</div>
			<AnimatePresence>
				{(props.isCrash || !props.targetCoefficientIsEnable || props.moneyIsSeized) && (
					<motion.button
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						onClick={() => {
							(props.isCrash && (props.bet <= props.money)) ?
								props.startGame() :
								!props.moneyIsSeized &&
								props.giveMoney()
						}}
						className={style.buttonStart}>
						{props.isCrash ?
							'Старт' :
							props.moneyIsSeized ?
								'Ожидайте' :
								'Забрать'
						}
					</motion.button>
				)}
			</AnimatePresence>
		</motion.div>
	)
}

export default React.memo(Buttons)
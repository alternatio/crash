import React, {FC} from "react";
import {motion} from "framer-motion";
import style from "/styles/pages/Home.module.scss";

interface ScoreboardInterface {
	moneyIsSeized: boolean
	isCrash: boolean
	coefficient: number
}

const Scoreboard: FC<ScoreboardInterface> = (props) => {
	return (
		<motion.div
			initial={{background: '#FFF'}}
			animate={(!props.moneyIsSeized && props.isCrash) ?
				{background: '#FF1144'} :
				{background: '#FFF'}}
			className={style.scoreboard}>
			×{props.coefficient.toFixed(2)}
		</motion.div>
	)
}

export default React.memo(Scoreboard)
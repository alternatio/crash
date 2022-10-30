import {AnimatePresence, motion} from "framer-motion";
import React, {FC} from "react";
import style from "/styles/pages/Home.module.scss";

interface HistoryInterface {
	history: number[]
}

const History: FC<HistoryInterface> = (props) => {
	return (
		<motion.div
			layout
			className={style.history}>
			{props.history.map((value, index) => {
				return (
					<AnimatePresence
						key={index}>
						<motion.div
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							className={style.historyItem}>
							×{value.toFixed(2)}
						</motion.div>
					</AnimatePresence>
				)
			})}
		</motion.div>
	)
}

export default React.memo(History)
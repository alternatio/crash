import React, {FC} from "react";
import {AnimatePresence, motion} from "framer-motion";
import style from "/styles/pages/Home.module.scss";

interface WinPopupInterface {
	handleWinPopup: Function
	winPopupIsVisible: boolean
	totalWin: number
}

const WinPopup: FC<WinPopupInterface> = (props) => {

	setTimeout(() => {
		props.handleWinPopup(false)
	}, 3000)

	return (
		<AnimatePresence>
			{props.winPopupIsVisible &&
        <motion.div
          initial={{y: '-50vh'}}
          animate={{y: '0vh'}}
          exit={{y: '-50vh'}}
          className={style.popup}>
          Ты забрал: {props.totalWin.toFixed(2)}
        </motion.div>
			}
		</AnimatePresence>
	)
}

export default React.memo(WinPopup)
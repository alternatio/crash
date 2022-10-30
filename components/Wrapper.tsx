import { motion } from "framer-motion";
import React, {FC, ReactNode} from "react";
import style from "/styles/components/Wrapper.module.scss";

interface WrapperInterface {
	children?: ReactNode
	isDarkTheme: boolean;
}

export const Wrapper: FC<WrapperInterface> = React.memo((props) => {
	return (
		<motion.div
			initial={{filter: 'invert(0)'}}
			animate={props.isDarkTheme && {filter: 'invert(1)'}}
			className={style.content}>
			{props.children}
		</motion.div>
	)
})